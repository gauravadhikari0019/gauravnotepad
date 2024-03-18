function saveFile() {
    var textToSave = document.getElementById("editor").value;
    var blob = new Blob([textToSave], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "note.txt");
}

function loadFile() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';

    fileInput.onchange = function() {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.readAsText(file);

        reader.onload = function() {
            var text = reader.result;
            document.getElementById('editor').value = text;
        };

        reader.onerror = function() {
            console.error('Error reading file');
        };
    };

    fileInput.click();
}

function clearEditor() {
    document.getElementById('editor').value = '';
}
