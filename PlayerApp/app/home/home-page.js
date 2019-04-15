const SettingsViewModel = require("./settings-view-model");
const modalViewModule = "home/modal-view-page";
var settings = require("tns-core-modules/application-settings");
var page;
var s;
var obj;


function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = new SettingsViewModel();
    if(!settings.getNumber("numPlayers")){
        settings.setNumber("numPlayers",0);
    }
    for(var i = 0; i < settings.getNumber("numPlayers"); i++)
    {   
        s = settings.getString("character"+i)
        obj = JSON.parse(s);
        page.bindingContext.characters.push({name:obj.name, class:obj.class, race: obj.race});
    }

}
exports.openCharacter=function(args)
{
    settings.setString("tab", "Character");
    var navigation = {
        moduleName:"./main/main-page",
        //character:page.bindingContext.settings.getString(args.object.text)
    }
    page.frame.navigate(navigation);
}

exports.openDelete=function(args){
    var navigation ={
        moduleName:"home/delete-page",
        characters:page.bindingContext.characters
    }
    page.frame.navigate(navigation);
}

function openModal(args) {

    const mainView = args.object;
    const context = { charName:"", race:"", charClass:""};
    const fullscreen = false;
    mainView.showModal(modalViewModule, context, (charName, race, charClass) => {
        page.frame.navigate("home/home-page");
    }, fullscreen);

}
exports.openModal = openModal;
exports.onNavigatingTo = onNavigatingTo;
