if (!("opacity" in document.body.style)) {
    var div = document.createElement("div");
    div.innerHTML = '<div style="width: 100%; text-align: center; background: #F25648; color: #000; padding: 2em; font-weight: bold; border-bottom: 1px solid #333;"><p>Your browser is out of date. Update to view this website correctly.<p><a target="_blank" style="display: inline-block; padding: 1em; background: #F3675A; color: black; border: 2px solid black;" href="http://outdatedbrowser.com">UPDATE BROWSER NOW</a></div>';
    document.body.insertBefore(div, document.body.firstChild);
}
