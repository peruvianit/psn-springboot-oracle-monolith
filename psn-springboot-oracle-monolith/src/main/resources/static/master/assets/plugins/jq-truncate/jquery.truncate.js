/*
 * saibal-truncate.js
 *
 * Created:	04/09/2015 (15:43:14)
 * Created by: 	Lorenzo Saibal Forti <saibal@lorenzone.it>
 *
 * Copyleft:	2015 - Tutti i diritti riservati
 * Comments: fork from http://www.jeremymartin.name/projects.php?project=jTruncate
 */
(function($){

	$.fn.truncate = function(customoptions) {

		var defaults = {
			maxLength		: 200,
			minTrail		: 20,
			textMoreView	: true,
			textMore		: "[Leggi tutto]",
			textLess		: "[Nascondi]",
			textClassDisplay: "",
			textEllipsis	: " ...",
			displayOnCLose	: "block",
			aniEffect		: "show",
			aniMore			: 0,
			aniLess			: 0
		};

		var opt = $.extend(defaults, customoptions);

		return this.each(function() {

			$this = $(this);

			var objContent = $this.html();

			if(objContent.length > opt.maxLength + opt.minTrail) {

				var splitLocation = objContent.indexOf(" ", opt.maxLength);

				if(splitLocation != -1) {

					var splitLocation = objContent.indexOf(" ", opt.maxLength);
					var str1 = objContent.substring(0, splitLocation);
					var str2 = objContent.substring(splitLocation, objContent.length - 1);

					$this.html(str1 + "<span class=\"truncate_ellipsis\">" +opt.textEllipsis+ "</span>" +
									"<span class=\"truncate_more\">" +str2+ "</span>"
							);

					$this.find(".truncate_more").css("display", "none");

					if (opt.textMoreView == true) {

						// append del link "leggi tutto"
						$this.append(
							"&nbsp;<span class=\"truncate_more_container\">" +
								"<a href=\"javascript:void(0)\" class=\"truncate_more_link\">" + opt.textMore + "</a>" +
							"</span>"
						);

						// eventi sui link nascondi/mostra
						var moreLink = $(".truncate_more_link", $this);
						var moreContent = $(".truncate_more", $this);
						var ellipsis = $(".truncate_ellipsis", $this);
						var mTextContainer = $(".truncate_more_container", $this);

						moreLink.click(function() {

							if(moreLink.text() == opt.textMore) {

								if(opt.aniEffect == "show") {

									//~ moreContent.show(opt.aniMore, function() {
										//~ mTextContainer.css("margin-top", "-20px");
									//~ });

									moreContent.show(opt.aniMore);

								} else {

									moreContent.fadeIn(opt.aniMore);
								}

								moreLink.text(opt.textLess);
								moreContent.css("display", "inline");
								mTextContainer.css("display", "block");
								ellipsis.css("display", "none");

							} else {

								if(opt.aniEffect == "show") {
									moreContent.hide(opt.aniLess);
								} else {
									moreContent.fadeOut(opt.aniLess);
								}

								moreLink.text(opt.textMore);
								mTextContainer.css("display", opt.displayOnCLose);
								mTextContainer.addClass(opt.textClassDisplay);
								ellipsis.css("display", "inline");
							}
							return false;
						});
				  	}
				}
			} // end if
		});
	};
})(jQuery);
