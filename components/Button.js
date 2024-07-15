export let Button = (text = "OK", url = "#", iconSrc = "", rounded = true) => {

    let codeForRounded = "";
    if(!rounded){
        codeForRounded = `style="border-radius: 0px"`;
    }

    return `
        <div class="button" onclick="window.location = '${url}'" ${codeForRounded}>
            ${
            iconSrc !== "" ? `
                <div class="button-icon">
                    <img src="${iconSrc}">
                </div>
            ` : ``
            }
            ${text}
        </div>
    `;
}