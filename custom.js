
options = {
    success: function(files) {
        // alert("Here's the file link: " + files[0].link)
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