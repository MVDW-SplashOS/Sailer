const Grid = (items) => {
    const el_grid = document.createElement("div");
    el_grid.classList.add("grid");

    for (let i = 0; i < items.length; i++) {
        const el_grid_item = document.createElement("div");
        el_grid_item.classList.add("item");
        
        el_grid_item.appendChild(items[i]);
        el_grid.appendChild(el_grid_item);
    }
    
    return el_grid;

}

export default Grid;
