/**
* @preserve
* Filename:	form-utils.lib.js
*
* Created: 	06/10/2016 (17:19:41)
* Created by: 	Lorenzo Saibal Forti <saibal@lorenzone.it>
*
* Last Updated:	06/10/2016 (17:19:41)
* Updated by: 	Lorenzo Saibal Forti <saibal@lorenzone.it>
*
* Copyleft:	2016 - Tutti i diritti riservati
*
* Comments: questo file contiene funzioni per la gestione e validazione dei moduli. http://www.runningcoder.org/jqueryvalidation/
**/

/* global opt, validationParams */

(function($) {

	"use strict";

	/**
	* $.fn.resetSelect
	*
	* dato un selettore resetta le select indicate
	*/
	$.fn.resetSelect = function(selector, removeselected, disabled) {

		if (typeof removeselected !== "undefined") {

            $("option:selected", $(selector)).removeAttr("selected");
        }

        $(selector).map(function() {
            $(this).get(0).selectedIndex = 0;
        });

        if (typeof disabled !== "undefined") {

            $(selector).attr("disabled", true);
        }
	};

	/**
	* $.fn.emptySelect
	*
	* dato un selettore svuota le select indicate
	*/
	$.fn.emptySelect = function(selector) {

		$(selector).empty();
	};

	/**
	* $.fn.customAjaxForSelect
	*
	* chiamata generica ajax ad una pagina che deve restituire un json per popolare una select
	*/
	//~ $.fn.customAjaxForSelect = function(customoptions) {

		//~ var thisParams = {
			//~ "targetPage": "",
			//~ "targetSelect": "",
			//~ "additionalData": "",
			//~ "additionalVal": "",
			//~ "firstChoiceText": "Seleziona...",
			//~ "firstChoiceValue": "",
			//~ "useFirstChoice": false,
			//~ "trigger": false,
			//~ "allowEmptyVal": true,
			//~ "sendHeaders": false,
			//~ "callbackUpdate": "",
			//~ "callbackError": ""
		//~ };

		//~ var $this = $(this);
		//~ var $thisSource;
		//~ var sourceId;
		//~ var thisOpt = $.extend(true, {}, thisParams, customoptions);

		//~ var self = {};

		//~ self.init = function() {

			//~ var selVal = $thisSource.val();

			//~ if (thisOpt.allowEmptyVal === false && selVal === "") {

				//~ return false;
			//~ }

			//~ if (thisOpt.sendHeaders) {
				//~ var csrfHeader = $("meta[name='_csrf_header']").length ? $("meta[name='_csrf_header']").attr("content") : "0";
				//~ var csrfToken = $("meta[name='_csrf']").length ? $("meta[name='_csrf']").attr("content") : "0";
			//~ }

			//~ // array dei dati base
			//~ var passedData = {
				//~ "source": sourceId,
				//~ "selval": selVal,
				//~ "trigger": thisOpt.trigger
			//~ };

			//~ // aggiungo nella post i valori dei campi passati nella configurazione del plugin
			//~ if (thisOpt.additionalData !=="") {

				//~ paramArray = thisOpt.additionalData.split(",").map(function(item) {
					//~ passedData[item] = $("#" +item).val();
				//~ });
			//~ }

			//~ // aggiungo nella post valori custom personalizzabili
			//~ if (thisOpt.additionalVal !=="") {

				//~ paramArray = thisOpt.additionalVal.split(",").map(function(item) {
					//~ res = item.split(":");
					//~ passedData[res[0]] = res[1];
				//~ });
			//~ }

			//~ $.ajax({
				//~ url: thisOpt.targetPage,
				//~ cache: false,
				//~ timeout: opt.funcTimeOut,
				//~ dataType: "json",
				//~ data: passedData,
				//~ beforeSend: function (xhr) {
					//~ if (thisOpt.sendHeaders) {
						//~ xhr.setRequestHeader(csrfHeader, csrfToken);
					//~ }
				//~ }

			//~ }).done(function(data) {

				//~ if (data !==null) {

					//~ // mostro il loader
					//~ $.fn.toggleLoader("show");

					//~ self.selectUpdate(data);

				//~ } else {

					//~ $.fn.showDialog({
						//~ type: "danger",
						//~ title: "Errore!",
						//~ bodyMsg: "Si è verificato un errore nell'elaborazione dei dati",
						//~ buttonLabel: "Chiudi"
					//~ });

					//~ $.fn.resetSelect($thisSource);
				//~ }

			//~ }).fail(function(e) {

				//~ if (typeof(thisOpt.callbackError) ==="function") {

					//~ // blocco il proseguimento della funzione se la callback restituisce false
					//~ if (thisOpt.callbackError(e) ===false) {

						//~ return false;
					//~ }
				//~ }

				//~ $.fn.showDialog({
					//~ type: "danger",
					//~ title: "Errore!",
					//~ bodyMsg: "Si è verificato un errore nell'elaborazione dei dati!",
					//~ buttonLabel: "Chiudi"
				//~ });

				//~ $.fn.resetSelect($thisSource);
			//~ });
		//~ };

		//~ self.selectUpdate = function(data) {

			//~ if($(thisOpt.targetSelect).length) {

				//~ // svuoto la select
				//~ $(thisOpt.targetSelect).empty().promise().done(function() {

					//~ // imposto la prima option vuota se abilitata la funzione
					//~ if (thisOpt.useFirstChoice) {

						//~ $(thisOpt.targetSelect).append(function() {

							//~ return $($.parseHTML("<option>")).attr({
								//~ value: thisOpt.firstChoiceValue,
								//~ selected: true
							//~ }).text(thisOpt.firstChoiceText);

						//~ });
					//~ };
				//~ });

				//~ // scrivo i valori nella select
				//~ $(thisOpt.targetSelect).append(

					//~ $.map(data, function(value, key) {

						//~ var thisSelect= (typeof(value.selected) !=="undefined" && value.selected ==="y") ? true : false;

						//~ return $($.parseHTML("<option>")).attr({
							//~ value: value.code,
							//~ selected: thisSelect
						//~ }).text(value.label);
					//~ })
				//~ );

			//~ } else {

				//~ $.fn.showDialog({
					//~ type: "danger",
					//~ title: "Errore!",
					//~ bodyMsg: "Si è verificato un errore. Elemento select non presente",
					//~ buttonLabel: "Chiudi"
				//~ });
			//~ }

			//~ // funzione callback update
			//~ if (typeof(thisOpt.callbackUpdate) ==="function") {

				//~ thisOpt.callbackUpdate(data);
			//~ }

			//~ // nascondo il loader
			//~ $.fn.toggleLoader("hide");
		//~ };

		//~ if ($this.length) {

			//~ sourceId = $this.attr("id");
			//~ $thisSource = $("#" +sourceId);

			//~ self.init();
		//~ }

		//~ return self;
	//~ };

	/**
	* $.fn.getAjaxForSelect
	*
	* carico la lista dei paesi in base al valore della select selezionato
	*/
	$.fn.getAjaxForSelect = function(customoptions) {

		var thisParams = {
			// possibili valori: ajax, indexeddb
			"callType": "ajax",
			"disabledText": "",
			"targetPage": "",
			"additionalData": "",
			"additionalVal": "",
			"passingName": false,
			"concatValue": false,
			"trigger": false,
			"allowEmptyVal": false,
			"sendHeaders": false,
			"callbackError": "",
			"idbPromiseCallback": ""
		};

		var $thisSource;
		var sourceId;
		var sourceName;
		var csrfHeader;
		var csrfToken;
		var $this = $(this);
		var thisOpt = $.extend(true, {}, thisParams, customoptions);

		var self = {};

		self.init = function() {

			var selVal = $thisSource.val();

			if (thisOpt.allowEmptyVal ===false && selVal ==="") {
				self.disableAll();

				return false;
			}

			if (thisOpt.sendHeaders) {
				csrfHeader = $("meta[name='_csrf_header']").length ? $("meta[name='_csrf_header']").attr("content") : "0";
				csrfToken = $("meta[name='_csrf']").length ? $("meta[name='_csrf']").attr("content") : "0";
			}

			// array dei dati base
			var passedData = {
				"source": sourceId,
				"selval": selVal,
				"trigger": thisOpt.trigger
			};

			// aggiungo il name della select se impostato a true nella configurazione e se presente
			if (typeof sourceName !=="undefined") {

				passedData.name = sourceName;
			}

			// aggiungo nella post i valori dei campi passati nella configurazione del plugin
			if (thisOpt.additionalData !== "") {

				thisOpt.additionalData.split(",").map(function(item) {
					passedData[item] = $("#" +item).val();
				});
			}

			// aggiungo nella post valori custom personalizzabili
			if (thisOpt.additionalVal !=="") {

				thisOpt.additionalVal.split(",").map(function(item) {
					var res = item.split(":");
					passedData[res[0]] = res[1];
				});
			}

			switch (thisOpt.callType) {

				// chiamata di default ajax. si aspetta un json da una pagina
				case "ajax":
				default:

					$.ajax({
						"url": thisOpt.targetPage,
						"cache": false,
						"timeout": opt.funcTimeOut,
						"dataType": "json",
						"data": passedData,
						"beforeSend": function (xhr) {
							if (thisOpt.sendHeaders) {
								xhr.setRequestHeader(csrfHeader, csrfToken);
							}
						}

					}).done(function(data) {

						self.successQuery(data);

					}).fail(function(e) {

						self.failQuery(e);

					});

				break;

				// chiamata per indexeddb. la logica spetta ad una promise che reve restituire come resolve un json
				case "indexeddb":

					if (typeof window[thisOpt.idbPromiseCallback] === "function") {

						window[thisOpt.idbPromiseCallback](passedData).then(function(data) {

							self.successQuery(data);

						}).catch(function(e) {

							self.failQuery(e);
						});
					}

				break;
			}
		};

		// data is ok
		self.successQuery = function(data) {

			// controllo che sia un json
			if (typeof data === "object" && data !== null) {

				var thisData = data;

				// mostro il loader
				$.fn.toggleLoader("show");

				if (typeof thisData.subdataConcat === "undefined" && typeof thisData.subdata !== "undefined") {

					thisData = $.extend(true, {}, thisData, {"subdataConcat" : "y"});
				}

				self.refreshIt(thisData);

			} else {

				$.fn.showDialog({
					"type": "danger",
					"title": "Errore!",
					"bodyMsg": "Si è verificato un errore nell'elaborazione dei dati",
					"buttonLabel": "Chiudi"
				});

				// reset di tutte le select
				$.fn.resetSelect($("#" +sourceId));
				self.disableAll();
			}
		};

		// data is ko
		self.failQuery = function(e) {

			if (typeof thisOpt.callbackError === "function") {

				// blocco il proseguimento della funzione se la callback restituisce false
				if (thisOpt.callbackError(e) === false) {

					return false;
				}
			}

			$.fn.showDialog({
				"type": "danger",
				"title": "Errore!",
				"bodyMsg": "Si è verificato un errore nell'elaborazione dei dati!",
				"buttonLabel": "Chiudi"
			});

			// reset di tutte le select nel caso l'utente cliccasse su una option vuota (di defaul sono nascoste)
			$.fn.resetSelect($("#" +sourceId));
			self.disableAll();
		};

		self.refreshIt = function(data) {

			var result;

			// se i dati restituiti non prevedono subdati lascio disabilitate le select successive a quella selezionata
			var disableSelect = data.subdataConcat === "n" ? true : false;

			// disabilito le select quando necessario
			self.disableAll(data);

			// registro l'id della select seguente nella catena
			// per questioni di prestazione su mobile salvo i dati in data-attr
			if (typeof $thisSource.data("nextid") === "undefined") {

				// se è presente questo attributo vuol dire che le select dinamiche stanno dentro un markup non "lineare" ma su livelli diversi
				// dentro il data-dynamic-next-group ci va la classe css che serve come riferimento di ricerca per il blocco successivo (cerca su inventario)
				if ($thisSource.parent(opt.eGroupFormCont).data("dynamic-next-group")) {

					var nextGroupLevel = $thisSource.parent(opt.eGroupFormCont).data("dynamic-next-group");

					result = $thisSource.parentsUntil(nextGroupLevel).next().find("select" +opt.eSelectDynamic).attr("id");

					$.fn.toLog("modalità ricerca select successiva: estesa");

				} else {

					result = $thisSource.parents(opt.eGroupFormCont).next().find("select" +opt.eSelectDynamic).attr("id");

					$.fn.toLog("modalità ricerca select successiva: classica");
				}

				// bootstrap select genera dei div annidati. cerco id select singola successiva a quella selezionata
				//~ var result = $thisSource.parents(opt.eGroupFormCont).next().find("select" +opt.eSelectDynamic).attr("id");

				result = typeof result !== "undefined" ? result : "";

				$thisSource.data("nextid", result);

				$.fn.toLog("registro il nextid per " +sourceId);
			}

			var nextId 	= $thisSource.data("nextid");

			// se esiste una select successiva inserisco i dati risultanti
			if (nextId !=="") {

				var disabledTitle = thisOpt.disabledText !=="" ? thisOpt.disabledText : data.label;

				disabledTitle = data.subdataConcat === "n" ? disabledTitle : $("#" +nextId).data("choice");

				// riempio le select con i dati subdata
				if (data.subdataConcat ==="y" && data.subdata.length > 0) {

					// imposto il valore della prima option con html() così la svuoto da eventuali altri valori
					// successivamente uso per $.map per parsare i dati del json e aggiungo le option ricavate alla select
					$("#" +nextId).html("<option value=\"\" selected>" +disabledTitle+ "</option>").promise().done(function() {

						$(this).append(
							$.map(data.subdata, function(value) {

								var thisValue = thisOpt.concatValue ? value.code+ "__" +encodeURI(value.label) : value.code;
								var thisSelect= typeof value.selected !== "undefined" && value.selected === "y" ? true : false;

								return $($.parseHTML("<option>")).attr({
											"value": thisValue,
											"selected": thisSelect,
											"disabled": disableSelect
										}).text(value.label);
							})
						);

						$(this).prop("disabled", disableSelect);
					});
				}
			}

			// nascondo il loader
			$.fn.toggleLoader("hide");
		};

		// disable su tutte le select
		self.disableAll = function(data) {

			var result;

			// testo default per disable
			var disabledTitle = thisOpt.disabledText;

			// registro gli id di tutte le select con classe dynamic
			// per questioni di prestazione su mobile salvo i dati in data-*
			if (typeof $thisSource.data("group") === "undefined") {

				// cerco tutte le select dynamic nello stesso "blocco" html
				result = $thisSource.parents(opt.eGroupFormCont).nextUntil().find("select" +opt.eSelectDynamic);

				// se quelle trovate hanno l'attributo per le select "esterne" al blocco delle altre faccio un'altra query
				if ($("#" +result.attr("id")).parent(opt.eGroupFormCont).data("dynamic-next-group") ||
					$thisSource.parent(opt.eGroupFormCont).data("dynamic-next-group")) {

						var nextGroupLevel = $thisSource.parent(opt.eGroupFormCont).data("dynamic-next-group");

						result = $thisSource.parentsUntil(nextGroupLevel).next().find("select" +opt.eSelectDynamic);
				}

				result = result.length > 0 ? result : "";

				$thisSource.data("group", result);

				$.fn.toLog("registro il group per " +sourceId);
			}

			var group = $thisSource.data("group");

			if (group !=="") {

				// per ogni select imposto il testo di default (può essere il valore della select precedente oppure il data-title)
				$.each(group, function() {

					var thisId = $(this).attr("id");
					var $thisItem = $("#" +thisId);

					// per questioni di prestazione su mobile registro il valore iniziale della select dentro un data-attr
					if (typeof $thisItem.data("title") === "undefined") {

						var title = $("#" +thisId+ " option:selected").text();

						$thisItem.data("title", title);

						$.fn.toLog("registro il title per " +thisId);
					}

					if (thisOpt.disabledText ==="") {

						if (typeof data !== "undefined") {

							var label = typeof data.label !== "undefined" ? data.label : "-";

							disabledTitle = data.subdataConcat === "n" ? label : $thisItem.data("title");

						} else {

							disabledTitle = $thisItem.data("title");
						}
					}

					$thisItem.html("<option value=\" \" selected disabled>" +disabledTitle+ "</option>").promise().done(function() {

						$(this).prop("disabled", true);
					});

					$.fn.toLog("disabilito select " +thisId);
				});

			} else {

				$.fn.toLog("non sono stati trovati figli nel disabled");
			}
		};

		if ($this.length) {

			sourceId = $this.attr("id");
			$thisSource = $("#" +sourceId);

			// prendo il nome della select
			if (thisOpt.passingName === true && typeof $thisSource.attr("name") !== "undefined") {

				sourceName = $thisSource.attr("name");
			}

			self.init();
		}

		return self;
	};


	/**
	* $.fn.reloadSelectedValues
	*
	* funzione ricorsiva per ciclare sulle select disabled al caricamento
	*/
	$.fn.reloadSelectedValues = function(thiselem, targetpage) {

		if ($(thiselem).val() !== "" && $(thiselem).val() !== null) {

			$(thiselem).getAjaxForSelect({
				"targetPage": targetpage,
				"trigger": "onload",
				"passingName": true,
				"allowEmptyVal": false
			});

		} else {

			// reiterazione
			setTimeout(function() {
				$.fn.reloadSelectedValues(thiselem, targetpage);
			}, 400);
		}
	};


	/**
	* $.fn.autoCompleteAddon
	*
	* copia il valore della selezione del plugin autocomplete dentro un campo hidden
	*/
	$.fn.autoCompleteAddon = function(customoptions, fnmethods) {

		var thisParams = {
			"elem": "",
			"suffix": "_autocomplete",
			"type": "hidden",
			"name": "",
			"value": "",
			"keypressed": "",
			"keyprevent": "9, 13",
			"debug": false
		};

		var thisOpt = $.extend(true, {}, thisParams, customoptions);

		if (typeof thisOpt.elem === "object" && thisOpt.elem !== "") {

			// ottengo l'id del clone a partire dall'id originario
			var originId = $(thisOpt.elem).attr("id");
			var cloneId	= originId + thisOpt.suffix;

			var methods = {

				"init" : function() {

					if ($("#" +cloneId).length ===0) {

						$($.parseHTML("<input>")).attr({
							"id": cloneId,
							"name": cloneId,
							"value": thisOpt.value,
							"type": thisOpt.type

						}).insertAfter("#" +originId);
					}
				},

				"remove": function() {

					// trasformo l'array e li mappo come valori numerici
					var paramArray = thisOpt.keyprevent.split(",").map(function(item) {
						return parseInt(item, 10);
					});

					// rimuovo l'elemento hidden solo se non è stato premuto tab o altro tasto nell'array esclusione
					if ($("#" +cloneId).length && $.inArray(thisOpt.keypressed, paramArray) === -1) {

						$("#" +cloneId).remove();
					}
				},

				// reset del campo al caricamento della pagina
				"reset": function() {

					if ($("#" +originId).length) {

						if ($("#" +cloneId).length ===0 || $("#" +cloneId).val() ==="") {

							$("#" +originId).val("");
						}
					}
				}
			};

			if (methods[fnmethods]) {

				return methods[fnmethods].apply(this, Array.prototype.slice.call(arguments, 1));

			} else if (typeof fnmethods === "object" || !fnmethods) {

				// default impostato per "init"
				return methods.init.apply(this, Array.prototype.slice.call(arguments, 1));

			} else if (thisOpt.debug) {

				$.fn.toLog("Il metodo " + fnmethods + "non esiste");
			}
		}
    };

    /**
	* $.fn.validDate
	*
	* valida una data e restituisce true o false
	*/
	$.fn.validDate = function(mydate, mysplitdate) {

		var mySplitDate = typeof mysplitdate !== "undefined" ? mysplitdate : "/";

		var bits = mydate.split(mySplitDate);
		var d = new Date(bits[2] + "/" + bits[1] + "/" + bits[0]);

		if (bits[2].length === 4) {

			return Boolean(d) && d.getMonth() + 1 === Number(bits[1]) && d.getDate() === Number(bits[0]);
		}

		return false;
	};

	/**
	* $.fn.submitFromOutButton
	*
	* invia un form da un bottone che è fuori il form (non viene usato l'attributo "form" sul bottone perchè non compatibile con IE
	*/
	$.fn.submitFromOutButton = function() {

		$(opt.eJsSubmitOutForm).click(function () {

			var $this = $(this);
			var formId = $this.data("form-id");

			if (typeof formId !== "undefined") {

				$("#" +formId).submit();
			}
		});
	};

	/**
	* $.fn.toggleTemporarySubmit
	*
	* disabilita temporaneamente un bottone submit aggiungendo un layer al form. utile nelle modali per evitare doppi invii
	*/
	$.fn.toggleTemporarySubmit = function(form, command) {

		var thisCommand = typeof command !== "undefined" ? command : "hide";

		if ($(form).hasClass(validationParams.hideBtnClass) && !$(form).hasClass(validationParams.eFormClass) || $(form).hasClass(opt.hideBtnOnly)) {

			switch (thisCommand) {

				case "hide":
					$(form).parent("div").css("position", "relative").promise().done(function() {

						$(form).append("<div class=\"" +validationParams.disableOverlay+ "\"></div>");
					});
				break;

				default:
				case "show":
					$("." +validationParams.disableOverlay).remove();
				break;
			}
		}
	};

})(jQuery);

