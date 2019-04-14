const mainPageViewModel = "./main-page-view-model";
const observableModule = require("tns-core-modules/data/observable");
var settings = require("tns-core-modules/application-settings");

function onNavigatingTo(args) {
    
}

function navigate(args) {
    const page = args.object;
    page.frame.navigate(page.text);
}
function changedTab(args) {

}


exports.onNavigatingTo = onNavigatingTo;
exports.navigate = navigate;
exports.changedTab = changedTab;