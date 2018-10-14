sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(MessageToast, Controller) {
	"use strict";

	return Controller.extend("DrThinkingDoctor.controller.Welcome", {
		onPressRegister: function(oEvent){
			this.getOwnerComponent().getRouter().navTo("register");
		}
	});
});