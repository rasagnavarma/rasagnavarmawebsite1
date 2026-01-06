#!/usr/bin/env python3
"""
Backend API Testing for Rasagna Varma's Portfolio Website
Tests all API endpoints for functionality and data integrity
"""

import requests
import json
import sys
from typing import Dict, Any, List

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

class PortfolioAPITester:
    def __init__(self):
        self.base_url = get_backend_url()
        if not self.base_url:
            raise Exception("Could not get backend URL from frontend/.env")
        
        self.api_url = f"{self.base_url}/api"
        self.test_results = []
        self.failed_tests = []
        
        print(f"Testing API at: {self.api_url}")
        print("=" * 60)

    def log_result(self, endpoint: str, status: str, message: str, response_data: Any = None):
        """Log test result"""
        result = {
            "endpoint": endpoint,
            "status": status,
            "message": message,
            "response_data": response_data
        }
        self.test_results.append(result)
        
        status_icon = "✅" if status == "PASS" else "❌"
        print(f"{status_icon} {endpoint}: {message}")
        
        if status == "FAIL":
            self.failed_tests.append(result)

    def test_root_endpoint(self):
        """Test GET /api/ - Root endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "status" in data:
                    self.log_result("GET /api/", "PASS", 
                                  f"Status: {response.status_code}, Message: {data.get('message')}")
                else:
                    self.log_result("GET /api/", "FAIL", 
                                  f"Missing required fields in response: {data}")
            else:
                self.log_result("GET /api/", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("GET /api/", "FAIL", f"Request failed: {str(e)}")

    def test_profile_endpoint(self):
        """Test GET /api/profile - Hero section data"""
        try:
            response = requests.get(f"{self.api_url}/profile", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["name", "role", "tagline", "metrics"]
                
                missing_fields = [field for field in required_fields if field not in data]
                if missing_fields:
                    self.log_result("GET /api/profile", "FAIL", 
                                  f"Missing required fields: {missing_fields}")
                else:
                    # Check metrics structure
                    metrics = data.get("metrics", [])
                    if isinstance(metrics, list) and len(metrics) > 0:
                        metric_sample = metrics[0]
                        metric_fields = ["label", "value", "suffix"]
                        missing_metric_fields = [field for field in metric_fields if field not in metric_sample]
                        
                        if missing_metric_fields:
                            self.log_result("GET /api/profile", "FAIL", 
                                          f"Metrics missing fields: {missing_metric_fields}")
                        else:
                            self.log_result("GET /api/profile", "PASS", 
                                          f"Profile data valid with {len(metrics)} metrics")
                    else:
                        self.log_result("GET /api/profile", "FAIL", "No metrics data found")
            else:
                self.log_result("GET /api/profile", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("GET /api/profile", "FAIL", f"Request failed: {str(e)}")

    def test_bio_endpoint(self):
        """Test GET /api/bio - Biography data"""
        try:
            response = requests.get(f"{self.api_url}/bio", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["title", "narrative", "values"]
                
                missing_fields = [field for field in required_fields if field not in data]
                if missing_fields:
                    self.log_result("GET /api/bio", "FAIL", 
                                  f"Missing required fields: {missing_fields}")
                else:
                    narrative = data.get("narrative", [])
                    values = data.get("values", [])
                    
                    if isinstance(narrative, list) and len(narrative) > 0 and isinstance(values, list) and len(values) > 0:
                        self.log_result("GET /api/bio", "PASS", 
                                      f"Bio data valid with {len(narrative)} narrative items and {len(values)} values")
                    else:
                        self.log_result("GET /api/bio", "FAIL", 
                                      "Narrative or values data is empty or invalid")
            else:
                self.log_result("GET /api/bio", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("GET /api/bio", "FAIL", f"Request failed: {str(e)}")

    def test_experiences_endpoint(self):
        """Test GET /api/experiences - Work experience timeline"""
        try:
            response = requests.get(f"{self.api_url}/experiences", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list) and len(data) > 0:
                    experience_sample = data[0]
                    required_fields = ["id", "company", "role", "team", "dates", "achievements", "impact"]
                    
                    missing_fields = [field for field in required_fields if field not in experience_sample]
                    if missing_fields:
                        self.log_result("GET /api/experiences", "FAIL", 
                                      f"Experience missing fields: {missing_fields}")
                    else:
                        self.log_result("GET /api/experiences", "PASS", 
                                      f"Experiences data valid with {len(data)} experiences")
                else:
                    self.log_result("GET /api/experiences", "FAIL", 
                                  "No experiences data found or invalid format")
            else:
                self.log_result("GET /api/experiences", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("GET /api/experiences", "FAIL", f"Request failed: {str(e)}")

    def test_missions_endpoint(self):
        """Test GET /api/missions - Escalation war room missions"""
        try:
            response = requests.get(f"{self.api_url}/missions", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list) and len(data) > 0:
                    mission_sample = data[0]
                    required_fields = ["id", "title", "status", "priority", "problem", "actions", "outcome"]
                    
                    missing_fields = [field for field in required_fields if field not in mission_sample]
                    if missing_fields:
                        self.log_result("GET /api/missions", "FAIL", 
                                      f"Mission missing fields: {missing_fields}")
                    else:
                        self.log_result("GET /api/missions", "PASS", 
                                      f"Missions data valid with {len(data)} missions")
                else:
                    self.log_result("GET /api/missions", "FAIL", 
                                  "No missions data found or invalid format")
            else:
                self.log_result("GET /api/missions", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("GET /api/missions", "FAIL", f"Request failed: {str(e)}")

    def test_speaking_endpoint(self):
        """Test GET /api/speaking - Speaking engagements"""
        try:
            response = requests.get(f"{self.api_url}/speaking", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list) and len(data) > 0:
                    speaking_sample = data[0]
                    required_fields = ["id", "event", "topic", "year", "audience", "type"]
                    
                    missing_fields = [field for field in required_fields if field not in speaking_sample]
                    if missing_fields:
                        self.log_result("GET /api/speaking", "FAIL", 
                                      f"Speaking engagement missing fields: {missing_fields}")
                    else:
                        self.log_result("GET /api/speaking", "PASS", 
                                      f"Speaking data valid with {len(data)} engagements")
                else:
                    self.log_result("GET /api/speaking", "FAIL", 
                                  "No speaking data found or invalid format")
            else:
                self.log_result("GET /api/speaking", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("GET /api/speaking", "FAIL", f"Request failed: {str(e)}")

    def test_certifications_endpoint(self):
        """Test GET /api/certifications - Certifications list"""
        try:
            response = requests.get(f"{self.api_url}/certifications", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list) and len(data) > 0:
                    cert_sample = data[0]
                    required_fields = ["name", "issuer", "year", "category"]
                    
                    missing_fields = [field for field in required_fields if field not in cert_sample]
                    if missing_fields:
                        self.log_result("GET /api/certifications", "FAIL", 
                                      f"Certification missing fields: {missing_fields}")
                    else:
                        self.log_result("GET /api/certifications", "PASS", 
                                      f"Certifications data valid with {len(data)} certifications")
                else:
                    self.log_result("GET /api/certifications", "FAIL", 
                                  "No certifications data found or invalid format")
            else:
                self.log_result("GET /api/certifications", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("GET /api/certifications", "FAIL", f"Request failed: {str(e)}")

    def test_skills_endpoint(self):
        """Test GET /api/skills - Skills data"""
        try:
            response = requests.get(f"{self.api_url}/skills", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["platforms", "programming", "tools", "methodologies", "leadership"]
                
                missing_fields = [field for field in required_fields if field not in data]
                if missing_fields:
                    self.log_result("GET /api/skills", "FAIL", 
                                  f"Missing required fields: {missing_fields}")
                else:
                    # Check that each field contains a list with items
                    valid_skills = True
                    for field in required_fields:
                        if not isinstance(data[field], list) or len(data[field]) == 0:
                            valid_skills = False
                            break
                    
                    if valid_skills:
                        total_skills = sum(len(data[field]) for field in required_fields)
                        self.log_result("GET /api/skills", "PASS", 
                                      f"Skills data valid with {total_skills} total skills across categories")
                    else:
                        self.log_result("GET /api/skills", "FAIL", 
                                      "Some skill categories are empty or invalid")
            else:
                self.log_result("GET /api/skills", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("GET /api/skills", "FAIL", f"Request failed: {str(e)}")

    def test_community_endpoint(self):
        """Test GET /api/community - Community work"""
        try:
            response = requests.get(f"{self.api_url}/community", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list) and len(data) > 0:
                    community_sample = data[0]
                    required_fields = ["title", "organization", "description", "team"]
                    
                    missing_fields = [field for field in required_fields if field not in community_sample]
                    if missing_fields:
                        self.log_result("GET /api/community", "FAIL", 
                                      f"Community work missing fields: {missing_fields}")
                    else:
                        self.log_result("GET /api/community", "PASS", 
                                      f"Community data valid with {len(data)} community works")
                else:
                    self.log_result("GET /api/community", "FAIL", 
                                  "No community data found or invalid format")
            else:
                self.log_result("GET /api/community", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("GET /api/community", "FAIL", f"Request failed: {str(e)}")

    def test_contact_endpoint(self):
        """Test POST /api/contact - Contact form submission"""
        try:
            # Test data as specified in the review request
            test_contact_data = {
                "name": "Rasagna Varma",
                "email": "rasagna.varma@salesforce.com",
                "message": "Testing the contact form functionality for the portfolio website. This is a comprehensive test to ensure the API endpoint is working correctly."
            }
            
            response = requests.post(
                f"{self.api_url}/contact", 
                json=test_contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                if "success" in data and data["success"] and "message" in data:
                    self.log_result("POST /api/contact", "PASS", 
                                  f"Contact submission successful: {data.get('message')}")
                else:
                    self.log_result("POST /api/contact", "FAIL", 
                                  f"Invalid response format: {data}")
            else:
                self.log_result("POST /api/contact", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("POST /api/contact", "FAIL", f"Request failed: {str(e)}")

    def run_all_tests(self):
        """Run all API endpoint tests"""
        print("Starting Portfolio API Tests...")
        print(f"Backend URL: {self.base_url}")
        print(f"API Base URL: {self.api_url}")
        print("=" * 60)
        
        # Run all tests
        self.test_root_endpoint()
        self.test_profile_endpoint()
        self.test_bio_endpoint()
        self.test_experiences_endpoint()
        self.test_missions_endpoint()
        self.test_speaking_endpoint()
        self.test_certifications_endpoint()
        self.test_skills_endpoint()
        self.test_community_endpoint()
        self.test_contact_endpoint()
        
        # Print summary
        print("\n" + "=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = len([r for r in self.test_results if r["status"] == "PASS"])
        failed_tests = len(self.failed_tests)
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if self.failed_tests:
            print("\nFAILED TESTS:")
            print("-" * 40)
            for failed_test in self.failed_tests:
                print(f"❌ {failed_test['endpoint']}: {failed_test['message']}")
        
        print("\nDETAILED RESULTS:")
        print("-" * 40)
        for result in self.test_results:
            status_icon = "✅" if result["status"] == "PASS" else "❌"
            print(f"{status_icon} {result['endpoint']}: {result['message']}")
        
        return failed_tests == 0

if __name__ == "__main__":
    try:
        tester = PortfolioAPITester()
        success = tester.run_all_tests()
        
        if success:
            print("\n🎉 All tests passed! Portfolio API is working correctly.")
            sys.exit(0)
        else:
            print(f"\n⚠️  {len(tester.failed_tests)} test(s) failed. Please check the issues above.")
            sys.exit(1)
            
    except Exception as e:
        print(f"❌ Test execution failed: {str(e)}")
        sys.exit(1)