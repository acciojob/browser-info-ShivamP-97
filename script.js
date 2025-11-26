//your JS code here. If required.
const browserInfoDiv = document.getElementById('browser-info');
const userAgent = navigator.userAgent;
const appName = navigator.appName;
const appVersion = navigator.appVersion;

let browserName = appName;
let version = appVersion;

if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
    version = userAgent.match(/Firefox\/([0-9\.]+)/)[1];
} else if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1) {
    browserName = "Google Chrome";
    version = userAgent.match(/Chrome\/([0-9\.]+)/)[1];
} else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
    browserName = "Safari";
    version = userAgent.match(/Version\/([0-9\.]+)/)[1];
} else if (userAgent.indexOf("Edg") > -1) {
    browserName = "Microsoft Edge";
    version = userAgent.match(/Edg\/([0-9\.]+)/)[1];
} else if (userAgent.indexOf("OPR") > -1) {
    browserName = "Opera";
    version = userAgent.match(/OPR\/([0-9\.]+)/)[1];
} else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
    version = userAgent.match(/rv:([0-9\.]+)/)[1];
}

browserInfoDiv.textContent = `You are using ${browserName} version ${version}.`;
