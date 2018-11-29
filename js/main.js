jQuery(document).ready(function($) {
	/**
	 * Resize the background image to fully fit the browser window
	 * without any ratio distortion.
	 */
	$(window).resize(function() {
		var backgroundImage = $('#block-views-random-photo-block img');
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var imageHeight = backgroundImage.attr('height');
		var imageWidth = backgroundImage.attr('width');
		var browserRatio	= windowWidth/windowHeight;
		var imageRatio 		= imageWidth/imageHeight;
		
		//Resize the image appropriately for height or width
		if(browserRatio <= imageRatio) {
			//Browser proportions are narrower than the image proportions
			backgroundImage.css({
				'height': 		windowHeight,
				'width': 		windowHeight * imageRatio,
				'margin-top':	0,
				'margin-left':	(-(windowWidth - (windowHeight * imageRatio))/-2)	
			});

		} else {
			//Browser proportions are wider than the image proportions
			backgroundImage.css({
				'width':		windowWidth,
				'height':		windowWidth/imageRatio,
				'margin-top':	(((windowWidth/imageRatio) - windowHeight)/-2),
				'margin-left':	0
			});
		}
	});
	
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

