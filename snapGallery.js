(function ( $ ) {

	if (!$) {
		return console.warn("snapGallery needs jQuery!");
	}
	
	$.fn.snapGallery = function() {
		var ul = this;

		ul.css({
			'list-style-type': 'none',
			'padding': '0',
			'margin': '0'
		});
	};

}( jQuery ));