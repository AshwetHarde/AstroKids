$(window).on('load', function () {
  // initialization of svg injector module
  $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
});

$(document).on('ready', function () {
  // initialization of popups
  $.HSCore.components.HSFancyBox.init('.js-fancybox');
});
