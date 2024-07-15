import { Button } from "./Button.js";

export let Dropdown = (text = "OK", url = "#", iconSrc = "", dropdownChilds = []) => {

    let style = `display: none;
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 100%;
    left: 50%;`;

    return `
        <div class="dropdown"
        onclick="
            let el = document.getElementById('dropdown8');
            if (el.style.display === 'none' || el.style.display === '') {
                el.style.display = 'block'
            } else {
                el.style.display = 'none'
            }
        ">
            ${iconSrc !== "" ? `
                <div class="dropdown-icon">
                    <img src="${iconSrc}">
                </div>
            ` : ``}
            ${text}
            🔽
            <div id="dropdown8" style="${style}">
                ${dropdownChilds.join('')}
            </div>
        </div>
    `;
}