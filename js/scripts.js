    /*!
    * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */

    // Scripts

    window.addEventListener('DOMContentLoaded', event => {
        // Navbar shrink function
        var navbarShrink = function () {
            const navbarCollapsible = document.body.querySelector('#mainNav');
            if (!navbarCollapsible) {
                return;
            }
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink')
            } else {
                navbarCollapsible.classList.add('navbar-shrink')
            }
        };

        // Shrink the navbar 
        navbarShrink();

        // Shrink the navbar when page is scrolled
        document.addEventListener('scroll', navbarShrink);

        // Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                rootMargin: '0px 0px -40%',
            });
        };

        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    });
    document.addEventListener('DOMContentLoaded', event => {
        // Fungsi untuk toggle teks pada kartu
        function toggleCard(card) {
            var content = card.querySelector('.card-text');
            var toggleButton = card.querySelector('.toggle-button');
    
            if (content.classList.contains('collapsed')) {
                // Jika teks sedang singkat, tampilkan semua teks
                content.classList.remove('collapsed');
                content.classList.add('expanded');
                toggleButton.textContent = 'Tutup';
            } else {
                // Jika teks sudah penuh, kembalikan ke singkat
                content.classList.remove('expanded');
                content.classList.add('collapsed');
                toggleButton.textContent = 'Lihat Selengkapnya';
            }
        }
    
        // Event listener untuk memanggil fungsi toggle saat tombol diklik
        var buttons = document.querySelectorAll('.toggle-button');
        buttons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                // Mencegah event bubbling
                event.stopPropagation();
                // Panggil fungsi toggleCard dengan elemen parent dari button
                toggleCard(button.parentNode.parentNode);
            });
        });
    }); 
