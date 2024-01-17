(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  $(document).ready(function () {
    function playTypingSound() {
      var typingSound = $("#typingSound")[0];
      typingSound.play();
    }

    function stopTypingSound() {
      var typingSound = $("#typingSound")[0];
      typingSound.pause();
      typingSound.currentTime = 0;
    }

    $(".about-image img").hover(
      function () {
        // On hover
        playTypingSound();
      },
      function () {
        // On hover out
        stopTypingSound();
      }
    );
  });

  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);
