// @prepros-prepend "quicklink.min.js";

var qlScriptId = document.getElementById("js-quicklink");
var qlDataId = qlScriptId.dataset.observeId;
var qlElemId = typeof(qlDataId) !== "undefined" ? qlDataId  : "sidebar-container";
var qlElem = document.getElementById(qlElemId);

if (qlElem) {
	qlScriptId.addEventListener("load", function () {
		quicklink({ el: qlElem });
	});
}