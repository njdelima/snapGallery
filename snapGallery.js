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
			'list-style-type': 'none',
			'padding': '0',
			'margin': '0',
			'background-color': settings.backgroundColor,
			'width': '100%'
		});

		console.log("ul.width = " + ul.width());
		console.log("settings.margin = " + settings.margin);

	//	var liWidth = (u

	//	ul.children("li").css({
	//		'display': 'inline-block',
	//		'width': containerWi


		return this;
	};

}( jQuery ));