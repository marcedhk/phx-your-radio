enyo.kind({
	name: "App",
    kind: "FittableRows",
	components: [
		{kind: "onyx.Toolbar", style: "height:50px", content: "Your Radio Alpha"},
		
		{kind: "Scroller", fit: true, style: "height:300px;", components: [
		
			{tag: "hr", content: "Step 1"},
			
	    	{kind: "onyx.Button", name: "btnRequestAuth", content: "Request Authorization", ontap: "requestAuth"},
	    	{style: "height:40px;"},
	    	
	    	{tag: "hr", content: "Step 2"},
	    	{kind: "onyx.Groupbox", content: "PIN", components: [
	    		{kind: "Input", name: "txtPin", components: [
	    			{kind: "onyx.Button", name: "btnValidatePin", content: "Validate PIN", ontap: "validatePin", onmousedown: "dontFocus", disabled: true}
	    		]}
	    	]},
	    	{style: "height:40px;"},
	    	
	    	{tag: "hr", content: "Step 3"},
	    	{kind: "onyx.Groupbox", content: "Tweet", components: [
	    		{kind: "Input", name: "tweetText", components: [
	    			{kind: "onyx.Button", name: "btnTweetText", content: "Tweet Text", ontap: "tweetText", onmounedown: "dontFocus", disabled: true},
	    			]}
	    	]},
	    	{style: "height:40px"},
	    	
	    	{tag: "hr", content: "Step 4"},
	    	{kind: "onyx.Button", name: "btnFetchTimeline", content: "Fetch home timeline data", ontap: "fetchTimeline", disabled: false},
    		{style: "height:40px;"},
    		
    		{name: "myContent"}
    	]}
	],
	create: function() {
		this.inherited(arguments);
	},

});