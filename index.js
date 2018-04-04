function get(url, fn) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readystate === 4) {
            if (xhr.status === 200 || !xhr.status && xhr.responseText.length) {
                console.log(xhr.responseText);
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
get("./config.json");
