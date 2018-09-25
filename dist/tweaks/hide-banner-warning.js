'use strict';
function hideBannerWarning() { // eslint-disable-line no-unused-vars
	if (document.getElementsByName('mainFrame')[0] !== undefined) {
		const frame = $(document.getElementsByName('mainFrame')[0].contentWindow.document);
		const text = $(frame).find('.infotext').text();
		if (text.indexOf('The use of software or tools that constantly refresh') > -1) {
			$(frame).find('.infotext').parent().parent().remove();
		}
	} else {
		const text = $('.infotext').text();
		if (text.indexOf('The use of software or tools that constantly refresh') > -1) {
			$('.infotext').parent().parent().remove();
		}
	}
}