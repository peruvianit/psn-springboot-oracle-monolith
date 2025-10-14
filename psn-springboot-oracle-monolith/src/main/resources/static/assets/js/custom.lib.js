// @prepros-prepend "../../master/assets/js/functions.lib.js"

/*
 * @preserve
 * Filename: custom.lib.js
 *
 * Created: 02/09/2019 (16:43:24)
 * Created by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
 *
 * Last Updated: 02/09/2019 (16:43:24)
 * Updated by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
 *
 * Copyleft: 2019 - Tutti i diritti riservati
 *
 * Comments:
 */

 /* global defParams, RGraph, SUNEDITOR, tmpl */

// sovrascrivo un parametro di default per cambiare una classe. serve alle select collegate perchè sono inline e non una sotto l'altra
// passo all'utilizzo della classe "validit" invece che dell'id come identificatore per la validazione form
var opt = $.extend(defParams, {
	"validateFormByClass"	: "y",
	"eGroupFormCont"		: ".sel-dynamic-group"
});

// controllare gli indici dei campi, le label e le espressioni regolari
var c_defParams = {
	"eJsLoadTmpl"			: "#js-load-tmpl",
	"eJsReceiversResult"	: "#js-receivers-result",
	"eJsSearchModalForm"	: "#js-search-modal-form",
	"eJsSearchResultForm"	: "#js-search-result-form",
	"eJsSearchModalResult"	: "#js-search-result",
	"eJsName"				: "#js-name",
	"eJsSurname"			: "#js-surname",
	"eJsFc"					: "#js-fc",
	"eJsSearchReviewer"		: "#js-search-reviewer",
	"eJsModalStartTitle"	: ".js-modal-start-title",
	"eJsModalBtnInsert"		: ".js-submit-modal-btn-insert",
	"eJsTextEditor"			: ".js-text-editor",
	"eJsActionConfirm"		: ".js-action-confirm",
	"eInputDateRange"		: ".input-daterange",
	"eJsResetitRange"		: ".js-resetit-range",
	"eJsDynamicType"		: ".js-dynamic-type",
	"eJsToggleReset"		: ".js-toggle-reset",
	"tmplResult"			: "tmpl-result"
};

var c_opt = $.extend(true, {}, c_defParams);

