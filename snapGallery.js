(function ( $ ) {

	if (!$) {
		return console.warn("snapGallery needs jQuery!");
	}
	
	$.fn.snapGallery = function(options) {
		var ul = this;

		var settings = $.extend({
			margin: "10px",
			backgroundColor: "blue"
		}, options);


		ul.css("box-sizing", "border-box").children("*").css("box-sizing", "border-box");

		ul.css({
			list-style-type: 'none',
			padding: '0',
			margin: '0',
			backgroundColor: settings.backgroundColor
		});

		return this;
	};

}( jQuery ));