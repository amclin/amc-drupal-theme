jQuery(document).ready(function($) {
	/**
	 * Force the superfish menu to align top instead of drop down
	 */
    $('#menu .menu li > ul').each(function() {
    	var position = $(this).parent().position();
        $(this).css('top', 4-(position.top));    
    });
    
    /**
     * Build the portfolio gallery
     */
    if($('.view-id-photo_gallery').length == 1) {
    	//Setup buttons
    	var photos = $('.view-id-photo_gallery img');
    	$('#filler').after("<div id='slide_buttons'><ul>");
    	photos.each(function(idx,el) {
    		$('#slide_buttons ul').append("<li><a href='"+$(el).attr('src')+"' title='"+$(el).attr('alt')+"'>"+(idx+1)+"</a></li>");
    	});
    	//Handle image swap on click
    	var backgroundImage = $('#block-views-random-photo-block img');
    	var slideCounters = $('#slide_buttons li');
    	slideCounters.click(function(ev) {
    		ev.preventDefault();
    		slideCounters.removeClass('active');
    		$(this).addClass('active');
    		backgroundImage.attr('src',$(this).find('a').attr('href'));
    		$(window).resize();
    	});
    	
    	//Trigger first slide
    	slideCounters[0].click();
    }
    
    /**
     * Trigger an initial resize
     */
    $(window).resize();
});

