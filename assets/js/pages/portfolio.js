(function ($) {
    "use strict";

    /*---------------------------
      Portifolios
    -----------------------------------*/
    const services = ['booth', 'campaign', 'category', 'counter-top', 'floor-display', 'floor-stand', 'gandolla', 'gate', 'giveaways', 'magazine', 'pillar', 'printings', 'shelf'];
    let servicesHTML = '', portfolioHTML = '';

    const portfolioImages = [
        {
            imageName: 'magazine_1.jpg',
            serviceCat: 'magazine',
            type: 'odd'
        },
        {
            imageName: 'roll-up_1.jpg',
            serviceCat: 'roll-up',
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
            imageName: 'booth_1.jpg',
            serviceCat: 'booth',
            type: 'odd'
        },
        // 3
        {
            imageName: 'magazine_2.jpg',
            serviceCat: 'magazine',
            type: 'even'
        },
        {
            imageName: 'roll-up_5.jpg',
            serviceCat: 'roll-up',
            type: 'even'
        },
        {
            imageName: 'magazine_3.jpg',
            serviceCat: 'magazine',
            type: 'even'
        },
        // 4
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
        // 5
        {
            imageName: 'gate_2.jpg',
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
        // 6
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
            imageName: 'floor-display_4.jpg',
            serviceCat: 'floor-display',
            type: 'even'
        },
        {
            imageName: 'floor-stand_11.jpg',
            serviceCat: 'floor-stand',
            type: 'even'
        },
        {
            imageName: 'counter-top_7.png',
            serviceCat: 'counter-top',
            type: 'odd'
        },
        // 7
        {
            imageName: 'dangler_8.png',
            serviceCat: 'dangler',
            type: 'odd'
        },
        {
            imageName: 'gandolla_2.jpg',
            serviceCat: 'gandolla',
            type: 'even'
        },
        {
            imageName: 'giveaways_3.png',
            serviceCat: 'giveaways',
            type: 'odd'
        },
        {
            imageName: 'pillar_1.jpg',
            serviceCat: 'pillar',
            type: 'even'
        },
        {
            imageName: 'pillar_2.jpg',
            serviceCat: 'pillar',
            type: 'even'
        },
        {
            imageName: 'counter-top_1.jpg',
            serviceCat: 'counter-top',
            type: 'odd'
        },
        // 8
        {
            imageName: 'counter-top_3.jpg',
            serviceCat: 'counter-top',
            type: 'odd'
        },
        {
            imageName: 'counter-top_4.jpg',
            serviceCat: 'counter-top',
            type: 'odd'
        },
        {
            imageName: 'counter-top_5.jpg',
            serviceCat: 'counter-top',
            type: 'odd'
        },
        // 9
        {
            imageName: 'counter-top_6.jpg',
            serviceCat: 'counter-top',
            type: 'odd'
        },
        {
            imageName: 'roll-up_2.jpg',
            serviceCat: 'roll-up',
            type: 'even'
        },
        {
            imageName: 'gate_1.jpg',
            serviceCat: 'gate',
            type: 'odd'
        },
        {
            imageName: 'roll-up_3.jpg',
            serviceCat: 'roll-up',
            type: 'even'
        },
        {
            imageName: 'roll-up_4.jpg',
            serviceCat: 'roll-up',
            type: 'even'
        },
        {
            imageName: 'giveaways-4.jpg',
            serviceCat: 'giveaways',
            type: 'odd'
        },
        // 10

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
                        <img src="assets/images/products/${portfolioImage.imageName}" loading="lazy" alt="Portfolio Image - ${portfolioImage.imageName}">
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