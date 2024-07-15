export let Main = () => {
    let eae = "https://cdn.myanimelist.net/images/characters/9/365465.jpg";

    return (`
        <div style="display: flex; justify-content: space-evenly; width: 100%">
            <div style="height: auto; width: 100px;"> <img src="${eae}"> </div>
            
            <div>
                i like studiying japanese, games and coding
                <br>
                hope to get along
            </div>
        </div>
    `);
}