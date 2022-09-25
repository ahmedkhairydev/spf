(function ($) {
  "use strict";

  /*---------------------------
    Services
  -----------------------------------*/
  const services = ['booth', 'campaign', 'category', 'counter-top', 'floor-display', 'floor-stand', 'gandolla', 'gate', 'giveaways', 'magazine', 'pillar', 'printings', 'shelf', 'dangler', 'window-display'];
  let servicesHTML = '';


  services.forEach((service, index) => {
    servicesHTML += `
      <div class="col mb-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".${index + 1}s">
        <!-- Single Service Start -->
        <a href="portfolio.html#portfolioWrapper">
          <div class="single-service">
            <div class="single-service-top">
              <div class="icon">
                  <img src="assets/images/services/${service}.svg" loading="lazy" alt="icon" width="72" height="72">
              </div>
              <h4 class="title text-capitalize">${service.split('-').join(' ')}</h4>
            </div>
            <!-- <p class="single-service-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="readmore-btn" href="service-details.html"><i class="fas fa-angle-right"></i> Read More</a> -->
          </div>
        </a>
        <!-- Single Service End -->
      </div>
    `;
  });

  $('#services').append(servicesHTML);
})(jQuery);