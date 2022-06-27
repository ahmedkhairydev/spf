(function ($) {
    "use strict";

    /*---------------------------
      Portifolios
    -----------------------------------*/
    const services = ['booth', 'campaign', 'category', 'counter-top', 'floor-display', 'floor-stand', 'gandolla', 'gate', 'giveaways', 'magazine', 'pillar', 'printings', 'shelf'];
    let servicesHTML = '', portfolioHTML = '';

    const portfolioImages = [
        {
            imageName: 'gate_1.jpg',
            serviceCat: 'gate',
            type: 'odd'
        },
        {
            imageName: 'floor-stand_2.jpg',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'campain_1.jpg',
            serviceCat: 'gate',
            type: 'odd'
        },
        {
            imageName: 'floor-display_1.png',
            serviceCat: 'floor-display',
            type: 'even'
        },
        {
            imageName: 'floor-display_2.png',
            serviceCat: 'floor-display',
            type: 'even'
        },
        {
            imageName: 'gandolla_1.jpg',
            serviceCat: 'gandolla',
            type: 'odd'
        },
        // 1
        {
            imageName: 'dangler_1.png',
            serviceCat: 'dangler',
            type: 'odd'
        },
        {
            imageName: 'floor-stand_3.jpg',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'gate_2.jpg',
            serviceCat: 'gate',
            type: 'odd'
        },
        {
            imageName: 'floor-stand_4.png',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'floor-display_3.png',
            serviceCat: 'floor-display',
            type: 'even'
        },
        {
            imageName: 'giveaways_1.png',
            serviceCat: 'giveaways',
            type: 'odd'
        },
        // 2
        {
            imageName: 'dangler_2.png',
            serviceCat: 'dangler',
            type: 'odd'
        },
        {
            imageName: 'floor-stand_5.png',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'gate_3.jpg',
            serviceCat: 'gate',
            type: 'odd'
        },
        {
            imageName: 'floor-stand_6.png',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'floor-stand_7.png',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'floor-display_4.jpg',
            serviceCat: 'floor-display',
            type: 'odd'
        },
        // 3
        {
            imageName: 'dangler_3.png',
            serviceCat: 'dangler',
            type: 'odd'
        },
        {
            imageName: 'floor-display_5.jpg',
            serviceCat: 'floor-display',
            type: 'even'
        },
        {
            imageName: 'floor-display_8.jpg',
            serviceCat: 'floor-display',
            type: 'odd'
        },
        {
            imageName: 'floor-display_6.jpg',
            serviceCat: 'floor-display',
            type: 'even'
        },
        {
            imageName: 'floor-stand_8.jpg',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'dangler_4.jpg',
            serviceCat: 'dangler',
            type: 'odd'
        },
        // 4
        {
            imageName: 'gate_4.jpg',
            serviceCat: 'gate',
            type: 'odd'
        },
        {
            imageName: 'floor-stand_1.jpg',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'dangler_5.png',
            serviceCat: 'dangler',
            type: 'odd'
        },
        {
            imageName: 'floor-stand_9.jpg',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'floor-stand_10.jpg',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'giveaways_2.jpg',
            serviceCat: 'giveaways',
            type: 'odd'
        },
        // 5
        {
            imageName: 'dangler_6.jpg',
            serviceCat: 'dangler',
            type: 'odd'
        },
        {
            imageName: 'floor-display_7.jpg',
            serviceCat: 'floor-display',
            type: 'even'
        },
        {
            imageName: 'dangler_7.jpg',
            serviceCat: 'dangler',
            type: 'odd'
        },
        {
            imageName: 'floor-display_9.jpg',
            serviceCat: 'floor-display',
            type: 'even'
        },
        {
            imageName: 'floor-stand_11.jpg',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'booth_1.png',
            serviceCat: 'booth',
            type: 'odd'
        },
        // 6
    ];

    const newServices = [...new Set(portfolioImages.map(portfolioImage => portfolioImage.serviceCat).sort())];
    newServices.map(serice => {
        servicesHTML += `
            <button class="btn-portfolio text-capitalize" data-filter=".${serice}">${serice.split('-').join(' ')}</button>
        `;
    });

    portfolioImages.forEach((portfolioImage, index) => {
        portfolioHTML += `
            <div class="col mb-25 grid-item ${portfolioImage.serviceCat} ${portfolioImage.type}">
                <!-- Single Portfolio Start -->
                <div class="single-portfolio">
                    <a class="thumbnail" href="javascript:">
                        <img src="assets/images/products/${portfolioImage.imageName}" loading="lazy" alt="Blog Image">
                    </a>
                    <div class="content">
                        <span class="subtitle text-capitalize">${portfolioImage.serviceCat.split('-').join(' ')}</span>
                    </div>
                </div>
                <!-- Single Portfolio End -->
            </div>
        `;
    });

    $('#portfolio').append(portfolioHTML);
    $('#services').append(servicesHTML);

    /* ----------------------------
    Isotope Activation 
    -------------------------------*/
    $('.grid').imagesLoaded(function () {
        // init Isotope
        var $grid2 = $('.grid').isotope({
            animationEngine: 'best-available',
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            transitionDuration: '.45s',
            hiddenStyle: {
              opacity: 0,
              transform: 'scale(0.001)'
            },
            visibleStyle: {
              opacity: 1,
              transform: 'scale(1)'
            },
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });

        // filter items on button click
        $('.portfolio-menu-active').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid2.isotope({ filter: filterValue });
        });
    });

    $('.isotope-btn-add-active').on('click', 'button', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    document.getElementById('all').click();

})(jQuery);