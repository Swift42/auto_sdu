# auto_sdu
Sage Labs: Automatic SDU scanning with just your browser

Written by Swift42 for the Star Atlas Community, made for Chrome/Windows.
The use is currently being permitted on a trial basis (according to the Star Atlas team, see the discord announcement).

How to install:
To be able to still play with your main fleet while you do the scanning, I would recommend to create a new Chrome profile and install a fresh Phantom/Solflare extension in the new profile.
Then create a new wallet, transfer the needed ships to this wallet, start Sage Labs and connect the wallet to Sage Labs. Form your fleets.
Disable the Chrome memory saver here: chrome://settings/performance

Copy the text from bookmarklet.js, create a bookmark in your new Chrome profile and paste the text as the URL.

How to use (Solflare):
Solflare is the easiest method, because the Solflare's auto-confirm doesn't expire.
When you connect to Sage Labs or do the first transaction, just enable auto-confirm.

How to use (Phantom):
Normally you can only enable auto-confirm for 2 hours in Phantom, but you can trick Phantom to do a much longer time period: Close the Phantom window. Right-click the clock in the Windows taskbar and select "Change date/time". Disable the automatic clock sync and set the time manually. Set a date in the future (e.g. 1 day in the future). Wait 1 minute, so Phantom accepts the new time. Open the Phantom window, settings, connected apps, labs.staratlas.com, set auto-confirm to active. Close the Phantom window.
Enable automatic clock sync again, wait one minute (so Phantom gets the new/current time), open Phantom again and check if Phantom has set the auto-confirm expiration to the desired time in the future.

Use the bookmarklet:
Move the fleets to the target locations, exit warp and go to "Dashboard -> Sector Survey".
Do the first scan manually ("Scan all") to check if Phantom/Solflare wants your wallet password and to finally activate the auto-confirm.
Wait until the scan cooldown is done and then call the bookmark once.
After some seconds the script "presses" the "SCAN ALL" button and then again every minute.
If you want you can minimize the window and check the status now and then.
To stop the process or if something goes wrong, just reload the page. This will stop/remove the bookmarklet.
Also if the script doesn't find the "SCAN ALL" button, it will stop automatically (and outputs "Stopping loop" to the JS console).

The script comes without any warranty.
If you want to change to interval of 60 seconds to some other value, just change "60000" (=60 seconds in milliseconds) to some other value on this line:
window.setTimeout("window.myloopfunc()",60000);

Notes:
Of course it would be easier if Phantom would allow us to set the auto-confirm time by our own. Please upvote my feature request here: https://phantom.canny.io/feature-requests/p/increase-the-duration-of-auto-confirm-or-let-us-set-it-manually
