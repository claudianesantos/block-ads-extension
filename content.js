document.addEventListener('DOMContentLoaded', function() {
    const ads = document.querySelectorAll('iframe, .ad, .ads, [id^="ad"], [class^="ad"]');
    ads.forEach(ad => ad.remove());
});
