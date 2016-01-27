(function ( $ ) {

	if (!$) {
		return console.warn("snapGallery needs jQuery!");
	}
	
	$( window ).resize(function() {
		$('#gallery-container').snapGallery();
	});

	$.fn.snapGallery = function(options) {
		
		var settings = $.extend({
			margin: "10",
			backgroundColor: "blue"
		}, options);

		var containerWidth = this.width();
		setTimeout(function() {
			console.log("containerWidth = " + containerWidth);
		}, 0);

		var topTracker = [0, 0, 0];

		this.css("box-sizing", "border-box").children("*").css("box-sizing", "border-box");

		this.css({
			'position': 'relative',
			'list-style-type': 'none',
			'padding': '0',
			'margin': '0',
			'background-color': settings.backgroundColor,
			'width': '100%'
		});

		this.children("li").css({
			'display': 'inline-block',
			'width': containerWidth / 3,
			'margin-right': '-4px',
			'position': 'absolute'
		}).children("img").css({
			'width': '100%',
			'display': 'block'
		});

		this.children("li").each(function (index) {
			console.log( "index = " + index);
			if (index % 3 === 0) {
				$(this).css({
					'top': topTracker[0],
					'left': 0
				});
				topTracker[0] = topTracker[0] + $(this).height();
			} else if (index % 3 === 1) {
				$(this).css({
					'top': topTracker[1],
					'left': $(this).width()
				});
				topTracker[1] = topTracker[1] + $(this).height();
			} else if (index % 3 === 2) {
				$(this).css({
					'top': topTracker[2],
					'left': $(this).width() * 2
				});
				topTracker[2] = topTracker[2] + $(this).height();
			}
		});

		return this;
	};

}( jQuery ));