(function($) {

	/**
	* $.fn.drawSvgPie
	*
	* disegna e ridimensiona i grafici pie. gli ultimi 3 parametri non sono obbligatori
	*/
	$.fn.drawSvgPie = function(idchart, customdata, customopt, customoptalt, screenw) {

		var thisParams = {
			"textFont": "titilliumweb-r",
			"marginTop": 25,
			"marginRight": 0,
			"marginBottom": 15,
			"marginLeft": 0,
			"donut": true,
			"donutWidth": 40,
			"labelsSticks": false,
			"colors": ["#f7bf7c", "#f98586", "#cc97ca", "#1ac4a4", "#b07a3e", "#9455c4", "#2f82c8"]
		};

		var thisOpt, originOpt = $.extend(true, {}, thisParams, customopt);

		var self = {};

		var $this = $("#" +idchart);
		var customData = typeof customdata !== "undefined" ? customdata : [0];
		var screenW = typeof screenw !== "undefined" && screenw !== "" ? screenw : false;
		var customOptAlt = typeof customoptalt !== "undefined" && customoptalt !== "" ? customoptalt : "";

		var explodeChart = typeof customopt.explode !== "undefined" ? customopt.explode : "y";

		if (explodeChart === "y") {

			thisParams = $.extend(true, {}, thisParams, {
				"exploded": customData.length
			});
		}

		// disegno il grafico
		self.init = function() {

			// cambio le opzioni se necessario
			if (screenW !== false && $(window).width() < screenW && customOptAlt !== "") {

				thisOpt = $.extend(true, {}, originOpt, customOptAlt);

			} else {

				thisOpt = $.extend(true, {}, thisParams, originOpt);
			}

			var drawChart = new RGraph.SVG.Pie({
				"id": idchart,
				"data": customData,
				"options": thisOpt
			}).draw();

			$.data($this, idchart, drawChart);
		};

		// ridimensiono il grafico
		self.resize = function() {

			var thisChart = $.data($this, idchart);

			RGraph.SVG.clear(thisChart.svg);

			thisChart.svg.setAttribute("width", $this.parent().width());

			self.init(idchart, customData, customopt);
		};

		if ($("#" +idchart).length) {

			self.init();

			$(window).on("resize", function() {
				self.resize();
			});
		}

		return self;
	};

	/**
	* $.fn.actionConfirm
	*
	* wrappo la funzione poichè viene richiamata anche come callback all' evento shown di un popover
	*/
	$.fn.actionConfirm = function() {

		$(c_opt.eJsActionConfirm).on("click", function(e) {

			var $this = $(this);
			var titleMsg = typeof $this.data("modal-titlemsg") !== "undefined" ? $this.data("modal-titlemsg") : "Conferma";
			var bodyMsg = typeof $this.data("modal-bodymsg") !== "undefined" ? $this.data("modal-bodymsg") : "";
			var type = typeof $this.data("modal-type") !== "undefined" ? $this.data("modal-type") : "danger";

			e.preventDefault();

			$.fn.showDialog({
				"typecast": "confirm",
				"type": type,
				"cssClass": "custom-confirm-delete-modal modal-plus-margin",
				"title": titleMsg,
				"bodyMsg": bodyMsg,
				"callbackFunc": function(result) {
					if (result) {
						window.location.href = $this.attr("href");
					}
				}
			});
		});
	};

	/*
    * $.fn.setEditor
    *
    * funzione che istanzia l'editor nella textarea per le note
    */
	$.fn.setEditor = function() {

		return SUNEDITOR.create($(c_opt.eJsTextEditor)[0], {
			"buttonList": [
				["undo", "redo"],
				["bold", "italic", "underline", "strike"],
				["link"],
				["removeFormat"]
			],
			"width": "100%",
			"minHeight": "7rem",
			"resizingBar": false
		});
	};

	/*
	* $.fn.asyncLoadData
	*
	* avvio la richiesta dati all'apertura di una modale
	*/
	$.fn.asyncLoadData = function(customopt) {

		var self = {};

		// "refreshTableSaw": se impostato a true permette alla funzione di eseguire un refresh di tablesaw
		self.defaultParams = {
			"urlLoadData": "",
			"refreshTableSaw"	: "true"
		};

		self.params = $.extend(true, {}, self.defaultParams, customopt);

		// controllo esistenza parametri obbligatori. prende come paramKey la chiave dei parametri
		self.loadCheck = function(paramkey) {

			var reqparam = self.params[paramkey];
		
			// se non esiste la chiave passata come parametro o il valore è vuoto va in errore
			if (!reqparam || reqparam === "") {
				
				throw "Non è stato impostato un parametro valido per " +paramkey;
			}
		};
		
		// inserisce dinamicamente i valori tornati dalla chiamata nel template
		self.init = function() {

			self.loadCheck("urlLoadData");

			$.ajax({
				"url": self.params["urlLoadData"],
				"cache": false,
				"timeout": opt.funcTimeOut,
				"dataType": "json",
				"beforeSend": function() {
					$.fn.toggleLoader("show");
				}
	
			}).done(function(data) {
	
				if (data) {
	
					// stampo i risultati dentro il template js
					$(c_opt.eJsReceiversResult).html(tmpl(c_opt.tmplResult, data)).promise().then(function() {
	
						if (self.params["refreshTableSaw"] === "true") {
	
							$(opt.eJsTableSaw).tablesaw().data("tablesaw").refresh();
						}
					});
	
				} else {
	
					$.fn.showDialog({
						"type": "danger",
						"title": "Errore!",
						"bodyMsg": "Si &egrave; verificato un errore nell'elaborazione dei dati",
						"buttonLabel": "Chiudi",
						"showCallback": function() {
							$(c_opt.eJsLoadTmpl).modal("hide");
						}
					});
				}
	
			}).fail(function() {
	
				$.fn.showDialog({
					"type": "danger",
					"title": "Errore!",
					"bodyMsg": "Si &egrave; verificato un errore nell'elaborazione dei dati!",
					"buttonLabel": "Chiudi",
					"showCallback": function() {
						$(c_opt.eJsLoadTmpl).modal("hide");
					}
				});
			});

			$.fn.toggleLoader("hide");
		};

		self.init();
	};

	/**
	* $.fn.cleanSearchModalCommon
	*
	* routine di pulizia/reset della modale di ricerca usata sia in apertura che al click sul bottone
	*/
	$.fn.cleanSearchModalCommon = function() {

		$(opt.eModal+ " " +opt.eModalBody).animate({
			"scrollTop": "0"
		}, 400);

		// nascondo il bottone invia, nascondo il testo di cortesia
		$(c_opt.eJsModalBtnInsert+ "," +c_opt.eJsModalStartTitle).addClass("hidden").prop("disabled", true);
	};

	/**
	* $.fn.cleanSearchModalLoad
	*
	* routine di pulizia/reset della modale di ricerca usata solo all'apertura della modale
	*/
	$.fn.cleanSearchModalLoad = function() {

		// nascondo il div contentente il template all'apertura della modale e rimuovo il data attribute
		$(c_opt.eJsSearchModalResult).addClass("hidden").removeData("modal-tmpl-data");

		// mostro il messaggio di ricerca
		$(c_opt.eJsModalStartTitle).removeClass("hidden");

		// svuoto le input e le select
		$("input" +c_opt.eJsToggleReset+ ":text, select" +c_opt.eJsToggleReset).val("");
	};

	/**
	* $.fn.searchModalReviewer
	*
	* avvio la ricerca ajax al submit del form nella modale dei mandati per i revisori
	*/
	$.fn.searchModalReviewer = function(customoptions) {

		var self = {};

		// "refreshTableSaw": se impostato a true permette alla funzione di eseguire un refresh di tablesaw
		self.defaultParams = {
			"urlLoadData": ""
		};

		self.params = $.extend(true, {}, self.defaultParams, customoptions);

		// controllo esistenza parametri obbligatori. prende come paramKey la chiave dei parametri
		self.loadCheck = function(paramkey) {

			var reqparam = self.params[paramkey];
		
			// se non esiste la chiave passata come parametro o il valore è vuoto va in errore
			if (!reqparam || reqparam === "") {
				
				throw "Non è stato impostato un parametro valido per " +paramkey;
			}
		};
		
		// inserisce dinamicamente i valori tornati dalla chiamata nel template
		self.init = function() {

			$(c_opt.eJsSearchModalForm).on("submit", function(e) {
				
				e.preventDefault();
				
				self.loadCheck("urlLoadData");

				var thisForm = $(this);
	
				$.fn.cleanSearchModalCommon();
	
				$.ajax({
					"url": self.params["urlLoadData"],
					"type": "POST",
					"cache": false,
					"timeout": opt.funcTimeOut,
					"dataType": "json",
					"data": $(c_opt.eJsSearchModalForm).serialize(),
					"beforeSend": function() {
						$.fn.toggleLoader("show");
						// inserisce un layer sul form
						$.fn.toggleTemporarySubmit(thisForm);
					}
	
				}).done(function(data) {
	
					if (data) {
	
						// stampo i risultati dentro il template js
						$(c_opt.eJsSearchModalResult).html(tmpl("tmpl-result", data)).promise().done(function() {

							// mostro il div contentente il template
							$(c_opt.eJsSearchModalResult).removeClass("hidden");
	
							var modalContainer = $(opt.eModal+ " " +opt.eModalBody);
							var scrollTo = $(opt.eModal+ " " +opt.eModalBody+ " " +c_opt.eJsSearchModalResult);
	
							$(opt.eModal+ " " +opt.eModalBody).animate({
	
								"scrollTop":  scrollTo.offset().top - modalContainer.offset().top + modalContainer.scrollTop() - 50
							}, 800).promise().done(function() {
								
								// rimuove il layer sul form
								$.fn.toggleTemporarySubmit(thisForm, "show");
							});
						});
	
						// essendo radiobox e non checkbox non c'è bisogno di ciclare e salvare i dati su ogni singolo data-* legato all'elemento
						// aggiungo il data-* del radio selezionato e lo associo al form della modale visto che sarà sempre un solo valore
						// all'apertura della modale questo valore viene cancellato
						$("input:radio").on("click", function() {
	
							// aggiungo i dati come data-* al div dei risulati così da poterlo leggere e scriverlo in pagina
							$(c_opt.eJsSearchModalResult).data("modal-tmpl-data", JSON.stringify(data[$(this).attr("data-index")]));
	
							// mostro il bottone di inserimento
							$(c_opt.eJsModalBtnInsert).removeClass("hidden").prop("disabled", false);
							
						});
	
					} else {
	
						$.fn.showDialog({
							"type": "danger",
							"title": "Errore!",
							"bodyMsg": "Si &egrave; verificato un errore nell'elaborazione dei dati",
							"buttonLabel": "Chiudi",
							"showCallback": function() {
								$(c_opt.eJsSearchReviewer).modal("hide");
							}
						});
					}
	
				}).fail(function() {
	
					$.fn.showDialog({
						"type": "danger",
						"title": "Errore!",
						"bodyMsg": "Si &egrave; verificato un errore nell'elaborazione dei dati!",
						"buttonLabel": "Chiudi",
						"showCallback": function() {
							$(c_opt.eJsSearchReviewer).modal("hide");
						}
					});
				});
	
				$.fn.toggleLoader("hide");
			});
		};

		self.init();
	};

	/**
	* $.fn.insertReviewerFromList
	*
	* gestisce l'inserimento dei dati selezionati dall'utente nella modale di ricerca dei revisori dentro la pagina principale i dati sono salvati come data-* collegato al div dei risultati
	*/
	$.fn.insertReviewerFromList = function() {

		$(c_opt.eJsSearchResultForm).on("submit", function(e) {

			e.preventDefault();

			// disabilito subito il bottone per evitare inserimenti multipli
			$(c_opt.eJsModalBtnInsert).prop("disabled", true);

			// leggo il json dei dati salvati su un div di risultato e lo parso per farne un array
			var dataResult = JSON.parse($(c_opt.eJsSearchModalResult).data("modal-tmpl-data"));

			if (typeof dataResult !== "undefined" && dataResult !== "") {

				// valorizzo i campi con i nuovi valori
				$(c_opt.eJsName).val(dataResult.name);
				$(c_opt.eJsSurname).val(dataResult.surname);
				$(c_opt.eJsFc).val(dataResult.fc);

			} else {

				$.fn.showDialog({
					"type": "danger",
					"title": "Errore!",
					"bodyMsg": "Si &egrave; verificato un errore nell'elaborazione dei dati",
					"buttonLabel": "Chiudi"
				});
			}

			// chiudo la modale
			$(c_opt.eJsSearchReviewer).modal("hide");
		});
	};

})(jQuery);

$(document).ready(function() {

	
});
