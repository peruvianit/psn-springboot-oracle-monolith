/**
* @preserve
* Filename:	form-validation.js
*
* Created: 	06/10/2016 (17:21:02)
* Created by: 	Lorenzo Saibal Forti <saibal@lorenzone.it>
*
* Last Updated:	06/10/2016 (17:21:02)
* Updated by: 	Lorenzo Saibal Forti <saibal@lorenzone.it>
*
* Copyleft:	2016 - Tutti i diritti riservati
*
* Comments: questo file contiene le funzioni di validazione specifiche per i form del sito. normalmente viene copiato nella root del sito specifico.
*
* http://www.runningcoder.org/jqueryvalidation/
**/

/* global validationParams, i18n, $root, $thisBlock, opt, formClass */

"use strict";

var validationParams = {
	"eResumeMsgCont"		: "#form-block-error",
	"eResumeInputCont"		: "#resume-errors",
	"eForm"					: "#main-form",
	"eFormClass"			: ".validit",
	"eGroupedClass"			: ".grouped",
	"eGroupValDateClass" 	: ".grouped-validate-date",
	"eGroupAtLeastClass"	: ".grouped-atleast-checkbox",
	"eErrorListContainer"	: ".form-group",
	"hideBtnClass"			: "hide-btn",
	"anchorClass"			: "anchor",
	"hideClass"				: "hidden",
	"errorClass"			: "error-input",
	"errorListClass"		: "error-text",
	"jsNoContainer"			: "js-no-container",
	"jsErrorTriggered"		: "js-error-triggered",
	"disableOverlay"		: "disable-overlay",
	"disabledByFormClass"	: "js-btn-disabled-byform",
	"waitFromFormClass"		: "js-btn-wait",
	"topOffset"				: 120,
	"invalidDateMsg"		: "Data non valida",
	"invalidAtLeastSingle"	: "Seleziona almeno 1 valore",
	"invalidAtLeastMulti"	: "Seleziona minima: $ valori",
	"invalidAtLeastAll"		: "Sono richiesti tutti i campi",
	"errorOnInit"			: "Il campo \"$\" è errato",
	"sentMsgForm"			: "Attendere...",
	"sentMsgFormClass"		: "btn btn-block submit-btn submit-btn-disabled m-t-0"
};

