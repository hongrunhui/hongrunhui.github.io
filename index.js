function get(url, fn) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || !xhr.status && xhr.responseText.length) {
                fn(xhr.responseText);
            }
        }
    }
    xhr.open('GET', url, true);
    xhr.onerror = function(e) {
        console.log('error', e);
    }
    xhr.send(null);
}
get("./config.json", function(data) {
    console.log('data', data);
    var data = JSON.parse(data);
    var pages = data.pages;
    var basePagesDir = data.basePagesDir;

    console.log(data);
});
function each(parentNode, template, data) {
    var f = document.createDocumentFragment();

}
