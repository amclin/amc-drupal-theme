/**
 * Build the portfolio gallery
 */
jQuery(document).ready(function($) {
    if($('.view-id-photo_gallery').length == 1) {
        /**
         * Sets the background image of the page
         * @param {Url} url to the image
         */
        var setBackground = function(url) {
            $('.region-background').css({
                "background-image": `url(${url})`
            });
        }

    	//Setup buttons
        var $photos = $('.view-id-photo_gallery img');
        var $button_list = $('<ul>');
    	$photos.each(function(idx,el) {
            $el = $(el);
            $button_list.append(`
                <li>
                    <a href="${$el.attr('src')}"
                        title="${$el.attr('alt')}">${(idx+1)}</a>
                </li>
            `);
        });
        $('#filler').after($('<div id="slide_buttons">').append($button_list));

    	//Handle image swap on click
        var slideCounters = $('#slide_buttons li');
        slideCounters.on('click', 'a', (ev) => {
            ev.preventDefault(); // Block clicking on anchors
            var $a = $(ev.target);
            var $li = $a.parent();
    		slideCounters.removeClass('active');
            $li.addClass('active');
            setBackground($a.attr('href'));
    	});
    	
    	//Trigger first slide
    	$('a', slideCounters[0]).click();
    }
});