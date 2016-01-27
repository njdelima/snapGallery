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
			cols: "3"
		}, options);

		var containerWidth = this.width();
		console.log("containerWidth = " + containerWidth);

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

		var imgWidth = (containerWidth / settings.cols) - (settings.margin * ( (settings.cols - 1) / settings.cols));
		console.log("imgWidth = " + imgWidth);

		this.children("li").css({
			'display': 'inline-block',
			'width': imgWidth,
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
				console.log("settings.margin = " + settings.margin);
				topTracker[0] = topTracker[0] + $(this).height() + settings.margin;
				console.log("topTracker[0] = " + topTracker[0]);
				$(this).addClass("col0");
			} else if (index % 3 === 1) {
				$(this).css({
					'top': topTracker[1],
					'left': $(this).width() + settings.margin
				});
				topTracker[1] = topTracker[1] + $(this).height() + settings.margin;
				console.log("topTracker[1] = " + topTracker[1]);
				$(this).addClass("col1");
			} else if (index % 3 === 2) {
				$(this).css({
					'top': topTracker[2],
					'left': ($(this).width() * 2) + (settings.margin * 2)
				});
				topTracker[2] = topTracker[2] + $(this).height() + settings.margin;
				console.log("topTracker[2] = " + topTracker[2]);
				$(this).addClass("col2");
			}
		});

		var containerHeight = Math.max(topTracker[0], topTracker[1], topTracker[2]);
		console.log("containerHeight = " + containerHeight);

		this.css("height", containerHeight - settings.margin);

		for (var i = 0; i < topTracker.length; i++) {
			var curMargin = 0;
			while ((topTracker[i] + curMargin) < containerHeight) {
				curMargin = curMargin + 1;
			}
			if (curMargin > 0) {
				var curColumn = $("li.col" + i);

				var offset = curMargin / (curColumn.length - 1);

				for (var j = 1; j < curColumn.length; j++) {
					$(curColumn[j]).css("top", $(curColumn[j]).position().top + offset * j);
				}
			}
		}

		return this;
	};

}( jQuery ));