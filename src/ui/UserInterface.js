import TileButton from './components/buttons/TileButton.js';
import Textbox from './components/textboxes/Textbox.js';

import Render from './Render.js';

const init_ui = () => {

    console.log("init ui..");
    
    const el_search = Textbox("Search");
    Render(el_search);
    
    const el_projectTile = TileButton("SplashBuilder", 1, "code", [["github", "brands"], ["Crown"]]);
    Render(el_projectTile);
    
    const el_projectTile2 = TileButton("SyncPlay", 1, "code-fork", [["github", "brands"]]);
    console.log(el_projectTile2)
    Render(el_projectTile2);
}

export default init_ui;
