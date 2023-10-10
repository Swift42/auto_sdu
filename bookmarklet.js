javascript: (() => {
	function triggerMouseEvent (node, eventType) {
		var clickEvent = document.createEvent ('MouseEvents');
		clickEvent.initEvent (eventType, true, true);
		node.dispatchEvent (clickEvent);
	}
	setTimeout("window.myloopfunc()",3000);
	window.myloopfunc=function()
	{
		var els = document.evaluate("//span[contains(., 'Scan all')]", document, null, XPathResult.ANY_TYPE, null );
		var el = els.iterateNext();
		if((typeof el == 'undefined') || el==null) 
		{ 
			console.log('Stopping loop'); 
		}
		else
		{
			triggerMouseEvent (el.parentElement, "click");
			window.setTimeout("window.myloopfunc()",60000);
		}
	};
})();
