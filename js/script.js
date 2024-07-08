// -----------------iframe video реализация с pop up----------------
var videoLink = $('.el-video-link-js'),
    popup_id = $('#el-video-popup'),
    videoLink = $('.el-video-link-js'),
    videoBody = $('.el-video-body-js'),
    videoCloseButton = $('.el-video-button-js'),
    popupOverlay = $('.el-video-overlay_popup');

// Hide all close buttons initially
$(document).ready(function () {
    videoCloseButton.hide();
});

videoLink.click(function (e) {
    e.preventDefault();
    // Связываем  popup_id 
    linkVideoSrc = $(this).attr('data-href');

    // Extract Vimeo video ID from the URL
    var vimeoVideoId = getVimeoVideoId(linkVideoSrc);

    // Update iframe source with Vimeo URL
    popup_id.find('.el-video-popup__box-js').append('<iframe src="https://player.vimeo.com/video/' + vimeoVideoId + '?autoplay=1" frameborder="0" allowfullscreen="" allow="autoplay">');

    // Show the close button for this video
    popup_id.find(videoCloseButton).show();

    console.log(vimeoVideoId);
    // Открываем окно
    popup_id.show();
    popupOverlay.show();
});

$(videoCloseButton).click(function (e) {
    e.preventDefault();
    // Hide the close button
    $(this).hide();

    // Show the corresponding video link
    $(this).closest(videoBody).find(videoLink).show();

    // Remove the iframe
    popup_id.find('.el-video-popup__box-js iframe').remove();

    // Hide the overlay and the popup
    popupOverlay.hide();
    popup_id.hide();
});

// Обрабатываем клик по заднему фону
$(popupOverlay).click(function () {
    // Скрываем затемнённый задний фон и основное всплывающее окно
    popupOverlay.hide();
    popup_id.hide();
    popup_id.find('.el-video-popup__box-js iframe').remove();
});

// Function to extract Vimeo video ID from the URL
function getVimeoVideoId(url) {
    var regExp = /\/(\d+)(?:$|\/)/;
    var match = url.match(regExp);
    return match ? match[1] : null;
}
