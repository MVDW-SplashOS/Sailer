import Icon from '../media/Icon.js'

const TileButton = (text = "Empty", size = 1, icon = null, badges = null, fn = null) => {

    // Create default elements for tile buttons
    const el_button = document.createElement("button");
    const el_text = document.createElement("p");
    
    // Give styling to button
    el_button.classList.add("button", "tile");
    el_text.classList.add("text");
    
    // Set button text
    el_text.innerHTML = text;
    
    // create icon if set
    if ( icon !== null ){
        const el_icon_container = document.createElement("div");
        const el_icon = Icon(icon);
        
        el_icon_container.classList.add("icon-container");
        el_icon.classList.add("icon");
        
        el_icon_container.appendChild(el_icon);
        el_button.appendChild(el_icon_container);
    }
    // Set badges if set
    if ( badges !== null ){
    
        const el_badgelist = document.createElement("div");
        el_badgelist.classList.add("badge-list")
        
        for (let i = 0; i < badges.length; i++) {
            const el_icon = Icon(badges[i][0], badges[i][1]);
            el_icon.classList.add("badge");
            
            el_badgelist.appendChild(el_icon);
        }
        
        el_button.appendChild(el_badgelist);
    }
    
    
    el_button.appendChild(el_text);
    
    
    return el_button;
}

export default TileButton;
