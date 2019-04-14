var settings = require("application-settings");
const observableModule = require("tns-core-modules/data/observable");
let closeCallback;

function onShownModally(args) {
    const context = args.context;
    closeCallback = args.closeCallback;
    const page = args.object;
    page.bindingContext = observableModule.fromObject(context);
}
exports.onShownModally = onShownModally;

function onAddButtonTap(args) {
    var button = args.object;
    page = button.page;
    var index = settings.getNumber("numPlayers").toString();
    var obj = {'name':page.bindingContext.get("charName"),
               'race':page.bindingContext.get("race"),
               'class':page.bindingContext.get("charClass")}
    
    var s = JSON.stringify(obj);
    settings.setString("character"+index, s);

    const charName = page.bindingContext.get("charName");
    const race = page.bindingContext.get("race");
    const charClass = page.bindingContext.get("charClass");
    settings.setNumber("numPlayers", Number(index)+1);
    
    closeCallback(charName, race, charClass);
}

function onCancelButtonTap(args){
    args.object.closeModal();
}
exports.onAddButtonTap = onAddButtonTap;
exports.onCancelButtonTap = onCancelButtonTap;