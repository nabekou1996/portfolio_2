$(function () {

    // header調整
    var height=$("#header").height();
    $("body").css("margin-top", height);//10pxだけ余裕をもたせる

    // smooth scroll
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate(
            {
                scrollTop: position - $('#header').outerHeight()
            },
            speed, "swing");
        return false;
    });

    // アコーディオン
	$('.accordion__head').click(function() {
        if($('.accordion__head').not($(this)).children('.accordion__icon').hasClass('fa-chevron-up')) {
            $('.accordion__head').not($(this)).children('.accordion__icon').removeClass('fa-chevron-up').addClass('fa-chevron-down')
            $('.accordion__head').not($(this)).next().slideUp()
        }
		$(this).next().slideToggle()
		$(this).children('.accordion__icon').toggleClass('fa-chevron-up').toggleClass('fa-chevron-down')
	})

})
