const observableModule = require("tns-core-modules/data/observable");
const settings = require("application-settings");

function mainPageViewModel() {
    const viewModel = observableModule.fromObject({
    });
    return viewModel;
}

module.exports = mainPageViewModel;
