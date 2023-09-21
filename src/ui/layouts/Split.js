function SplitHorizontal(items){

    const el_container = document.createElement("div");
    el_container.classList.add("container", "split");
    
    
    for (let i = 0; i < items.length; i++) {
        const el_horizontal = document.createElement("div");
        el_horizontal.classList.add("horizontal");
        
        if(items[i]) el_horizontal.appendChild(items[i]);
        
        el_container.appendChild(el_horizontal);
    }
    
    return el_container;
}

function SplitVertical(left, right){
   console.log("test");
}

export { SplitHorizontal, SplitVertical };
