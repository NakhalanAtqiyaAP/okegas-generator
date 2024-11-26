document.getElementById('inputText').addEventListener('input', function() {
    let inputText = this.value;
    let modifiedText = inputText.replace(/[aiuo]/gi, function(match) {
        return match + 'm';
    });
    document.getElementById('outputText').value = modifiedText;
});
