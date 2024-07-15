export let setInnerHtmlByClass = (className, htmlContentArray) => {
    
    if(typeof htmlContentArray != typeof []){
        htmlContentArray = [htmlContentArray];
    }

    htmlContentArray.join("");

    let htmlElements = document.getElementsByClassName(className);
    let i = 0;
    while(htmlElements.length > i){
        htmlElements[i].innerHTML = htmlContentArray;
        i++;
    }
}