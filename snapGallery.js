(function ( $ ) {

	if (!$) {
		return console.warn("snapGallery needs jQuery!");
	}
	
	$( window ).resize(function() {
		$('#gallery-container').snapGallery();
	});

	$.fn.snapGallery = function(options) {
		
		var settings = $.extend({
			margin: 10,
			maxCols: 3,
			minWidth: 200
		}, options);

		var containerWidth = this.width();
		console.log("containerWidth = " + containerWidth);

		this.css("box-sizing", "border-box").children("*").css("box-sizing", "border-box");

		this.css({
			'position': 'relative',
			'list-style-type': 'none',
			'padding': '0',
			'margin': '0',
			'background-color': settings.backgroundColor,
			'width': '100%'
		});

		var currentCols = settings.maxCols + 1;
		console.log("currentCols = " + currentCols);

		do {
			currentCols = currentCols - 1;
			console.log("currentCols = " + currentCols);
			var imgWidth = (containerWidth / currentCols) - (settings.margin * ( (currentCols - 1) / currentCols));
			console.log("imgWidth = " + imgWidth);
		} while (imgWidth < settings.minWidth);

		console.log("currentCols = " + currentCols);
		console.log("imgWidth = " + imgWidth);

		var topTracker = [];

		for (var i = 0; i < currentCols; i++) {
			topTracker.push(0);
		}

		console.log("topTracker = " + topTracker);

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
			var colNumber = index % currentCols;

			$(this).css({
				'top': topTracker[colNumber],
				'left': ( $(this).width() + settings.margin ) * colNumber
			});

			topTracker[colNumber] = topTracker[colNumber] + $(this).height() + settings.margin;
			console.log("topTracker[" + colNumber + "] = " + topTracker[colNumber]);
			$(this).addClass("col" + colNumber);
		});

		var containerHeight = Math.max.apply(Math, topTracker);
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