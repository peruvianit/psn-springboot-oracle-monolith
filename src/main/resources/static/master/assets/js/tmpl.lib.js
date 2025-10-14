/**
 * @preserve
 * Filename: tmpl.lib.js
 *
 * Created: 28/07/2017 (17:01:25)
 * Created by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
 *
 * Last Updated: 28/07/2017 (17:01:25)
 * Updated by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
 *
 * Copyleft: 2017 - Tutti i diritti riservati
 *
 * Comments:
 **/

/* global tmpl */

"use strict";

$.fn.renderTemplate = function(customoptions) {

	// parametri di default
	var c_defParams = {
		"renderDest"		: "",
		"idTplScript"		: "tmpl",
		"dataUrl"			: "",
		"cache"				: false,
		"timeOut"			: 10000,
		"callbackFuncDone"	: "",
		"callbackFuncFail"	: "",
		"callbackFuncEver"	: ""
	};

	var self = {};

	var c_opt = $.extend(true, {}, c_defParams, customoptions);

	self.init = function() {

		if ($(c_opt.renderDest).length && c_opt.dataUrl !== "") {

			$.ajax({
				"url": c_opt.dataUrl,
				"cache": c_opt.cache,
				"type": "GET",
				"dataType": "json",
				// passo i cookie
				"xhrFields": {
					"withCredentials": true
				},
				"timeout": c_opt.timeOut

			}).done(function(data, textstatus, xhr) {

				data.response = xhr.status;

				$(c_opt.renderDest).html(tmpl(c_opt.idTplScript, data)).promise().done(function() {

					if (typeof c_opt.callbackFuncDone === "function") {

						c_opt.callbackFuncDone.call(this);
					}
				});

			}).fail(function(data, xhr) {

				data.response = xhr.status;

				$(c_opt.renderDest).html(tmpl(c_opt.idTplScript, data));

				if (typeof c_opt.callbackFuncFail === "function") {

					c_opt.callbackFuncFail.call(this);
				}
			});

			if (typeof c_opt.callbackFuncEver === "function") {

				c_opt.callbackFuncEver.call(this);
			}
		}
	};

	self.init();

	return self;
};
