var settings = require("application-settings");
const SettingsViewModel = require("./settings-view-model");
var settings = require("tns-core-modules/application-settings");
var page;

exports.onNavigatingTo=function(args) {
    page = args.object;
    page.bindingContext = new SettingsViewModel();

    for(var i = 0; i < settings.getNumber("numPlayers"); i++)
    {   
        s = settings.getString("character"+i)
        obj = JSON.parse(s);
        page.bindingContext.characters.push({name:obj.name, class:obj.class, race: obj.race});
    }
}

exports.deleteCharacter=function(args)
{
    var index = args.index;
    var players = settings.getNumber("numPlayers")-1;
    if(index == players)
    {
        settings.remove('character'+index)
        settings.setNumber("numPlayers", players);
    }
    else
    {
        settings.setString('character'+index, settings.getString('character'+players));
        settings.remove('character'+players);
        settings.setNumber("numPlayers", players);
    }
    page.frame.navigate("home/home-page");
}


function onCancelButtonTap(args){
    page.frame.navigate("home/home-page");
}

exports.onCancelButtonTap = onCancelButtonTap;