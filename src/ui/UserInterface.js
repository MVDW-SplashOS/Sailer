import TileButton from './components/buttons/TileButton.js';
import Textbox from './components/textboxes/Textbox.js';

import Grid from './layouts/Grid.js';


import Render from './Render.js';

const init_ui = () => {

    console.log("init ui..");
    
    const el_search = Textbox("Search");
    Render(el_search);
    
    var items = [];
    items.push(TileButton("SplashBuilder", 1, "code", [["github", "brands"], ["Crown"]]));
    items.push(TileButton("SyncPlay", 1, "code-fork", [["github", "brands"]]));
   
    Render(Grid(items));
}

export default init_ui;
