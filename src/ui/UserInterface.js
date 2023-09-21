

import Render from './Render.js';
import page from './pages/Projects.js';

const init_ui = () => {

    // Create basic UI elements 
    const el_bar_header = document.createElement("div");
    const el_bar_footer = document.createElement("div");
    const el_main = document.createElement("div");

    // Set basic information for UI elements
    el_bar_header.id = "header";
    el_bar_footer.id = "footer";
    el_main.id = "main";
    
    // Start creating main content
    el_main.appendChild(page());

    
    
    // Render elements
    Render(el_bar_header);
    Render(el_main);
    Render(el_bar_footer);
}

export default init_ui;
