const MainPageViewModel = require("./main-page-view-model");
const observableModule = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
var settings = require("tns-core-modules/application-settings");
const modalViewModule = "home/modal-view-page";

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new MainPageViewModel();
    page.bindingContext.tab = settings.getString("tab");
}

function changedTab(args) {
    if (args.oldIndex != -1)
    {
        console.log("test");
        args.object.page.bindingContext.tab = args.object.items[args.object.selectedIndex].text;
        settings.setString("tab", `${args.object.items[args.object.selectedIndex].text}`);
    }
}

function onLoaded(args) {
    const tabView = args.object;
    const vm = new observableModule.Observable();
    vm.set("tabSelectedIndex", 0);

    tabView.bindingContext = vm;
}

function openModal(args) {
    const button = args.object;
    const page = button.page;
    const mainView = args.object;
    const context = { charName:"", race:"", charClass:""};
    const fullscreen = false;
    mainView.showModal(modalViewModule, context, (charName, race, charClass) => {
        page.frame.navigate("main/main-page");
    }, fullscreen);

}

exports.onLoaded = onLoaded;
exports.openModal = openModal;
exports.onNavigatingTo = onNavigatingTo;
exports.changedTab = changedTab;