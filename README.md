Instruction: https://www.ilovefreesoftware.com/23/webware/free-self-hosted-remote-browser-with-isolation-browsergap.html


## Normal Browser UI things that work

- Copy and paste (paste is as normal, but for copy you need to use the right-click context menu)
- File upload
- File download (if self hosted, using cloud managed, or with secure file viewer license which is available on request, but not in free demo)
- Modal dialogs
- New tabs
- History (invisible but you can navigate it with the forward and back buttons)
- Address bar search (defaults to Google but you can add your own)
- New incognito tabs 
- Clearing cache, history and session cookies
- Touch scrolling, track pad scrolling, mouse wheel and magic pad scrolling
- Desktop, tablet and mobile
- Form input (text, options, check boxes, etc)

## Normal Browser UI things not yet implemented

- Text selection
- Page zooming and pinch/spread zooming on mobile (implementation is buggy)
- Multi touch on tablet and mobile
- Regular browser settings (language, default page scale, etc)
- Summary list of history entries
- WebGL (this is an open bug in Chrome headless)
- Multiple windows (you can sort of do this by opening the app in different tabs, and say opening all BG tabs in incognito mode, but it's not fluid)

## Advanced things only BG does

- Local and remote bandwidth indicator
- Secure browsing context (we only send you pixels from normal browsing, to protect you from exploits, malware and zero days)
- Fully functioning browser that you can embed in any other app on the open web (basically a `<browserview>` tag that works everywhere, and has the normal UI you expect from a browser)
- Control the resource usage of a pool of remote browsers, collectively and individually.
- Adaptively resamples images based on the bandwidth you have available on your connection, to maintain responsiveness and use the best image quality your bandwidth permits

## Some ways people are using OuterShell

- To embed other applications in their own web app to unite separate user flows, and overcome iframe restrictions.
- As a browser proxy to enable secure browsing on locked down internal networks


## localhost:8002

By default (unless you provide command line arguments) it runs on port 8002.

## Get and self-host

Instructions

```sh
sudo apt update && sudo apt -y upgrade
sudo apt install -y curl git wget
udo apt-get update && sudo apt-get -y upgrade
sudo apt -y install curl nodejs certbot vim
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
sudo bash ./nodesource_setup.sh
sudo apt -y install nodejs build-essential
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh
bash ./install_nvm.sh
source $HOME/.profile
source $HOME/.nvm/nvm.sh
nvm install --lts
sudo apt autoremove
npm i -g serve nodemon pm2 npm npx
sudo npm i -g serve nodemon pm2 npm npx
```

Then install and run BrowserGap from source:

```sh
git clone https://github.com/dosycorp/browsergap.ce.git
cd BrowserGap
npm i
npm start
```

If you'd like more control (over say the ports that chrome and the web app run on, you can pass those
parameters to the `start.sh` script, which has the following signature:

```sh
./start.sh <chrome_port> <app_port> <cookie_name> <username> token2
```

*Note: the audio port is always 2 less than the app_port*


## Opening DevTools

Just connect your browser to http://localhost:5002 from the machine you run it on.

## Connecting puppeteer

Just run PPTR on the same machine as this and connect to http://localhost:5002

