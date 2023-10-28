/**
 * ^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting)\? url script-path=YOUR_SCRIPT_NAME.js
 */
function blockAds() {
    // Add your ad-blocking logic here
    // For example, you can use CSS to hide ad elements or remove them from the DOM

    // Hide ad elements with CSS selectors
    const selectorsToHide = [
        '__ffYoutube1',
        '__ffYoutube2',
        '__ffYoutube3',
        '__ffYoutube4',
        'feed-pyv-container',
        'feedmodule-PRO',
        'homepage-chrome-side-promo',
        'merch-shelf',
        'offer-module',
        'pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',
        'pla-shelf',
        'premium-yva',
        'promo-info',
        'promo-list',
        'promotion-shelf',
        'related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer',
        'search-pva',
        'shelf-pyv-container',
        'video-masthead',
        'watch-branded-actions',
        'watch-buy-urls',
        'watch-channel-brand-div',
        'watch7-branded-banner',
        'YtKevlarVisibilityIdentifier',
        'YtSparklesVisibilityIdentifier',
        'carousel-offer-url-container',
        'companion-ad-container',
        'GoogleActiveViewElement',
        'list-view[style="margin: 7px 0pt;"]',
        'promoted-sparkles-text-search-root-container',
        'promoted-videos',
        'searchView.list-view',
        'sparkles-light-cta',
        'watch-extra-info-column',
        'watch-extra-info-right',
        'ytd-carousel-ad-renderer',
        'ytd-compact-promoted-video-renderer',
        'ytd-companion-slot-renderer',
        'ytd-merch-shelf-renderer',
        'ytd-player-legacy-desktop-watch-ads-renderer',
        'ytd-promoted-sparkles-text-search-renderer',
        'ytd-promoted-video-renderer',
        'ytd-search-pyv-renderer',
        'ytd-video-masthead-ad-v3-renderer',
        'ytp-ad-action-interstitial-background-container',
        'ytp-ad-action-interstitial-slot',
        'ytp-ad-image-overlay',
        'ytp-ad-overlay-container',
        'ytp-ad-progress',
        'ytp-ad-progress-list',
        '[class*="ytd-display-ad-"]',
        '[layout*="display-ad-"]',
        'a[href^="http://www.youtube.com/cthru?"]',
        'a[href^="https://www.youtube.com/cthru?"]',
        'ytd-action-companion-ad-renderer',
        'ytd-banner-promo-renderer',
        'ytd-compact-promoted-video-renderer',
        'ytd-companion-slot-renderer',
        'ytd-display-ad-renderer',
        'ytd-promoted-sparkles-text-search-renderer',
        'ytd-promoted-sparkles-web-renderer',
        'ytd-search-pyv-renderer',
        'ytd-single-option-survey-renderer',
        'ytd-video-masthead-ad-advertiser-info-renderer',
        'ytd-video-masthead-ad-v3-renderer',
        'YTM-PROMOTED-VIDEO-RENDERER',
        // Add the class names you provided for desktop
        'ytp-flyout-cta-text-container',
        'ytp-ad-preview-container',
        'ytp-ad-player-overlay-instream-info',
        // Add the class names you provided for mobile
        '.companion-ad-container',
        '.ytp-ad-action-interstitial',
        '.ytp-cued-thumbnail-overlay > div[style*="/sddefault.jpg"]',
        'a[href^="/watch?v="][onclick^="return koya.onEvent(arguments[0]||window.event,\'"]:not([role]):not([class]):not([id])',
        'a[onclick*=\'"ping_url":"http://www.google.com/aclk?\']',
        'ytm-companion-ad-renderer',
        'ytm-companion-slot',
        'ytm-promoted-sparkles-text-search-renderer',
        'ytm-promoted-sparkles-web-renderer',
        'ytm-promoted-video-renderer',
        // Add the class names you provided for mobile
    ];

    selectorsToHide.forEach(function (selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(function (element) {
            element.style.display = 'none'; // Hide the ad elements
        });
    });
}

/**
 * Function to block ads in response data.
 */
function blockAdsInResponse(responseData) {
    // Remove ad elements using CSS selectors
    const selectorsToHide = [
        'a[href^="http://www.youtube.com/cthru?"]',
        'a[href^="https://www.youtube.com/cthru?"]',
        // Add more selectors here
    ];

    selectorsToHide.forEach(function (selector) {
        const regex = new RegExp(selector, 'g');
        responseData = responseData.replace(regex, '');
    });

    return responseData;
}

// ... (rest of the script remains the same)
