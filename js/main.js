//  why does it work?
//  who knows

$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

// Отут знайшов (Прелоадер);
// http://gnatkovsky.com.ua/preloader-dlya-sajta-na-javascript-ili-kak-ne-pokazyvat-sajt-poka-polnostyu-ne-zagruzitsya.html
