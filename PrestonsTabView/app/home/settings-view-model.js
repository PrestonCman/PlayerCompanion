const observableModule = require("tns-core-modules/data/observable");
const settings = require("application-settings");

function SettingsViewModel() {
    const viewModel = observableModule.fromObject({
        
        numPlayers:0,
        
        characters: [

        ]
    });
    return viewModel;
}

module.exports = SettingsViewModel;
