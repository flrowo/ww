export let MainComponent = () => {
    let eae = "https://cdn.myanimelist.net/images/characters/9/365465.jpg";
    
    // should return html of the content of the main page

    return `
    <div style="height: auto; width: 100px; filter: chroma(#3300FF)">
        <img src="${eae}">
    </div>
    `;
}