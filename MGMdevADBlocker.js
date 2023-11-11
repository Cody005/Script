
// Auther :- MGMdev \\
// Time :- 2023-11-10 23:10:35 \\
// Purpose:- Block ads and banner \\


(function () {
    // Define a function to hide elements by selector
    function hideElements(selectors) {
      selectors.forEach(function (selector) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function (element) {
          element.style.display = 'none';
        });
      });
    }
  
    // Common ad-related classes
    var adClasses = [
      '.centerBannerCreative',
      '.ad-banner',
      '.ad-container',
      '.ad-wrapper',
      '.ads-box',
      '.ad-block-728X90',
      '.ad-block-728X90-before-mail-block',
      // Add more classes as needed
    ];
  
    // Common ad-related domains
    var adDomains = [
      'applovin.com',
      'supersonicads.com',
      // Add more domains as needed
    ];
  
    // Hide elements with common ad-related classes
    hideElements(adClasses);
  
    // Block connections to common ad-related domains
    adDomains.forEach(function (domain) {
      $done({
        response: {
          body: '',
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'text/plain',
          },
        },
      });
    });
  
    // Disable common ad-related functions
    window.addEventListener('DOMContentLoaded', function () {
      // Example: Disable Google Ad Manager
      if (window.googletag && typeof window.googletag.pubads === 'function') {
        window.googletag.pubads = function () {
          return {
            addEventListener: function () {},
            setTargeting: function () {},
          };
        };
      }
      // Add more function overrides as needed
    });
  })();
  
