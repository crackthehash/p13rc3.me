$(document).ready(() => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });

  particlesJS.load("particles-js", "particlesjs.json");
});

        // Function to check if the device is a mobile device
        function isMobileDevice() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }

      // Function to update the image style based on the device type
      function updateImageStyle() {
          var image = document.querySelector('.image');
          if (isMobileDevice()) {
              // Change style for mobile devices
              image.style.position = 'relative';
              image.style.top = 'auto';
              image.style.left = 'auto';
          }
      }

      // Call the function when the page loads
      window.onload = function() {
          updateImageStyle();
      };