const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = {};
}

function navigate(args) {

}

exports.onNavigatingTo = onNavigatingTo;
exports.navigate = navigate;