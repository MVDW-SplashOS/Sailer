import TileButton from '../components/buttons/TileButton.js';
import Textbox from '../components/textboxes/Textbox.js';

import Grid from '../layouts/Grid.js';
import { SplitHorizontal } from '../layouts/Split.js';

const page = () => {
    const page = document.createElement("div");

    
    const el_search = Textbox("Search");
    
    
    let split = SplitHorizontal([null, null, el_search, null]);
    page.appendChild(split);
    
    var items = [];
    items.push(TileButton("SplashBuilder", 1, "code", [["github", "brands"], ["Crown"]]));
    items.push(TileButton("SyncPlay", 1, "code-fork", [["github", "brands"]]));
   
    page.appendChild(Grid(items));
    
    return page;
}

export default page;
