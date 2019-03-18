function require(url){
    new_element = document.createElement("script");
    new_element.setAttribute("type","text/javascript");
    new_element.setAttribute("src",url);
    document.body.appendChild(new_element);
}