(function($) {

	var $root = $("html,body");
	var thisFormSelector = opt.validateFormByClass === "n" ? validationParams.eForm : validationParams.eFormClass;

	$.fn.formValidit = function(formSelector) {

		$(formSelector).validate({

			"rules": {
				"CF": /^[a-z]{6}.*[a-z]{1}$/i,
				"CF_LENGHT": /^[a-zA-Z0-9]{16}$/,
				"PWD_POLICY": /^(?=.*[a-zA-Z])(?=(.*\d))[0-9a-zA-Z!@#$%-_]{8,}$/,
				"NUMERIC_PLUS": /^\d+(?:[\.\s]\d{3})*(?:,\d+)?$/,
				"NUMERIC_PLUS_NO_ZERO": /^\s*(?=.*[1-9])\d*(?:,\d{1,2})?\s*$/,
				"NUMERIC_MAX_3DEC": /(?!^0*$)(?!^0*\.0*$)^\d+(?:[\.\s]\d{1,3})*(?:,\d+)?$/,
				"PHONE_NUMBER": /^[\+]?[(]?[0-9]{2,}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
				"EMAIL": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			},

			"messages": {
				"NOTEMPTY": "Campo \"$\" obbligatorio",
				"INTEGER": "Campo \"$\": richiesto n° intero",
				"EMAIL": "Il campo \"$\" deve contenere una email valida",
				"==": "Il campo deve essere uguale a \"%\"",
				">": "Il campo deve avere almeno \"%\" caratteri",
				">=": "Il campo deve avere almeno \"%\" caratteri",
				"!=": "Il campo non pu&ograve; essere uguale a \"%\"",
				"<=": "Il campo accetta massimo \"%\" caratteri",
				"<": "Il campo accetta massimo \"%\" caratteri",
				"CF": "I primi 6 caratteri e l'ultimo devono essere alfabetici",
				"CF_LENGHT": "Il codice fiscale deve essere di 16 caratteri",
				"PWD_POLICY": "Le regole per la password non sono rispettate",
				"INVALID_DATE": "La data non &egrave; valida",
				"NUMERIC": "Il campo deve essere numerico",
				"NUMERIC_PLUS": "I decimali vanno separati da virgola. Non ammessi \"+\" e \"-\"",
				"NOSPACE": "Il campo non deve contenere spazi",
				"PHONE_NUMBER": "Formato errato"
			},

			"submit": {
				"settings": {
					"clear": "focusin",
					"errorClass": validationParams.errorClass,
					"errorListClass": validationParams.errorListClass,
					"errorListContainer": validationParams.eErrorListContainer,
					"insertion": "prepend",
					"trigger": "click",
					// da rendere parametrico
					"button": "[type='submit']"
				},

				"callback": {

					"onInit": function(node) {

						if (typeof $.fn.formInitCallback === "function") {

							$.fn.formInitCallback(node);
						}
					},

					"onAfterSubmit": function(node) {

						if (typeof $.fn.formAfterSubmitCallback === "function") {

							$.fn.formAfterSubmitCallback(node);
						}
					},

					"onValidate": function(node) {

						// rimuovo una classe errore al form. utile per i controlli. viene levata on validate
						node.removeClass(validationParams.jsErrorTriggered);

						// aggiungo effetto scroll sulle àncore dei campi
						$(validationParams.eResumeInputCont).on("click", "." +validationParams.anchorClass, function(e) {

							e.preventDefault();

							var thisAnchor = $(this);

							if (typeof $(thisAnchor.attr("href")).offset() !== "undefined") {

								// scrollo la pagina e nascondo il box degli errori
								$root.animate({"scrollTop": $(thisAnchor.attr("href")).offset().top - validationParams.topOffset}, "slow");
							}
						});

						if (typeof $.fn.formOnValidateCallback === "function") {

							$.fn.formOnValidateCallback(node);
						}
					},

					"onBeforeSubmit": function(node) {

						if (typeof $.fn.formBeforeSubmitCallback === "function") {

							$.fn.formBeforeSubmitCallback(node);
						}
					},

					"onSubmit": function(node, formdata) {

						var result = "";

						$.fn.toLog(formdata);

						// atleast per checkbox
						if (validationParams.groupAtLeastClass !== "") {

							$.each($(validationParams.eGroupAtLeastClass), function() {

								var errorMsg;
								var $thisBlock = $(this);
								var atLeast = typeof $thisBlock.data("atleast") !== "undefined" ? $thisBlock.data("atleast") : 1;
								var label = $thisBlock.attr("data-validation-label");

								// primo checkbox valido
								var elemFirst = $thisBlock.children().find("input:checkbox:not(:disabled)").first();
								var elemFirstId = elemFirst.attr("id");
								var elemFirstName = elemFirst.attr("name");
								// trovo tutti i checkbox non disabled del div contenitore. serve per rimuovere la validazione
								var elemList = $thisBlock.children().find("input:checkbox:not(:disabled)");
								// trovo tutti i checkbox selezionati del div contenitore
								var elemSelected = $thisBlock.children().find("input:checkbox:checked");

								// trovo tutti i checkbox del div contenitore se selezionato all
								if (atLeast === "all") {

									atLeast = $thisBlock.children().find("input:checkbox").length;

									errorMsg = validationParams.invalidAtLeastAll;

								} else if (atLeast === 1) {

									errorMsg = validationParams.invalidAtLeastSingle;

								} else {

									errorMsg = validationParams.invalidAtLeastMulti;
									errorMsg = errorMsg.replace("$", atLeast);
								}

								if (elemFirst.length > 0 && $(elemSelected).length < parseInt(atLeast)) {

									result += "<li><a class=\"" +validationParams.anchorClass+ "\" href=\"#" +elemFirstId+ "\">" +label+ "</a></li>";

									// aggiungo l'errore custom al campo
									$.fn.showFormError(elemFirstName, errorMsg);
								}

								// rimuovo le validazioni al click sui checkbox interessati
								$(elemList).click(function() {

									$.fn.resetErrorOnForms();

									if ($(validationParams.eResumeMsgCont).length) {

										$(validationParams.eResumeMsgCont).addClass(validationParams.hideClass);
										$(validationParams.eResumeInputCont).off();
									}
								});
							});
						}

						// valido la data se le select non sono "disabled"
						if (validationParams.groupValDateClass !== "") {

							$.each($(validationParams.eGroupValDateClass), function() {

								// array per i valori trovati
								var a = [];

								// trovo tutte le select figlie del div contenitore
								var element = $(this).children().find("select");

								// le select non devono essere disabilitate
								if ($(element).prop("disabled") === false) {

									// per ogni select trovata prendo il valore e lo metto dentro un array per costruire la data
									$.each(element, function(key, value) {

										a.push($(value).val());
									});

									// implodo i valori trovati
									var validateDate = a.join("/");

									// chiamo la funzione di validazione passando la data completa come parametro
									if ($.fn.validDate(validateDate) === false) {

										// prendo l'id del primo elemento come riferimento
										var dateInputId = element.attr("id");
										var dateInputName = $("#" +dateInputId).attr("name");
										var dateInputLabel = $("#" +dateInputId).attr("data-validation-label");

										result += "<li><a class=\"" +validationParams.anchorClass+ "\" href=\"#" +dateInputId+ "\">" +dateInputLabel+ "</a></li>";

										// aggiungo l'errore custom al campo
										$.fn.showFormError(dateInputName, validationParams.invalidDateMsg);
										//~ o[inputName]= validationParams.invalidDateMsg;
										//~ $(formSelector).addError(o);
									}
								}
							});
						}

						if (result !== "") {

							// aggiungo una classe errore al form. utile per i controlli. viene levata on validate
							node.addClass(validationParams.jsErrorTriggered);

							// aggiungo gli errori come lista e rimuovo la classe "hide"
							if ($(validationParams.eResumeMsgCont).length) {

								$.fn.errorBox(result, node);
							}

							// blocco invio del form
							return false;

						}

						// se deve essere nascosto il bottone controllo la presenza di una classe nel tag form
						if ($(node).hasClass(validationParams.hideBtnClass)) {

							$(node).parent("div").css("position", "relative").promise().done(function() {

								// se il form non è tradizionale e non è contenuto dentro un div container mi aggancio al body
								if ($(node).hasClass(validationParams.jsNoContainer)) {

									$("body").prepend("<div class=\"" +validationParams.disableOverlay+ " fixed\"></div>");

								} else {

									$(node).append("<div class=\"" +validationParams.disableOverlay+ "\"></div>");
								}

								// utile nei casi in cui non si voglia mostrare un testo sul bottone ma nasconderlo
								$(opt.eRemoveOnSubmit).css("visibility", "hidden").attr("type", "button");

								var submitBtn = node.find("button[type=submit], button[type=button].js-disable-on-submit");

								$(submitBtn).addClass(validationParams.disabledByFormClass).css("display", "none").after("<button class=\"" +validationParams.sentMsgFormClass+ " " +validationParams.waitFromFormClass+ "\">" +validationParams.sentMsgForm +"</button>");
							});
						}

						// impostando questa variabile su "y" blocco l'invio del form che va fatto dalla callback
						if (typeof $("body").data("manualFormSubmit") !== "undefined" && $("body").data("manualFormSubmit") === "y") {

							return false;
						}

						// invio del form
						node[0].submit();
					},

					"onError": function(node, errors) {

						var formId = node.attr("id");
						var errorResult = "";

						// aggiungo una classe errore al form. utile per i controlli. viene levata on validate
						node.addClass(validationParams.jsErrorTriggered);

						// se il form ha questo data-* allora blocco la visualizzazione del blocco errori
						if (node.attr("data-errorbox") === "none" || node.attr("data-errorbox") === "n") {

							return false;
						}

						for (var inputName in errors) {

							// https://eslint.org/docs/rules/guard-for-in
							if (Object.prototype.hasOwnProperty.call(errors, inputName)) {

								// prendo il nome del campo dal data-validation-label e l'id
								// se il campo è nascosto l'id viene preso dal campo data-anchorid (se presente)
								// importante aggiungere $.escapeSelector perchè id con parentesi quadre e caratteri speciali creano casino.
								// valido solo per jquery 3
								// l'alternativa è espressione regolare: elem.replace(/(:|\.|\[|\])/g,'\\$1');
								var inputId = $("[name='"+inputName+"']").attr("id").replace(/(:|\.|\[|\])/g, "\\$1");
								var anchorLink = "";

								if ($("#" +inputId).is(":visible")) {

									anchorLink = inputId;

								} else if (typeof $("#" +inputId).data("anchorid") !== "undefined") {

									anchorLink = $("#" +inputId).data("anchorid");

								}

								var inputLabel = $("#" +inputId).attr("data-validation-label");

								// creo un'àncora per ogni label trovata
								if (typeof inputLabel !== "undefined") {

									errorResult += "<li><a class=\"" +validationParams.anchorClass+ "\" href=\"#" +anchorLink+ "\">" +inputLabel+ "</a></li>";
								}
							}
						}

						// se c'è almeno un errore
						if (errorResult !== "") {

							if ($(validationParams.eResumeMsgCont).length) {

								// aggiungo gli errori come lista e rimuovo la classe "hide"
								$.fn.errorBox(errorResult, node);

								// aggiunggo effetto scroll sulle àncore dei campi
								// $(validationParams.eResumeInputCont).on("click", "." +validationParams.anchorClass ,function(e) {

									// e.preventDefault();

									// scrollo la pagina e nascondo il box degli errori
									// $root.animate({ scrollTop: $($(this).attr("href")).offset().top - validationParams.topOffset }, "slow");
								// });

								// nascondo il box bottom degli errori all'onclick sugli elementi del form
								// per questioni di priorità nelle callback del plugin questo era l'unico modo
								$("#" +formId+ " select, #" +formId+ " input").not(":input[type=button],:input[type=submit],:input[type=reset]").click(function() {

									$(validationParams.eResumeMsgCont).addClass(validationParams.hideClass);
									$(validationParams.eResumeInputCont).off();

									if (typeof $.fn.errorBoxCallback === "function") {

										$.fn.errorBoxCallback(node);
									}
								});
							}
						}
					}
				}
			},

			"dynamic": {
				"settings": {
					"trigger": "focusout",
					"delay": 500
				},

				"callback": {

					// rimuove i messaggi di errore raggruppati per select e i bordi dalle select custom del plugin
					"onComplete": function (a, input) {

						//~ var inputId = $(input).attr("id");
						var isGrouped = $(input).parents(validationParams.eGroupedClass);

						// se i campi sono dentro un div "raggruppato" elimino i messaggi e i bordi di errore
						if (isGrouped.length) {

							// rimuovo il messaggio
							$(isGrouped).children("." +validationParams.errorListClass).remove();
							// rimuovo i bordi errore
							$(isGrouped).find("." +validationParams.errorClass).removeClass(validationParams.errorClass);
						}

						// attivo la callback di cancellazione messaggi onclick
						$.fn.resetErrorsOnClick();
					}
				}
			},

			"debug": false
		});
	};

	/**
	* $.fn.errorBox
	*
	* crea il template per l'error block
	*/
	$.fn.errorBox = function(data) {

		// aggiungo gli errori come lista e rimuovo la classe "hide"
		$(validationParams.eResumeInputCont).html("<ul>" +data+ "</ul>").promise().done(function() {

			$(validationParams.eResumeMsgCont).removeClass(validationParams.hideClass);

			$root.animate({"scrollTop": $(validationParams.eResumeMsgCont).offset().top - validationParams.topOffset}, "slow");
		});

		if (typeof $.fn.errorBoxCallback === "function") {

			$.fn.errorBoxCallback();
		}
	};

	/**
	* $.fn.showFormError
	*
	* mostra un messaggio custom al ricaricamento del form.
	* i parametri passati sono il nome del campo ed eventualmente un messaggio
	*/
	$.fn.showFormError = function(inputname, thismsg) {

		var thisMsg;
		var o = {};
		var inputId = $("[name='" +inputname+ "']").attr("id");

		if (typeof inputId === "undefined") {

			return false;
		}

		if (typeof thismsg === "undefined") {

			thisMsg = validationParams.errorOnInit;
			thisMsg = thisMsg.replace("$", $("#" +inputId).attr("data-validation-label"));

		} else {

			thisMsg = thismsg;
		}

		o[inputname]= thisMsg;
		$(thisFormSelector).addError(o);
	};

	/**
	* $.fn.resetErrorBox
	*
	* nasconde il box di validazionea fondo pagine del form
	*/
	$.fn.resetErrorBox = function() {

		// aggiungo gli errori come lista e rimuovo la classe "hide"
		if ($(validationParams.eResumeMsgCont).length) {

			$(validationParams.eResumeMsgCont).addClass(validationParams.hideClass);

		}
	};

	/**
	* $.fn.resetErrorOnForms
	*
	* rimuove gli errori dai form con classe validit e, se esiste, validit-advanced
	*/
	$.fn.resetErrorOnForms = function() {

		var formNode = typeof thisFormSelector !== "undefined" ? thisFormSelector : validationParams.eFormClass;

		$(formNode).removeError();
	};

	/**
	* $.fn.resetErrorsOnClick
	*
	* callback per chiudere i messaggi di errore cliccandoci sopra
	*/
	$.fn.resetErrorsOnClick = function() {

		$("." +validationParams.errorListClass).hover(function() {
			$(this).css("cursor", "pointer");
		});

		$("." +validationParams.errorListClass).click(function() {

			$(thisFormSelector).removeError();
		});
	};

	/**
	* $.fn.removeFormOverlay
	*
	* rimuove l'overlay e ripristina i bottoni originali submit
	*/
	$.fn.removeFormOverlay = function() {

		$("." +validationParams.disableOverlay).remove();
		$("." +validationParams.waitFromFormClass).remove();
		$("." +validationParams.disabledByFormClass).css("display", "inline-block").removeClass(validationParams.disabledByFormClass);
	};

	$.fn.formValidit(thisFormSelector);

})(jQuery);
