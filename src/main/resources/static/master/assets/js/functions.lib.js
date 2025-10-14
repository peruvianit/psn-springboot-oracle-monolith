/*
 * @preserve
 * Filename: functions.lib.js
 *
 * Created: 06/10/2016 (09:58:58)
 * Created by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
 *
 * Last update: 06/10/2016 (09:58:58)
 * Updated by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
 *
 * Copyleft: 2020 - Tutti i diritti riservati
 *
 * Comments: questo file contiene, in maggioranza, le funzioni di gestione layout del template generico. vengono incluse anche alcune funzioni generiche utili a tutti i siti (ad esempio funzioni di log o popup)
 */

/* global BootstrapDialog */

"use strict";

var defParams = {
	"layoutMenuVersion"		: "v",
	"isMultiLanguage"		: "y",
	"showBackTop"			: "y",
	"closeMenuOnclick"		: "y",
	"validateFormByClass" 	: "n",
	"dropdownAnimation"		: "y",
	"amountScrolled"		: 500,
	"eBackTop"				: "#back-to-top",
	"eMainContainer"		: "#main-container",
	"eMainPageContent"		: "#main-page-content",
	"eHeader"				: "#header",
	"eFooter"				: "#footer",
	"eOverLay"				: "#overlay",
	"eNavMobile"			: "#nav-mobile",
	"eMenuH"				: "#menu-h",
	"eMenuContainerH"		: "#main-menu-container-h",
	"eFixedHead"			: "#fixed-bar",
	"eFixedBarWrapper"		: "#fixed-bar-wrapper",
	"eTopNavWrapper"		: "#top-nav-wrapper",
	"eHeaderWrapper"		: "#header-wrapper",
	"eSidebarContainer"		: "#sidebar-container",
	"eSidebarMenu"			: "#sidebar-menu",
	"eSidebar"				: "#sidebar",
	"eJsTableSaw"			: "#js-table-saw",
	"eUploadTitle"			: "#uploaded-title",
	"eLoader"				: "#loader",
	"eWinBackCont"			: "#winback",
	"eJsActionConfirm"		: ".js-action-confirm",
	"eSidebarMenuClass"		: ".side-menu",
	"eTableSaw"				: ".tablesaw",
	"eDateIt"				: ".dateit",
	"eRemoveOnSubmit"		: ".js-remove-onsubmit",
	"eJsSubmitOutForm"		: ".js-submit-out-form",
	"eSortableBtn"			: ".tablesaw-sortable-btn",
	"eSortableSelect"		: ".tablesaw-btn-select",
	"eJsMenu"				: ".jsmenu",
	"eInputBgFrame"			: ".inputbg-frame",
	"ePrintLink"			: ".printlink",
	"eLinkExternal"			: ".external",
	"eTareaCountChars"		: ".count-chars",
	"eCharsLeft"			: ".chars-left",
	"eSelectDynamic"		: ".sel-dynamic",
	"eSelectHasChild"		: ".sel-haschild",
	"eGroupFormCont"		: ".form-group",
	"eReadOnly"				: ".input666",
	"ePageContent"			: ".page-content",
	"ePageHeader"			: ".page-header",
	"eLangLongList"			: ".lang-longlist",
	"eOpenThis"				: ".openthis",
	"eSelectPicker"			: ".selectpicker",
	"eDropDown"				: ".dropdown",
	"eFixedMenuHWrapper" 	: ".fixed-menu-h-wrapper",
	"eCollapse"				: ".collapse",
	"eCheckBoxAll"			: ".checkbox-all",
	"eCheckBoxAllDisable" 	: ".checkbox-all-disable",
	"eFixElement"			: ".fixit",
	"eCloseit"				: ".closeit",
	"ePassShow"				: ".show-password",
	"eShowPolicy"			: ".show-policy",
	"eOnlyUserMenu"			: ".onlyuser-menu",
	"eDropDownMenu"			: ".dropdown-menu",
	"eIsChainselHide"		: ".is-chainsel-hide",
	"eMultiLevelMenu"		: ".multilevel-menu",
	"eLevelMenu2"			: ".menu-level-2",
	"eTopLinksWrapper"		: ".desktop-usermenu-wrapper",
	"eSwitchIcon"			: ".switchicon",
	"eMultiLineEllipsis"	: ".multi-line-ellipsis",
	"eSwitchInputToggle"	: ".switch-input-toggle",
	"eSwitchDataOnlyDisab"	: ".switch-input-onlydisable",
	"eModal"				: ".modal",
	"eModalHeader"			: ".modal-header",
	"eModalBody"			: ".modal-body",
	"eModalDownload"		: ".modal-download",
	"eTruncate"				: ".truncate",
	"eSameHeight"			: ".same-height",
	"eSecondsRedir"			: ".seconds-redir",
	"eLeaveDisabled"		: ".leave-disabled",
	"ePopover"				: ".popover",
	"eChainSelGroup"		: "chainsel-group",
	"eIsChildData"			: "childid",
	"isIeOld"				: "is-ieold",
	"multiLevelMenuIn"		: "in",
	"menuActiveClass"		: "active",
	"lastChild"				: "last-child",
	"switchDataInput"		: "switch-input",
	"switchInputActive"		: "switch-input-active",
	"disableOnLoad"			: "disable-onload",
	"cloneMenuDataSource"	: "desktop-usermenu",
	"cloneMenuDataTarget"	: "fixed-bar-wrapper",
	"cloneMenuDataTarget2"	: "mobile-usermenu-h",
	"cloneMenuDataTarget3"	: "mobile-usermenu-v",
	"darkOverlay"			: "dark-overlay",
	"hidePolicyOnKeyDown"	: "hide-policy-on-keydown",
	"hideBtnOnly"			: "js-hide-btn-only",
	"switchIconEven"		: "switchicon-even",
	"switchIconOdd"			: "switchicon-odd",
	"selectDynamic"			: "sel-dynamic",
	"selectHasChild"		: "sel-haschild",
	"limitCharsEllipsis"	: 0,
	"funcTimeOut"			: 20000,
	"dialogCloseTime"		: 3000,
	"isDebug"				: false
};

