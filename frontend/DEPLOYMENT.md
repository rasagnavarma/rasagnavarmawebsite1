Overview
========
This repo contains a React frontend (frontend/) and a FastAPI backend (backend/).
The goal: host the frontend on Netlify and the backend on Render (or a similar provider), and proxy `/api/*` from Netlify to the backend so the site at https://rasagnavarma.com can call `/api/*` directly.

Recommended flow (Render + Netlify)
----------------------------------
1. Create a Render web service
   - Provider: https://render.com
   - New -> Web Service -> Connect to GitHub repo `rasagnavarmawebsite1` -> branch `main`
   - Name: `rasagna-backend` (or your preferred name)
   - Environment: Python
   - Build Command: `pip install -r backend/requirements.txt`
   - Start Command (recommended): `gunicorn -k uvicorn.workers.UvicornWorker backend.server:app --bind 0.0.0.0:$PORT`
   - Set env vars (use Render's dashboard to set as secrets):
     - `MONGO_URL` (your Mongo connection string)
     - `DB_NAME` (e.g., `production_database`)
     - `CORS_ORIGINS` (set to `https://rasagnavarma.com` or `http://localhost:3000,https://rasagnavarma.com` for dev)
   - Deploy and confirm the service is stable. Copy the Render default domain, e.g. `rasagna-backend.onrender.com`.

2. Configure DNS (optional, recommended)
   - Create a CNAME record for `api.rasagnavarma.com` pointing to the Render service's domain.
   - Enable automatic TLS in Render. After DNS propagation, Render will provide an HTTPS endpoint at `https://api.rasagnavarma.com`.

3. Configure Netlify to proxy /api to the backend
   - This repo includes `netlify.toml` with the redirect:
     [[redirects]]
       from = "/api/*"
       to = "https://api.rasagnavarma.com/:splat"
       status = 200
       force = true
   - Push `netlify.toml` and redeploy your Netlify site.

4. Verify end-to-end
   - curl -i -H "Origin: https://rasagnavarma.com" "https://rasagnavarma.com/api/profile"
     - Expect HTTP 200 and JSON payload (and the backend should respond; CORS header will be set by backend if configured)
   - Visit the live site and confirm data loads and "Loading" states are gone.

Alternative (host backend on same Netlify site)
----------------------------------------------
- You can convert endpoints to serverless functions on Netlify, but that requires porting FastAPI endpoints to serverless handlers. If you'd like that, I can prepare a conversion plan.

Notes
-----
- The repo includes a `render.yaml` example manifest you can use or adapt for Render's infra-as-code.
- I will: set `CORS_ORIGINS` on the Render service to `https://rasagnavarma.com` and confirm `/api/*` responds.

If you want, I can proceed to create the Render service and set the required env vars — tell me whether you will:
- Provide Render & DNS access (credentials), or
- Prefer I prepare everything and send instructions for you to finalize in Render & DNS.

Automated deploy (recommended)
--------------------------------
I added a GitHub Actions workflow that will trigger a Render deploy for your backend when you push to `main` or run the workflow manually. To use it:

1. Create a Render service (see steps above) or grab your existing Render Service ID.
2. Add two repository secrets in GitHub (Settings → Secrets → Actions):
   - `RENDER_API_KEY` — a Render API key (create in Render Dashboard → Account → API Keys)
   - `RENDER_SERVICE_ID` — the Render service ID (available on the service settings page)
3. Once secrets are configured, go to the Actions tab and run the "Deploy backend to Render" workflow or push to `main`.

The workflow will:
- Trigger a deploy via Render API,
- Poll until the deploy finishes (success/failure), and
- Print the deployed domain (so you can add DNS/CNAME if you want a custom `api.rasagnavarma.com`).

I can finish creating the Render service and set DNS if you provide access, or you can run the workflow yourself — which option do you prefer?
