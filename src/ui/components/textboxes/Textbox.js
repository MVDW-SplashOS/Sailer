import Icon from '../media/Icon.js'

const Textbox = (placeholder, text = null, id = null, icon = null) => {
    const el_container = document.createElement("div");
    const el_input = document.createElement("input");
    
    el_container.classList.add("textbox-container");
    el_input.classList.add("textbox");
    
    el_input.type = "text";
    
    
    // Add icon
    const el_icon = Icon("search");
    el_icon.classList.add("icon");
    
    
    
    el_container.appendChild(el_icon);
    el_container.appendChild(el_input);
    
    return el_container;

}

export default Textbox;
