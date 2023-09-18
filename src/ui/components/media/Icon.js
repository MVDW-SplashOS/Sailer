const Icon = (icon, category = "solid") => {
    var icon_name = "fa-" + icon;
    var icon_category = "fa-" + category;
    
    const el_icon = document.createElement("i");
    el_icon.classList.add(icon_category, icon_name);

    return el_icon;
}

export default Icon;