$(document).ready(function() {

	"use strict";

	/**
	* visualizzo un messaggio sui campi readonly (666)
	*/
	$(opt.eReadOnly).on("focus", function(e) {

		e.preventDefault();

		var $this = $(this);
		var isSelect;

		if (this.nodeName.toLowerCase() === "select") {
			e.preventDefault();
			window.focus();
			$this.blur();
			$this.attr("disabled", true);
			isSelect = true;
		}

		$.fn.showDialog({
			"typecast": "info",
			"type": "info",
			"title": "Informazione",
			"bodyMsg": "Questo campo non pu&ograve; essere modificato",
			"buttonLabel": "Chiudi",
			"callbackFunc": function() {
				if (typeof isSelect !== "undefined") {
					$this.attr("disabled", false);
				}
			}
		});
	});

	/**
	* policy text
	*
	* faccio vedere le policy (password o altro) al focus ma solo la prima volta che viene caricata la pagina
	*/
	$(opt.eShowPolicy).focus(function() {

		var popid = $(this).data("popoverid");

		if ($(this).data("viewed") !==true) {

			$("#" +popid).popover("show");

			$("#" +popid).on("click", function() {

				$("#" +popid).popover("hide").removeAttr("id");
			});

			$(this).data("viewed", "y");
		}
	});

	$(opt.eShowPolicy).on("blur change focusout keydown", function(e) {

		var popid = $(this).data("popoverid");

		if (e.type !=="keydown" || $(opt.eShowPolicy).hasClass(opt.hidePolicyOnKeyDown)) {

			$("#" +popid).popover("hide").removeAttr("id");
		}
	});

	/**
	* conto i caratteri della textarea
	*/
	$(opt.eTareaCountChars).on("focus keyup keypress", function() {

		var $this = $(this);

		var limit = $this.attr("maxlength");
		var cs = [limit - $this.val().length];

		$this.parent().children(opt.eCharsLeft).removeClass("invisible");
		$this.parent().children(opt.eCharsLeft).find("span").text(cs);
	});

	/**
	* mostro la password cliccando sull'icona
	*/
	$(opt.ePassShow).click(function(e) {

		e.preventDefault();

		var $this = $(this);
		var field = $this.parent("div").find("input");

		if (field.attr("type") === "password") {

			field.attr({
				"type": "text",
				"autocomplete": "off"
			}).focus();

			$this.children("span").removeClass("miur-eye").addClass("miur-eye-slash-close");

		} else {

			field.attr({
				"type": "password",
				"autocomplete": "on"
			});

			$this.children("span").removeClass("miur-eye-slash-close").addClass("miur-eye");
		}
	});

	/**
	* mostra/nasconde le select collegate alle option
	*/
	$("[data-" +opt.eChainSelGroup+ "]").on("change ecsg-now", function() {

		var thisOption = $(this).find("option:selected");
		var thisGroup = $(this).data(opt.eChainSelGroup);

		// cerco tutte le altre select appartenenti allo stesso gruppo del genitore
		$(this).parents().nextAll().find("[data-" +opt.eChainSelGroup+ "=" +thisGroup+ "]").each(function() {

			var $this = $(this);

			// aggiungo la classe hidden a tutte le select del gruppo
			$this.parent(opt.eIsChainselHide).addClass("hidden");

			// se la select però è visibile resetto l'option selezionata
			if ($this.hasClass("hidden") ===false) {

				$this.find("option:selected").attr("selected", false);
			}
		});

		// se la option selezionata ha un data-attr valido rendo visibile la select selezionata
		if (typeof thisOption.data(opt.eIsChildData) !== "undefined") {

			$("#" +thisOption.data(opt.eIsChildData)).removeClass("hidden");
		}

	}).trigger("ecsg-now");

	/**
	* mostra/nasconde i campi collegati ai radiobox/checkbox
	*/
	$("[data-" +opt.switchDataInput+ "]").on("click sdi-now", function(e) {

		var $this = $(this);

		// prendo l'id che mi interessa
		var switchId = $this.attr("data-" +opt.switchDataInput);
		var isChecked = $this.prop("checked");

		// al caricamento cerco tutti i campi con la classe specifica e li disabilito
		if (e.type ==="sdi-now" && $("#" +switchId).hasClass(opt.disableOnLoad)) {

			$("#" +switchId).find("input, select, textarea").prop("disabled", true);
		}

		// differenzio gli eventi click e load. al click disabilito tutti gli elementi per poi riabilitare solo quello utile
		if (e.type ==="click") {

			if ($(opt.eSwitchInputToggle).hasClass("switch-input-onlydisable") ===false) {

				$(opt.eSwitchInputToggle).addClass("hidden");
			}

			$(opt.eSwitchInputToggle).find("input, select, textarea").prop("disabled", true).promise().done(function() {

				$(this).each(function() {

					var thisInput = $(this);

					if (thisInput.is("input:text") || thisInput.is("textarea")) {
						$(thisInput).val("");
					}

					if (thisInput.is("select")) {
						$.fn.resetSelect(thisInput);
					}
				});

				if (typeof validationParams.errorListClass !== "undefined") {

					$(this).removeClass(validationParams.errorClass);

					$("#" +switchId).parent().find("." +validationParams.errorListClass).remove();
				}

				$("[data-" +opt.switchDataInput+ "='" +switchId+ "']").next("span").removeClass(opt.switchInputActive);
			});

			$.fn.resizeSidebar();
		}

		// se il campo nascosto è quello che mi interessa lo riabilito
		if (isChecked) {

			if ($("#" +switchId).hasClass("switch-input-onlydisable") ===false) {

				$("#" +switchId).removeClass("hidden");
			}

			$("#" +switchId).find("input, select, textarea").not(opt.eLeaveDisabled).prop("disabled", false).promise().done(function() {

				$("[data-" +opt.switchDataInput+ "='" +switchId+ "']").next("span").addClass(opt.switchInputActive);
			});
		}

	}).trigger("sdi-now");

	/**
	* check di tutti i radiobox
	*/
	$(opt.eCheckBoxAll).on("change ecba-now", function() {

		var $this = $(this);
		var checkboxes;

		if ($this.is(":visible")) {

			if (typeof $this.data("checkall-limit-to") !== "undefined") {

				checkboxes = $this.closest($("form [data-checkall-wrapper=\"" +$this.data("checkall-limit-to")+ "\"]")).find(":checkbox");

			} else {

				checkboxes = $this.closest("form").find(":checkbox");
			}

			if ($this.is(":checked")) {

				checkboxes.prop("checked", true);

			} else {

				checkboxes.prop("checked", false);
			}
		}

	}).trigger("ecba-now");

	/**
	* disabilito il checkbox all se almeno un checkbox viene disabilitato
	*/
	$(opt.eCheckBoxAllDisable).change(function() {

		var $this = $(this);
		var checkboxAll;
		var $thisMainCheckbox = $this.closest("form [data-checkall-wrapper]").find(opt.eCheckBoxAll);
		var $thisLimitBlock = $thisMainCheckbox.data("checkall-limit-to");

		if (typeof $thisMainCheckbox.data("checkall-limit-to") !== "undefined") {

			checkboxAll = $thisMainCheckbox.closest($("form [data-checkall-wrapper=\"" +$thisLimitBlock+ "\"]")).find(opt.eCheckBoxAll);

		} else {

			checkboxAll = $this.closest("form").find(opt.eCheckBoxAll);
		}

		if ($this.not(":checked") && checkboxAll.is(":checked")) {

			checkboxAll.prop("checked", false);
		}
	});

});
