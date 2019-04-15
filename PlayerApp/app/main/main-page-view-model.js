const observableModule = require("tns-core-modules/data/observable");
const settings = require("application-settings");

function MainPageViewModel() {
    const viewModel = observableModule.fromObject({
            tab: ""
    });
    return viewModel;
}

module.exports = MainPageViewModel;
