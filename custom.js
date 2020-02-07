
options = {
    success: function(files) {
        var fileData = JSON.stringify(files[0], undefined, 2);
        document.getElementById("targetFile").innerHTML = fileData;

    },
    cancel: function() {
    },
    linkType: "preview", // or "direct"
    multiselect: false,
    folderselect: false
};
var button = Dropbox.createChooseButton(options);
document.getElementById("chooserContainer").appendChild(button);