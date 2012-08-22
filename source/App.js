enyo.kind({
	name: "App",
    kind: "FittableRows",
	components: [
		{kind: "onyx.Toolbar", style: "height:50px", content: "Your Radio Alpha"},
		
		{kind: "Scroller", fit: true, style: "height:300px;", components: [
		
			{content: "This application is still in the alpha stages for both design and usage. This page is only to test to make sure you have configured Chrome to run Enyo correctly from a local server."}
    	]}
	],
	create: function() {
		this.inherited(arguments);
	},

});