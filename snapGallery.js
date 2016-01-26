(function ( $ ) {

	if (!$) {
		return console.warn("snapGallery needs jQuery!");
	}
	
	$.fn.snapGallery = function() {
		var ul = this;



		ul.css("box-sizing", "border-box").children("*").css("box-sizing", "border-box");

		ul.css({
			'list-style-type': 'none',
			'padding': '0',
			'margin': '0'
		});

		return this;
	};

}( jQuery ));