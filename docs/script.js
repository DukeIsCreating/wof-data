window.onload = function () {
    disableGithubStyles();
};

function disableGithubStyles() {
    for (var i = 0; i < document.styleSheets.length; ++i) {
        var sheet = document.styleSheets[i];
        if (sheet.href !== null && sheet.href.includes("/assets/css/style.css?")) {
            sheet.disabled = true;
            if (sheet.parentNode !== null && sheet.parentNode !== undefined) {
                sheet.parentNode.removeChild(sheet);
            }
        }
    }
}
