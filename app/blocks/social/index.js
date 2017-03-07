/* eslint-disable */
import $ from 'jquery';

export function socialShare() {
	const urlValue = document.origin + document.location.pathname;

	function socialGenerator(url, title = '') {
		const encUrl = encodeURIComponent(url ? url : urlValue);
		const encTitle = encodeURIComponent(title);

		return {
			fb: `http://www.facebook.com/sharer.php?u=${encUrl}`,
			tw: `http://twitter.com/share?url=${encUrl}&text=${encTitle}`,
			vk: `http://vk.com/share.php?url=${encUrl}&title=${encTitle}`
		};
	}

	$('.js-share').each(function () {
		const $shareSelector = $(this);
		// const shareTitle = $shareSelector.data('share-title'); для указания кастомных тайтлов
		const shareText = $shareSelector.data('share-text');
		// const shareUrl = $shareSelector.data('share-url');// если понадобится указывать url вручную, подставить как параметр в socialGenerator
		// Закомментил, потому что пока не используем эти переменнные, EsLint ругается
		if ($shareSelector.hasClass('facebook')) {
			$shareSelector.prop('href', socialGenerator().fb);
		}

		else if ($shareSelector.hasClass('twitter')) {
			$shareSelector.prop('href', socialGenerator(null, shareText).tw);
		}

		else if ($shareSelector.hasClass('vkontakte')) {
			$shareSelector.prop('href', socialGenerator(null, shareText).vk);
		}
	});
}
/* eslint-enable */