// nel caso si volesse sovrascrivere qualche parametro senza modificare questo file ecco la sintassi da usare in pagina nell'head
/* --------------------------------------- /*
<script>
	var opt = $.extend(defParams, {
		'layoutMenuVersion': "h"
	});
</script>
/* ---------------------------------------- */

var opt = $.extend(true, {}, defParams);

(function($) {

	/**
	* $.fn.toLog
	*
	* funzione log
	*/
	$.fn.toLog = function(msg, type) {

		var thisType = typeof type !== "undefined" && type !== "" ? true : false;

		if (opt.isDebug) {
			thisType ? alert(msg) : window.console && window.console.log ? window.console.log(msg) : null;
		}
	};

	/**
	* $.fn.isMobile
	*
	* funzione "approssimativa" per vedere la piattaforma
	*/
	$.fn.isMobile = function() {

		var isMobile = false;

		if ((/iPhone|iPod|iPad|Android|BlackBerry|webOS/i).test(navigator.userAgent)) {

			isMobile = true;
		}

		return isMobile;
	};

	/**
	*  $.fn.checkLocalStorage
	*
	* localstorage: controllo supporto
	*/
	$.fn.checkLocalStorage = function(showalert) {

		var showAlert = typeof showalert !== "undefined" ? true : false;

		if (typeof Storage === "undefined") {

			if (showAlert) {

				$.fn.showDialog({
					"title": "Attenzione",
					"bodyMsg": "Funzione localstorage non supportata",
					"typecast": "info",
					"type": "info"
				});
			}

			$.fn.toLog("funzione localstorage non supportata");

			return false;
		}
	};

	/**
	* $.fn.managePopover
	*
	* gestisce la visibilità dei popover e il loro orientamento
	*/
	$.fn.showPopover = function(config, selector) {

		var thisConfig = typeof config !== "undefined" ? config : "";
		var thisSelector = typeof selector !== "undefined" ? selector : "popover";

		// controllo se il parametro whiteListTag è stato passato
		if (thisConfig.whiteListTag) {

			// richiamo il metodo nativo dei tooltip/popover per la whitelist
			var myDefaultWhiteList = $.fn.tooltip.Constructor.DEFAULTS.whiteList;
			// tag da aggiungere alla whitelist
			var whiteListTag = thisConfig.whiteListTag;
			// chiavi della whitelist, ovvero i tag html a cui aggiungere gli attributi per renderli visibili
			var tagKeys = Object.keys(whiteListTag);

			// ciclo le chiavi per aggiungere alla whitelist i nuovi tag con i relativi attributi
			$(tagKeys).each(function(index) {

				myDefaultWhiteList[tagKeys[index]] = whiteListTag[tagKeys[index]];
			});
		}

		$("[data-toggle='" +thisSelector+ "']").popover(thisConfig);

		if (typeof thisConfig.btnclose !== "undefined" && thisConfig.btnclose) {

			$("[data-toggle='" +thisSelector+ "']").on("shown.bs.popover", function() {

				$(opt.eCloseit).on("click", function() {

					$(this).closest(opt.ePopover).popover("hide");

				});
			});
		}

		// all'apertura del popover se presente viene chiamata la funzione passata come parametro
		$("[data-toggle='" +thisSelector+ "']").on("shown.bs.popover", function() {

			if (typeof thisConfig.callbackShown === "function") {

				thisConfig.callbackShown.call(this);
			}
		});

		// per un bug sulla chiusura manuale dei popover uso questo snippet
		$("body").on("hidden.bs.popover", function(e) {

			$(e.target).data("bs.popover").inState.click = false;
		});

		// il codice che segue non è più necessario a partire dalla versione 3.4.0 di bootstrap
		//~ $(".js-popover-container").on("hide.bs.popover", function(e) {

			//~ $('[data-toggle="' +selector+ '"]').each(function (k, v) {

				//~ $(v).attr("data-yet-open", "0");
			//~ });
		//~ });

		//~ $('[data-toggle="' +selector+ '"]').on("click", function(e) {

			//~ var $this = $(this);
			//~ var yetOpen = $this.attr("data-yet-open");
			//~ var result = parseInt(yetOpen) + 1;

			//~ if (isNaN(result) === true) {

				//~ $this.attr("data-yet-open", "1");

			//~ } else {

				//~ $this.attr("data-yet-open", result);
			//~ }

			//~ if (result > 1) {

				//~ $this.blur();
			//~ }
		//~ });
	};

	/**
	* $.fn.pageAnchor
	*
	* smoot scrolling per le àncore
	* l'hash speciale serve in quei casi in cui voglio applicare lo scrolling anche all'onload della pagina
	*/
	$.fn.pageAnchor = function(customoptions) {

		var thisParams = {
			"anchorLink": "",
			"anchorChar": "#",
			"offset": 0,
			"callbackFunc": ""
		};

		var $root = $("html,body");
		var thisOpt = $.extend(true, {}, thisParams, customoptions);

		if (thisOpt.anchorLink !== "") {

			// al caricamento controllo se c'è l'hash speciale nell'url
			if (thisOpt.anchorChar !== "#" && window.location.href.indexOf(thisOpt.anchorChar) > -1) {

				var hash = window.location.hash.replace(thisOpt.anchorChar, "#");

				if ($(hash).length) {

					setTimeout(function() {
						$root.animate({"scrollTop": $(hash).offset().top+parseInt(thisOpt.offset)}, "slow");
					}, 300);
				}
			}

			// azione onclick
			$(thisOpt.anchorLink).click(function(e) {

				e.preventDefault();

				var $this = $(this);
				var anchorName = $this.attr("href");
				var title = $this.data("history-title");
				var urlHash;

				if ($(anchorName).length) {

					if (thisOpt.anchorChar !== "#") {

						urlHash = anchorName.replace("#", thisOpt.anchorChar);

					} else {

						urlHash = anchorName;
					}

					$root.animate({"scrollTop": $(anchorName).offset().top+parseInt(thisOpt.offset)}, "slow");

					window.history.pushState("", title, urlHash);
				}
			});

			if (typeof thisOpt.callbackFunc === "function") {

				thisOpt.callbackFunc.call(this);
			}
		}
	};

	/**
	*  $.fn.historyBack
	*
	* usa la history back se presente altrimenti prende la url e leva un livello
	*/
	$.fn.historyBack = function() {

		$(opt.eWinBackCont).click(function() {

			if (document.referrer !== "") {

				history.back();

			} else {

				var baseLoc = location.href.split("?");

				window.location.href = baseLoc[0].substring(0, baseLoc[0].lastIndexOf("/")+1);
			}
		});
	};

	/**
	* $.fn.newTabLinks
	*
	* apre i link su blank target
	*/
	$.fn.newTabLinks = function() {

		$(opt.eLinkExternal).click(function() {

			window.open($(this).attr("href"));

			return false;
		});
	};

	/**
	* $.fn.autoRedirect
	*
	* redirect di pagina con js prendendo i secondi e la url dal link con data-*
	*/
	$.fn.autoRedirect = function() {

		$("a[data-autoredirect]").on("redir-now", function() {

			var $this = $(this);
			var time = $this.data("autoredirect");
			//~ var href = $this.attr("href");

			$(opt.eSecondsRedir).html(time);

			setTimeout(function() {
				window.location = $this.attr("href");
			}, time*1000);

		}).trigger("redir-now");
	};

	/**
	* $.fn.urlParam
	*
	* estrae i parametri in querystring
	*/
	$.fn.urlParam = function(param) {

		var res = new RegExp("[\?&]" + param + "=([^&#]*)").exec(window.location.href);

		if (res === null) {
			return null;

		}

		return res[1] || 0;
	};

	/**
	* $.fn.checkHamburger
	*
	* controlla display del menu hamburger (non la visibilità)
	*/
	$.fn.hamburgerStatus = function() {

		// hamburgerStatus = ($(opt.eNavMobile).is(":visible")) ? true : false;
		// workaround per colpa di explorer 8. muori
		var hamburgerStatus = $(opt.eNavMobile).css("display") !== "none" ? true : false;

		$("body").data("hamburgerStatus", hamburgerStatus);
	};

	/**
	* $.fn.toggleSwitchIcon
	*
	* dato un selettore fa lo switch delle icone dichiarate come attributo data-*
	*/
	$.fn.toggleSwitchIcon = function(item) {

		if (typeof item !== "undefined") {

			$(item).toggleClass($(item).data(opt.switchIconEven)).toggleClass($(item).data(opt.switchIconOdd));
		}
	};

	/**
	* $.fn.slideAnimantion
	*
	* dato un selettore fa lo switch delle icone dichiarate come attributo data-*
	*/
	$.fn.slideAnimantion = function(item, e) {

		// animazione
		if (opt.dropdownAnimation === "y" && e.namespace === "bs.dropdown") {

			if (e.type === "show") {

				item.find(opt.eDropDownMenu).stop(true, true).slideDown();
				//~ item.find(opt.eDropDownMenu).first().stop(true, true).slideDown();
			}

			if (e.type === "hide") {

				item.find(opt.eDropDownMenu).stop(true, true).slideUp();
				//~ item.find(opt.eDropDownMenu).first().stop(true, true).slideUp();
			}
		}
	};

	/**
	* $.fn.manageMenu
	*
	* gestice il menu orizzontale quando si ridimensiona o si carica la pagina
	*/
	$.fn.manageMenuH = function() {

		var self = {};
		var $body = $("body");

		$(opt.eMenuH).scrollTop(0);

		self.open = function() {

			$(opt.eMenuContainerH).css("min-height", $(opt.eMainPageContent).height());
			$(opt.eMenuContainerH).css("display", "block");
			$body.css("overflow", "hidden");

			$.fn.toLog("aperto");
		};

		self.close = function() {

			$(opt.eMenuContainerH).css("min-height", "auto");
			$body.css("overflow", "auto");

			// se mi trovo in modalità mobile
			if ($("body").data("hamburgerStatus")) {

				$(opt.eMenuContainerH).css("display", "none");

				$.fn.toLog("menu mobile chiuso onclick");

			} else {

				$(opt.eMenuContainerH).css("display", "block");

				$.fn.toLog("menu mobile aperto per desktop");
			}
		};

		return self;
	};

	/**
	* $.fn.manageMenu
	*
	* gestice il menu verticale quando si ridimensiona o si carica la pagina
	*/
	$.fn.manageMenuV = function() {

		var self = {};
		var thisHeight;

		self.open = function() {

			$(window).scrollTop(0);
			$(opt.eSidebarContainer).css("display", "block");
			// nascondo il footer per evitare conflitti
			$(opt.eFooter).addClass("hidden");

			// inserisco il div di aggancio per l'overlay
			if ($(opt.eOverLay).length === 0) {

				$(opt.eMainContainer).before($.parseHTML("<div id=\"overlay\"></div>"));
			}

			$(opt.eOverLay).addClass(opt.darkOverlay);

			// regolo l'altezza della sidebar e dell'overlay confrontando il viewport
			if ($(opt.eMainPageContent).innerHeight() > $("body").data("sizeViewport")) {

				thisHeight = $(opt.eMainPageContent).innerHeight();

			} else {

				thisHeight = $("body").data("sizeViewport");
			}

			$(opt.eOverLay).css("min-height", thisHeight);
			$(opt.eSidebarContainer).css("min-height", thisHeight);

			$.fn.toLog("aperto");
		};

		self.close = function() {

			// se mi trovo in modalità mobile
			if ($("body").data("hamburgerStatus")) {

				$(opt.eSidebarContainer).css("display", "none");

				$.fn.toLog("menu mobile chiuso onclick");

			} else {

				$(opt.eSidebarContainer).css("display", "block");

				$.fn.toLog("menu mobile aperto per desktop");
			}

			$(opt.eOverLay).removeClass("dark-overlay");
			$(opt.eFooter).removeClass("hidden");
		};

		return self;
	};

	/**
	* $.fn.manageHamburger
	*
	* gestisce lo status del bottone hamburger
	*/
	$.fn.manageHamburger = function() {

		var manageMenuWrap;
		var cloneMenuTarget;

		// wrappo la funzione di gestione menu a seconda del tipo layout scelto
		if (opt.layoutMenuVersion === "h" || opt.layoutMenuVersion === "u") {
			manageMenuWrap = new $.fn.manageMenuH();
			cloneMenuTarget = opt.cloneMenuDataTarget2;

		} else {

			manageMenuWrap = new $.fn.manageMenuV();
			cloneMenuTarget = opt.cloneMenuDataTarget3;
		}

		// il controllo mi permette di capire se ho cliccato o meno sull'hamburger
		if ($("body").data("hamburgerStatus") && $(this).length) {

			$(opt.eNavMobile).toggleClass("open");
		}

		switch ($(opt.eNavMobile).hasClass("open")) {

			// se hamburger è aperto
			case true:

				// se mi trovo in modalità mobile chiamo la funzione "open" di managemenu
				if ($("body").data("hamburgerStatus")) {

					if (opt.closeMenuOnclick === "y") {

						$("body").one("click", opt.eOverLay, function() {

							$.fn.manageHamburger.call($(this));
						});
					}

					manageMenuWrap.open();

					// clono il menu utente
					$.fn.domCloneIt({
						"cloneSource": opt.cloneMenuDataSource,
						"cloneDest": cloneMenuTarget,
						"cloneContainer": "n",
						"callbackFunc": function() {

							// nel caso di menu solo utente c'è un problema con lo scroll del menu stesso quando la pagina è corta
							// imposto un margine aggiuntivo solo nel caso in cuio il menu sia più lungo della pagina
							if (opt.layoutMenuVersion === "u") {

								if ($(opt.eOnlyUserMenu+ " " +opt.eDropDownMenu).height() >= $(window).height() -150) {

									$(opt.eOnlyUserMenu+ " " +opt.eDropDownMenu).css("margin-bottom", $(opt.eOnlyUserMenu+ " " +opt.eDropDownMenu).height());

								} else {

									$(opt.eOnlyUserMenu+ " " +opt.eDropDownMenu).css("margin-bottom", "0");
								}
							}

							// callback per aprire automaticamente il menu utente nel caso non ci siano menu
							var thisTarget = $("[data-clone-target='" +cloneMenuTarget+ "']");

							if (thisTarget.data("clone-status") === "open") {

								// aggiungo settimeout per rendere l'evento asincrono per problemi su dropdown hidden
								setTimeout(function() {

									thisTarget.addClass("open");

									// aggiunto controllo per animation: la classe "open" aggiunta con timeout crea un errore se le animazioni sono attive
									if (opt.dropdownAnimation === "y") {

										thisTarget.find(opt.eDropDownMenu).first().stop(true, true).slideDown();

									}
								});
							}
						}
					});

				// se ho ingrandito la finestra ripristino il tutto
				} else {

					$(opt.eNavMobile).removeClass("open");

					// funzione ricorsiva
					$.fn.manageHamburger();

					$.fn.toLog("menu mobile chiuso auto");
				}
			break;

			// se hamburger è chiuso
			case false:
				manageMenuWrap.close();
			break;

			// default
			default:
				manageMenuWrap.close();
			break;
		}
	};

	/**
	* $.fn.closeUserMenu
	*
	* controlla e chiude il menu dropdown passato come selettore
	*/
	$.fn.closeDropDown = function(selector) {

		if ($(selector).hasClass("open")) {

			$(selector).removeClass("open");

			if (opt.dropdownAnimation === "y") {

				$(selector).find($(opt.eDropDown+ " " +opt.eDropDownMenu)).first().hide();
			}

			$.fn.toLog("chiudo menu utente");
		}
	};

	/**
	* $.fn.checkLayout
	*
	* controlla il tipo di layout e nasconde/mostra alcuni elementi. posiziona il footer in base alla lunghezza
	* del contenuto principale. si poteva fare con css ma nel layout mobile c'era un problema con la proprietà fixed dell'header
	* gestisce la lunghezza della sidebar
	*/
	$.fn.checkLayout = function() {

		$.fn.hamburgerStatus();

		var sizeHead = $(opt.ePageHeader).innerHeight();
		var sizeFoot = $(opt.eFooter).innerHeight();
		var sizeTotal = $(window).height() - (sizeHead + sizeFoot);
		var sizeViewport = $(window).height() - sizeHead;

		$("body").data("sizeViewport", sizeViewport);

		switch (opt.layoutMenuVersion) {

			case "v":
				$(opt.eMenuContainerH).css("display", "none");
				$(opt.eNavMobile).css("visibility", "visible");
			break;

			case "h":
			default:
			case "u":
				$(opt.eSidebarContainer).css("display", "none");
				$(opt.eNavMobile).css("visibility", "visible");
			break;
		}

		//~ $(opt.ePageContent).css("min-height", $(opt.eSidebarContainer).innerHeight());

		// se la pagina non ha contenuto scrollabile posiziono il footer in fondo
		if ($("body").innerHeight() <= $(window).height()) {

			$(opt.ePageContent).css("min-height", sizeTotal);

			//~ $(opt.ePageContent).css("min-height", sizeTotal-(sizeHead-sizeFoot));
			//~ $(opt.eSidebarMenu).css("min-height", sizeTotal-(sizeHead-sizeFoot));
		}

		// in versione desktop determino lunghezza sidebar e contenuto (solo per ie8)
		if ($("body").data("hamburgerStatus") === false && $("html").hasClass("is-ie8") === true) {

			$(opt.ePageContent).css("height", "100%");
		}

		//~ if ($("body").data("hamburgerStatus") === false && $("html").hasClass("is-ie8") === false) {

			//~ $.fn.resizeSidebar();

		//~ } else {

			//~ $(opt.ePageContent).css("height", "100%");
		//~ }
	};

	/**
	* $.fn.resizeSidebar
	*
	* controlla la lunghezza della parte centrale della pagina ed eventualmente fa il resize della sidebar
	*/
	$.fn.resizeSidebar = function() {

		setTimeout(function() {

			if ($(opt.eSidebarContainer).height()-80 >= $(opt.ePageContent).height()) {

				$(opt.ePageContent).css("min-height", $(opt.eSidebarContainer).height());

			} else {

				//~ $(opt.eSidebarContainer).css("min-height", $(opt.ePageContent).innerHeight());
				//~ $(opt.eSidebar).css("min-height", $(opt.ePageContent).innerHeight());

				$(opt.eSidebarContainer).css("min-height", $(opt.ePageContent).height()+80);
				$(opt.ePageContent).css("min-height", $(opt.eSidebarContainer).height());
			}
		}, 150);
	};

	/**
	* $.fn.domCloneIt
	*
	* clona un oggetto e lo copia in altra posizione. vengono utilizzati gli attributi data-* per una maggiore flessibilità
	*/
	$.fn.domCloneIt = function(customoptions) {

		var thisParams = {
			"cloneSource": "",
			"cloneDest": "",
			"cloneType": "appendTo",
			"cloneContainer": "y",
			"callOnce": "",
			"callprevFunc": "",
			"callbackFunc": ""
		};

		var thisOpt = $.extend(true, {}, thisParams, customoptions);
		var thisSource;

		if (thisOpt.cloneSource !== "" && thisOpt.cloneDest !== "") {

			if (typeof thisOpt.callprevFunc === "function") {

				thisOpt.callprevFunc.call(this);
			}

			// semaforo (notare che metto insieme cloneSource e cloneDest per creare un nome univoco)
			if (typeof $("body").data(thisOpt.cloneSource+ "_" +thisOpt.cloneDest) === "undefined") {

				// controllo se copiare tutto l'elemento o solo il contenuto
				if (thisOpt.cloneContainer === "n") {
					thisSource = $("[data-clone-source=" +thisOpt.cloneSource+ "]:first").contents();

				} else {

					thisSource = $("[data-clone-source=" +thisOpt.cloneSource+ "]:first");
				}

				var thisTarget = $("[data-clone-target=" +thisOpt.cloneDest+ "]");

				// clono e rimuovo l'attributo "data" dall'oggetto altrimenti viene copiato N volte
				thisSource.clone().removeAttr("data-clone-source")[thisOpt.cloneType](thisTarget).promise().done(function() {

					// dopo la prima copia attivo il semaforo
					$("body").data(thisOpt.cloneSource+ "_" +thisOpt.cloneDest, true);

					$.fn.toLog(thisOpt.cloneSource+ ": oggetto clonato");
				});

				if (typeof thisOpt.callOnce === "function") {

					thisOpt.callOnce.call(this);
				}
			}

			if (typeof thisOpt.callbackFunc === "function") {

				thisOpt.callbackFunc.call(this);
			}
		}
	};

	/**
	* $.fn.fixmenuShowHide
	*
	* mostra/nasconde la fixbar a seconda delle dimensioni della finestra e della posizione della scrollbar
	*/
	$.fn.fixbarShowHide = function() {

		$(window).on("scroll resize load", function() {

			if ($("body").data("hamburgerStatus") === false) {

				if ($(window).scrollTop() >= $(opt.eFixedHead).data("offset")) {

					// workaround di $(opt.eFixedHead).is(":visible") === false per colpa di explorer 8. muori
					if ($(opt.eFixedHead).css("display") === "none") {

						// chiudo il menu utente se aperto
						$.fn.closeDropDown(opt.eTopNavWrapper+ " " +opt.eTopLinksWrapper);

						$.fn.domCloneIt({
							"cloneSource": opt.cloneMenuDataSource,
							"cloneDest": opt.cloneMenuDataTarget,
							"callbackFunc": function() {

								// callback da chiamare solo se è attiva l'animazione sui menu
								if (opt.dropdownAnimation === "y") {

									// imposto un semaforo altrimenti l'animazione non funziona
									if (typeof $(opt.eFixedHead).data(opt.cloneMenuDataSource+ "_" +opt.cloneMenuDataTarget) === "undefined") {

										$(opt.eFixedBarWrapper+ " " +opt.eDropDown).on("show.bs.dropdown hide.bs.dropdown", function(e) {

											$.fn.slideAnimantion($(this), e);

										}).promise().done(function() {

											$(opt.eFixedHead).data(opt.cloneMenuDataSource+ "_" +opt.cloneMenuDataTarget, true);
										});
									}
								}
							}
						});

						$(opt.eFixedHead).fadeIn(100, function() {

							$(opt.eFixedHead).show();
						});

						$.fn.toLog("menu mobile non visibile. attivo la fixbar");
					}

				// workaround di $(opt.eFixedHead).is(":visible") === true per colpa di explorer 8. muori
				} else if ($(opt.eFixedHead).css("display") !== "none") {

					$(opt.eFixedHead).hide().promise().done(function() {

						// chiudo il menu fixedbar se aperto
						$.fn.closeDropDown(opt.eFixedBarWrapper+ " " +opt.eTopLinksWrapper);
					});
				}

			} else {

				$(opt.eFixedHead).hide();

				$(window).off("scroll", opt.eFixedHead);

				$.fn.toLog("menu mobile visibile");
			}
		});
	};

	/**
	*  $.fn.showDialog
	*
	* mostra un div al centro del viewport con un messaggio
	*/
	$.fn.showDialog = function(customoptions) {

		var thisParams = {
			"typecast": "show",
			"type": "info",
			"title": "",
			"bodyMsg": "",
			"buttonLabel": "Chiudi",
			"btnCancelLabel": "Annulla",
			"btnOKLabel": "Conferma",
			"cssClass": "",
			"autoClose": false,
			"draggable": false,
			"closable": true,
			"customZindex": 1102,
			"showCallback": "",
			"shownCallback": "",
			"hideCallback":"",
			"hiddenCallback": "",
			"callbackFunc": ""
		};

		var thisOpt = $.extend(true, {}, thisParams, customoptions);

		var modalTypes = {
			"info": BootstrapDialog.TYPE_INFO,
			"primary": BootstrapDialog.TYPE_PRIMARY,
			"success": BootstrapDialog.TYPE_SUCCESS,
			"warning": BootstrapDialog.TYPE_WARNING,
			"danger": BootstrapDialog.TYPE_DANGER,
			"normal": BootstrapDialog.TYPE_DEFAULT
		};

		switch (thisOpt.typecast) {

			case "alert":
			case "info":

				BootstrapDialog.alert({
					"title": thisOpt.title,
					"message": thisOpt.bodyMsg,
					"type": modalTypes[thisOpt.type],
					"cssClass": thisOpt.cssClass,
					"closable": thisOpt.closable,
					"draggable": thisOpt.draggable,
					"buttonLabel": thisOpt.buttonLabel,
					"callback": function(result) {

						if (typeof thisOpt.callbackFunc === "function") {

							thisOpt.callbackFunc.call(this, result);
						}
					}
				});

			break;

			case "confirm":

				// work around perchè confirm non gestiste cssClass come parametro
				BootstrapDialog.configDefaultOptions({
					"cssClass": thisOpt.cssClass
				});

				BootstrapDialog.confirm({
					"title": thisOpt.title,
					"message": thisOpt.bodyMsg,
					"type": modalTypes[thisOpt.type],
					"closable": thisOpt.closable,
					"draggable": thisOpt.draggable,
					"btnCancelLabel": thisOpt.btnCancelLabel,
					"btnOKLabel": thisOpt.btnOKLabel,
					"callback": function(result) {

						if (typeof thisOpt.callbackFunc === "function") {

							thisOpt.callbackFunc.call(this, result);
						}
					}
				});

			break;

			case "show":
			default:

				BootstrapDialog.show({
					"title": thisOpt.title,
					"message": thisOpt.bodyMsg,
					"type": modalTypes[thisOpt.type],
					"cssClass": thisOpt.cssClass,
					"closable": thisOpt.closable,
					"draggable": thisOpt.draggable,
					"buttonLabel": thisOpt.buttonLabel,
					"onshow": function(dialogRef) {

						if (thisOpt.autoClose === true) {

							setTimeout(function() {
								dialogRef.close();
							}, opt.dialogCloseTime);
						}

						if (typeof thisOpt.showCallback === "function") {

							thisOpt.showCallback.call(this, dialogRef);
						}
					},
					"onshown": function(dialogRef) {

						if (thisOpt.customZindex !== "") {

							$(dialogRef)[0].$modal.css("z-index", thisOpt.customZindex);
						}

						if (typeof thisOpt.shownCallback === "function") {

							thisOpt.shownCallback.call(this, dialogRef);
						}
					},
					"onhide": function(dialogRef) {

						if (typeof thisOpt.hideCallback === "function") {

							thisOpt.hideCallback.call(this, dialogRef);
						}
					},
					"onhidden": function(dialogRef) {

						if (typeof thisOpt.hiddenCallback === "function") {

							thisOpt.hiddenCallback.call(this, dialogRef);
						}
					}
				});

			break;
		}
	};

	/**
	*  $.fn.confirmActionLink
	*
	* modale di conferma per link
	*/
	$.fn.confirmActionLink = function() {

		$(opt.eJsActionConfirm).on("click", function(e) {

			var $this = $(this);
			var modalTitle = typeof $this.data("modal-title") !== "undefined" ? $this.data("modal-title") : "";
			var bodyMsg = typeof($this.data("modal-bodymsg")) !== "undefined" ? $this.data("modal-bodymsg") : "";
			var modalType = typeof $this.data("modal-type") !== "undefined" ? $this.data("modal-type") : "info";

			e.preventDefault();

			$.fn.showDialog({
				"typecast": "confirm",
				"type": modalType,
				"title": modalTitle,
				"bodyMsg": bodyMsg,
				"callbackFunc": function(result){
					if (result) {
						window.location.href = $this.attr("href");
					}
				}
			});
		});
	};

	/**
	*  $.fn.autocloseDialog
	*
	* chiude una modale dopo TOT tempo partendo da un dato id modale
	*/
	$.fn.autoCloseDialog = function(customoptions) {

		var thisParams = {
			"idModal": "",
			"timeOut": 1000,
			"callbackFunc": ""
		};

		var thisOpt = $.extend(true, {}, thisParams, customoptions);

		if (thisOpt.idModal !== "") {

			setTimeout(function() {

				$(thisOpt.idModal).modal("hide");

			}, thisOpt.timeOut);
		}
	};

	/**
	* $.fn.toggleLoader
	*
	* mostra/nasconda il loader a seconda della chiamata
	*/
	$.fn.toggleLoader = function(state) {

		var thisState = typeof state === "undefined" ? "show" : state;

		switch (thisState) {
			case "show":
				$(opt.eLoader).removeClass("invisible");
			break;
			case "hide":
				$(opt.eLoader).addClass("invisible");
			break;
			default:
				$(opt.eLoader).addClass("invisible");
			break;
		}
	};

    /**
	* $.fn.datePicker
	*
	* wrapping della funzione datepicker. necessaria da utilizzare nei casi in cui si aggiungano elementi al dom e si voglia ristanziarla
	*/
	$.fn.datePicker = function(customoptions) {

		var thisParams = {
			"format": "dd/mm/yyyy",
			"language": "it",
			"clearBtn": true,
			"autoclose": true,
			"disableTouchKeyboard": true
		};

		var thisOpt = thisParams;
		var thisSelector = opt.eDateIt;

		if (typeof customoptions !== "undefined") {

            thisOpt = $.extend(true, {}, thisParams, customoptions);
        }

        if (typeof thisOpt.selector !== "undefined") {

            thisSelector = thisOpt.selector;
        }

		$(thisSelector).datepicker(thisOpt).on("show", function() {

			var $this = $(this);

			$this.keydown(function () {
				return false;
			});

			$this.on("cut copy paste", function (e) {
				e.preventDefault();
			});
		});
	};

	/**
	* $.fn.datePickerDestroy
	*
	* funzione per distruggere tutti i datepicker in pagina. al momento non c'è nessun parametro ma viene usata la classe di default
	*/
	$.fn.datePickerDestroy = function() {

		$(opt.eDateIt).datepicker("destroy");
	};

	/**
	* $.fn.ulToSelect
	*
	* trasforma una lista ul in una select che ha come valore l'href e come selected la classe active della lista
	*/
	$.fn.ulToSelect = function(ulclass) {

		if ($(ulclass).css("display") === "none") {

			var selClass = "select-" +ulclass.slice(1);

			if ($("." +selClass).length === 0) {

				var $select = $("<select />").addClass(selClass);

				// con questa modalità di inserimento tocco il DOM una sola volta alla fine delle operazioni.
				// è più veloce anche la concatenazione
				var output = [];

				$.each($(ulclass).children("li"), function() {

					var selected = $(this).children("a").hasClass("active") ? "selected=\"selected\"" : "";

					output.push("<option data-link-url=\"" +$(this).find("a").attr("href")+ "\" " +selected+ ">" +$(this).text()+ "</option>");
				});

				$($select).html(output.join("")).insertAfter($(ulclass));

				$.fn.selectLocation("." +selClass, "lang");
			}
		}
	};

	/**
	* $.fn.selectLocation
	*
	* cambio di url su select
	* versione ammodernata e più flessibile che sfrutta i data-* e copre tutti i casi:
	* <option value="2019" data-link-url="page.php?param=1" >2019</option>
	* <option value="2018" data-link-url="page.php">2018</option>
	* <option data-link-url="page.php">2017</option>
	*/
	$.fn.selectLocation = function(elem, selparam) {

		var thisSelparam = typeof selparam === "undefined" ? "" : selparam;
		var whichUrl;

		$(elem).change(function() {

			var $this = $(this);
			var thisVal = $("option:selected", $this).attr("value");
			var linkUrl = $("option:selected", $this).data("link-url");
			var params = {};

			// se è definito un url target prendo quello
			if (typeof linkUrl !== "undefined") {

				whichUrl = linkUrl;

			// altrimenti prendo l'url della pagina
			} else {

				whichUrl = window.location.href;
			}

			// se il value della option è vuoto faccio subito una redirect senza controlli
			if (typeof thisVal === "undefined") {

				window.location.href = whichUrl;

				return false;

			// altrimenti controllo i parametri in qstring
			}

			// controllo eventuali parametri presenti nell'url scelto
			whichUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
				if (key !== thisSelparam) {
					params[key] = value;
				}
			});

			// predispongo il separatore se ci sono parametri
			var separator 	= whichUrl.indexOf("?") > 0 && Object.keys(params).length > 0 ? "&" : "";
			// prendo l'url finale senza parametri in query string
			var finalLoc 	= whichUrl.split("?");
			// creo un array di eventuali parametri già presenti
			var qString 	= $.param(params);
			var valueParam;

			// vedo se è stato definito un parametro custom
			if (thisSelparam !== "") {

				valueParam = thisSelparam+ "=" +thisVal;

			// altrimenti prendo solo il valore della option
			} else {

				valueParam = thisVal;
			}

			window.location.href = finalLoc[0]+ "?" +qString+separator+valueParam;

			return false;

		});
	};

	/**
	* $.fn.linkBackTop
	*
	* link torna su
	*/
	$.fn.linkBackTop = function() {

		$(window).scroll(function() {

			if ($(window).scrollTop() > opt.amountScrolled) {
				$(opt.eBackTop).fadeIn("slow");
				$(opt.eBackTop).css("bottom", "54px");
			} else {
				$(opt.eBackTop).fadeOut("slow");
			}
		});

		$(opt.eBackTop).click(function() {
			$("html, body").animate({"scrollTop": 0}, 700);

			return false;
		});
	};

	/**
	* $.fn.errorBoxCallback
	*
	* utilizzo questa callback per fare il resize della sidebar
	*/
	$.fn.errorBoxCallback = function() {

		if (opt.layoutMenuVersion === "v") {

			$.fn.resizeSidebar();
		}
	};

})(jQuery);

