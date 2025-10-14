/**
 * @preserve
 * Filename: sortable-utils.lib.js
 *
 * Created: 24/03/2017 (12:34:06)
 * Created by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
 *
 * Last Updated: 24/03/2017 (12:34:06)
 * Updated by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
 *
 * Copyleft: 2017 - Tutti i diritti riservati
 *
 * Comments:
 **/

/* globals opt */

(function($) {

	"use strict";

	/**
	*  $.fn.tablesawcallback
	*
	* callback impostata dopo init tablesaw
	*/
	$.fn.tablesawcallback = function() {

		$.fn.dynZebraRow();
	};

	/**
	*  $.fn.dynZebraRow
	*
	* rimuove le righe alterne quando si usa il sort sulla tabella
	*/
	$.fn.dynZebraRow = function() {

		var thisTableId;

		$(opt.eSortableBtn+", " +opt.eSortableSelect+ " select").on("click change", function(e) {

			if (e.type === "change") {

				thisTableId = $(this).parents().eq(3).next("table").attr("id");
			}

			if (e.type === "click" && !$(opt.eSortableSelect+ " select").is(":visible")) {

				thisTableId = $(this).closest("table").attr("id");
			}

			$("#" +thisTableId+ " > tbody > tr").removeClass("even");
			$("#" +thisTableId+ " > tbody > tr:odd").addClass("even");
		});
	};

	/**
	* sorting delle date custom
	*/
	$("th[data-custom-sortable-date]").data("tablesaw-sort", function(ascending) {
		return function(a, b) {
			if (a.ignored || b.ignored) {
				return 0;
			}

			var dateA = a.cell.split("/"),
				dateB = b.cell.split("/");

			var datestrA = dateA[2]+ "-" +dateA[1]+ "-" +dateA[0];
			var unixtimeA = new Date(datestrA).getTime() / 1000;

			var datestrB = dateB[2]+ "-" +dateB[1]+ "-" +dateB[0];
			var unixtimeB = new Date(datestrB).getTime() / 1000;

			if (ascending) {

				return parseInt(unixtimeA) - parseInt(unixtimeB);

			}

			return parseInt(unixtimeB) - parseInt(unixtimeA);
		};
	});

})(jQuery);
