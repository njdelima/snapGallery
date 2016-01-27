(function ( $ ) {

	if (!$) {
		return console.warn("snapGallery needs jQuery!");
	}
	
	$( window ).resize(function() {
		$('#gallery-container').snapGallery();
	});

	$.fn.snapGallery = function(options) {
		var ul = this;


		ul.children("li").each(function (index) {
			console.log( "index = " + index);
		});
		
		var lis = ul.children("li");



		var settings = $.extend({
			margin: "10",
			backgroundColor: "blue"
		}, options);


		ul.css("box-sizing", "border-box").children("*").css("box-sizing", "border-box");

		ul.css({
			'list-style-type': 'none',
			'padding': '0',
			'margin': '0',
			'background-color': settings.backgroundColor,
			'width': '100%'
		});

		console.log("ul.width = " + ul.width());
		console.log("settings.margin = " + settings.margin);

		var liWidth = (ul.width() / 3);
		// - (2 * settings.margin);

		console.log("liWidth = " + liWidth);

		ul.children("li").css({
			'display': 'inline-block',
			'width': liWidth,
			'margin-right': '-4px'
			//'margin-right': (settings.margin - 4) + 'px',
			//'margin-left': settings.margin + 'px'
		}).children("img").css({
			'width': '100%',
			'display': 'block'
		});


		return this;
	};

}( jQuery ));