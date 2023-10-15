javascript: (() => {
	window.autosdu_looptime=64000;
	window.autosdu_pauseBetweenFleets=3000;
	function triggerMouseEvent (node, eventType) {
		var clickEvent = document.createEvent ('MouseEvents');
		clickEvent.initEvent (eventType, true, true); node.dispatchEvent (clickEvent);
	}	
	var blobURL = URL.createObjectURL( new Blob([ '(',	
	function() { self.onmessage=function(e) { setTimeout(function() { postMessage(''); } , (e.data=='start'?3000:autosdu_looptime)); };
	}.toString().replace('autosdu_looptime',window.autosdu_looptime),
	')()' ], { type: 'application/javascript' } ) );
	window.autosdu_worker = new Worker( blobURL );
	URL.revokeObjectURL( blobURL );		
	window.autosdu_worker.postMessage('start');		
	window.sduPerFleet=[];
	window.autosdu_worker.onmessage=function(e) {
		var els = document.evaluate("//span[contains(., 'Start Scan')]", document, null, XPathResult.ANY_TYPE, null );
		var el = els.iterateNext();
		if((typeof el == 'undefined') || el==null) { alert('No scan button found, stopping bookmarklet.'); window.autosdu_worker.terminate(); }
		else {
			var idx=0;
			while(el) {
				var fleetName=el.parentElement.parentElement.parentElement.firstChild.innerHTML;
				var sdus=el.parentElement.parentElement.parentElement.childNodes[5].innerHTML;
				if(typeof window.sduPerFleet[fleetName] != 'undefined' && sdus!=window.sduPerFleet[fleetName]) {
					console.log("["+(new Date).toJSON()+"] "+fleetName+" has "+sdus+" SDUs and therefore found SDUs on last scan, skipping.");				
				} 
				else {
					console.log("["+(new Date).toJSON()+"] "+fleetName+" has an unchanged number of "+sdus+" sdus, scanning ...");
					setTimeout(function(el) { console.log("["+(new Date).toJSON()+"] Pressing scan button for "+fleetName); triggerMouseEvent (el.parentElement, "click"); }.bind(this,el),idx*window.autosdu_pauseBetweenFleets);
				}
				window.sduPerFleet[fleetName]=sdus;				
				el = els.iterateNext();
				idx++;
				if(idx>(window.autosdu_looptime-10000)/window.autosdu_pauseBetweenFleets) { alert("Too many fleets found, unable to handle it in one loop. Stopping bookmarklet."); window.autosdu_worker.terminate(); return false; }
			}
			window.autosdu_worker.postMessage('tick');
		}
	};
})();