/**
* funzioni al document ready
*/
$(document).ready(function() {

	// controlla il tipo di layout
	$.fn.checkLayout();

	// visibilità bar fix
	$.fn.fixbarShowHide();

	// trasformo una lista ul in select
	if (opt.isMultiLanguage === "y") {

		$.fn.ulToSelect(opt.eLangLongList);
	}

	// mostro il bottone backtotop
	if (opt.showBackTop === "y") {

		$.fn.linkBackTop();
	}

	// controllo tipo layout. se senza menu non eseguo alcuni controlli
	if (opt.layoutMenuVersion !== "n") {

		/**
		* status su hamburger
		*/
		$(opt.eNavMobile).click(function() {

			$.fn.manageHamburger.call($(this));
		});

		/**
		* aggiungo la classe per aprire in automatico il menu
		* la variante con querySelectorAll non è pienamente compatibile con tutti i browser
		*/
		$(opt.eSidebarMenu+ " " +opt.eOpenThis+ "," +opt.eSidebarMenuClass+ " " +opt.eOpenThis).each(function() {

			// addback comprendo anche il genitore di parents
			$(this).parents(opt.eMultiLevelMenu).addBack().addClass(opt.multiLevelMenuIn);

			var thisItem = $(this).parents().children("a").find(opt.eSwitchIcon);

			$.fn.toggleSwitchIcon(thisItem);

			$(opt.ePageContent).css("min-height", $(opt.eSidebarContainer).innerHeight());
		});

		/**
		* chiudo tutti i figli se chiusa la voce padre
		*/
		$("[data-toggle='collapse']").click(function(e) {

			var thisLink = $(this);

			e.preventDefault();

			thisLink.parent().children().find(".multilevel-menu").collapse("hide");
		});

		/**
		* stampa bottone
		*/
		$(opt.ePrintLink).click(function(e) {
			e.preventDefault();
			window.print();
		});

		/**
		* cambio icona su dropdown e collapse e attivo o meno effetto slide
		*/
		$(opt.eDropDown+ "," +opt.eCollapse).on("show.bs.dropdown hide.bs.dropdown show.bs.collapse hide.bs.collapse shown.bs.collapse hidden.bs.collapse", function(e) {

			var $thisItem = $(this);
			var thisIcon;

			// evito conflitti su collapse multipli in pagina
			if ($thisItem.is(e.target)) {

				// codice relativo ai dropdown
				if (e.namespace === "bs.dropdown") {

					thisIcon = $thisItem.find(opt.eSwitchIcon);

				// codice relativo agli accordion
				} else if (e.namespace === "bs.collapse") {

					// in caso di problemi fare uno switch su questo comando in base a una classe
					//~ var thisIcon = $thisItem.parent().find(opt.eSwitchIcon+":first");
					thisIcon = $thisItem.prev().find(opt.eSwitchIcon+":first");
				}

				// chiamo funzione switchicon e slideanimation solo su eventi show e hide (altrimenti si duplicherebbe)
				if ((e.type === "show" || e.type === "hide") && (e.namespace === "bs.collapse" || e.namespace === "bs.dropdown")) {

					$.fn.toggleSwitchIcon(thisIcon);
					$.fn.slideAnimantion($thisItem, e);
				}

				// se sono in versione desktop nascondo footer e rimodulo altezza sidebar/content
				if ((e.type === "shown" || e.type === "hidden") && e.namespace === "bs.collapse") {

					// nascondo il footer all'evento chiusura accordion
					if (e.type === "hidden") {

						$(opt.eFooter).hide();
					}

					if ($("body").data("hamburgerStatus") === false) {

						$.fn.resizeSidebar();

					} else {

						$(opt.ePageContent).css("min-height", $("body").data("sizeViewport"));
					}

					if ($(opt.eFooter).is(":visible") === false) {

						$(opt.eFooter).fadeIn(100);
					}
				}
			}
		});

		// eventi on resize
		$(window).on("resize", function() {

			$.fn.fixbarShowHide();
			$.fn.checkLayout();

			// controllo tipo layout. se senza menu non eseguo alcuni controlli
			if (opt.layoutMenuVersion !== "n") {

				$.fn.manageHamburger();
			}

			// trasformo una lista ul in select
			if (opt.isMultiLanguage === "y") {

				$.fn.ulToSelect(opt.eLangLongList);
			}
		});

		// evento al caricamento completo della pagina per evitare che la sidebar venga ridimensionata troppo presto
		$(window).on("load", function() {
			$.fn.resizeSidebar();
		});

		/**
		* aggiungo un troncamento sulle voci di menu
		* fallback ie8... muori!
		*/
		//~ if(!Modernizr.lastchild) {

			//~ $(opt.eLevelMenu2+ " li:last-child a").addClass(opt.lastChild);

			//~ // solo se impostato limitCharsEllipsis si attiva il codice. può essere un fallback per le classi css
			//~ if (opt.limitCharsEllipsis > 0) {

				//~ $(opt.eMultiLineEllipsis).each(function () {

					//~ if ($(this).text().length > opt.limitCharsEllipsis) {
						//~ $(this).text($(this).text().substring(0, opt.limitCharsEllipsis)+ "...");
					//~ }
				//~ });
			//~ }
		//~ }
	}
	// controllo tipo layout. se senza menu non eseguo alcuni controlli

	/**
	* cerco le rispettive immagini svg in formato png
	* fallback ie8... muori!
	*/
	//~ if(Modernizr.svg === false) {

		//~ $('img[src*="svg"]').attr("src", function() {
			//~ return $(this).attr("src").replace(".svg", ".png");
		//~ });
	//~ }
});

/*
//~ formattare un numero in euro (metodo poco supportato da IE)
var formatter = new Intl.NumberFormat('it-IT', {
	style: 'currency',
	currency: 'EUR',
	minimumFractionDigits: 2,
});
tot_amount = formatter.format(tot_amount);

//~ formattare un numero in euro (maggiore supporto, meno standard)
tot_amount = tot_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

// formattare un numero in euro. buon supporto
tot_amount = (tot_amount).toLocaleString('it-IT', {
  style: 'currency',
  currency: 'EUR',
});

*/
