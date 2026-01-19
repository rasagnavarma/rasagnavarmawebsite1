(function ($) {
    "use strict";

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initialize 3D Graphics
    function init3DScene() {
        const canvas3d = document.getElementById('canvas-3d');
        if (!canvas3d) return;

        // Three.js Scene Setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf8f9fa);
        
        const camera = new THREE.PerspectiveCamera(
            75,
            canvas3d.clientWidth / canvas3d.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(canvas3d.clientWidth, canvas3d.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        canvas3d.appendChild(renderer.domElement);

        // Create 3D Objects
        const geometries = [];
        const materials = [];
        const meshes = [];

        // Create multiple rotating cubes/shapes for visual effect
        const colors = [0x6244C5, 0xFFC448, 0x7C3AED, 0x06B6D4];
        
        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.OctahedronGeometry(0.8, 2);
            const material = new THREE.MeshPhongMaterial({
                color: colors[i % colors.length],
                emissive: colors[i % colors.length],
                emissiveIntensity: 0.3,
                wireframe: Math.random() > 0.5
            });
            
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = (Math.random() - 0.5) * 8;
            mesh.position.y = (Math.random() - 0.5) * 6;
            mesh.position.z = (Math.random() - 0.5) * 5;
            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;
            
            scene.add(mesh);
            meshes.push(mesh);
        }

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x6244C5, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const pointLight2 = new THREE.PointLight(0xFFC448, 0.5);
        pointLight2.position.set(-5, -5, 5);
        scene.add(pointLight2);

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);

            meshes.forEach((mesh, index) => {
                mesh.rotation.x += 0.003 + (index * 0.001);
                mesh.rotation.y += 0.005 - (index * 0.001);
                mesh.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.001;
            });

            renderer.render(scene, camera);
        }
        animate();

        // Handle Window Resize
        window.addEventListener('resize', () => {
            const width = canvas3d.clientWidth;
            const height = canvas3d.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        });
    }

    // Initialize 3D scene on page load
    window.addEventListener('load', init3DScene);
    
    // Initiate the wowjs
    new WOW().init();

    // Add GSAP Scroll Animations
    gsap.utils.toArray('section').forEach((section) => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => section.classList.add('visible'),
                onLeaveBack: () => section.classList.remove('visible'),
                markers: false
            }
        });
    });

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });

    // Smooth scrolling on the navbar links with GSAP
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: $(this.hash),
                    offsetY: 45
                },
                ease: "power3.inOut"
            });
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: 0,
            ease: "power3.inOut"
        });
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    // Add scroll-to plugin for GSAP
    gsap.registerPlugin(ScrollToPlugin);

    // Parallax Effect on Scroll
    gsap.utils.toArray('.wow').forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1,
                markers: false
            },
            y: -50,
            opacity: 1,
            duration: 1
        });
    });

    // Enhanced scroll-based animations for profile image
    gsap.to('.profile-image', {
        scrollTrigger: {
            trigger: '.profile-image',
            start: 'top center',
            end: 'center center',
            scrub: 1,
            markers: false
        },
        rotation: 5,
        scale: 1.05,
        duration: 1
    });

    
})(jQuery);

