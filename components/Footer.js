import { Button } from "./Button.js";
import { Dropdown } from "./Dropdown.js";

export let Footer = () => {
    let headerItems = [
        {
            content: "discord",
            link: "https://discord.com/users/204997093067063296",
            iconSrc: "./assets/discord.svg",
        },
        {
            content: "osu",
            link: "https://osu.ppy.sh/users/4689256",
            iconSrc: "./assets/osu.svg",
        },
        {
            content: "lists",
            link: "#",
            iconSrc: "",
            dropdownChilds: [
                Button("anime", "#", "./assets/anime.png", false),
                Button("music", "#", "", false),
            ],
        },
    ];
    
    return (
        `<div style="display: flex; align-items: center"> Socials: </div>` + 
        headerItems.map(headerItem => {
            if(headerItem.dropdownChilds && headerItem.dropdownChilds.length > 0){
                return Dropdown(
                    headerItem.content,
                    headerItem.link,
                    headerItem.iconSrc,
                    headerItem.dropdownChilds
                );
            } else {
                return Button(
                    headerItem.content,
                    headerItem.link,
                    headerItem.iconSrc
                );
            }
        }).join("")
    );
}