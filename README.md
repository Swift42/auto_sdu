# auto_sdu
Sage Labs: Automatic SDU scanning with just your browser

Written by Swift42 for the Star Atlas Community
The use is currently being permitted on a trial basis (according to the Star Atlas team, see the discord announcement).

How to install:
To be able to still play with your main fleet while you do the scanning, I would recommend to create a new Chrome profile and install a fresh Phantom/Solflare extension in the new profile.
Then create a wallet, transfer the needed ships to this wallet, start Sage Labs and connect the wallet to Sage Labs. Form your fleets.
Disable the Chrome memory saver here: chrome://settings/performance

Copy the text from bookmarklet.js, create a bookmark in your new Chrome profile and paste the text as the URL.
The default values are: 62s for each scan loop and 3s pause between each fleet (to give Phantom/Solflare enough time to execute the scan transaction).
If you have a slow browser/PC or if you use Phantom instead of Solflare, you may need to increase the values (see the first two lines of the script, 62000 and 3000, that's 62s and 3s in milliseconds). E.g. try to set it to 66000 and 4000.

How to use (Solflare):
Solflare is the easiest and fastest method, because Solflare's auto-confirm doesn't expire.
When you connect to Sage Labs or do the first transaction, just enable auto-confirm.
Sage is whitelisted, so you don't need a burner wallet. Each wallet can enable the auto-confirm for Sage.

How to use (Phantom):
Normally you can only enable auto-confirm for 2 hours in Phantom, but you can trick Phantom to do a much longer time period: Close the Phantom window. Right-click the clock in the Windows taskbar and select "Change date/time". Disable the automatic clock sync and set the time manually. Set a date in the future (e.g. 1 day in the future). Wait 1 minute, so Phantom accepts the new time. Open the Phantom window, settings, connected apps, labs.staratlas.com, set auto-confirm to active. Close the Phantom window.
Enable automatic clock sync again, wait one minute (so Phantom gets the new/current time), open Phantom again and check if Phantom has set the auto-confirm expiration to the desired time in the future.

Use the bookmarklet:
Move the fleets to the target locations, exit warp and go to "Dashboard -> Sector Survey".
Do the first scan manually ("Scan all") to check if Phantom/Solflare wants your wallet password and to finally activate the auto-confirm.
Wait until the scan cooldown is done and then call the bookmark once.
After some seconds the script "presses" the scan button of each fleet. After the loop time (default 62 seconds) it starts again.
The script tracks the amount of SDUs per fleet. If a SDU was found, the corresponding fleet skips a scan to save toolkits (because if a SDU was found, the cooldown of the sector is 2 minutes).
To stop the process or if something goes wrong, just reload the page. This will stop/remove the bookmarklet.
Also if the script doesn't find a scan button, it will stop automatically (and shows an alert window).

The script comes without any warranty.
