function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

$(function(){
	$slideshow = $(".gallery ul");
	$slideactive = $slideshow.find("li.each").first().addClass('active').show();
	$(".direction .next").click(function(){
	$slideactive = $slideshow.find("li.active").next();
		if(!$slideactive.size())
			$slideactive = $slideshow.find("li.each").first();		$slideshow.find("li.active").removeClass("active");
			$slideactive.addClass("active");
	});
});