side_menu_arr=['Recommended','Platters','Starters','Thalis','Rice bowls'];


function side_menu(){
    for (let x in side_menu_arr){
       let item=document.createElement("div");
       item.classList.add("main-box-child1-items");
       let node=document.createTextNode(side_menu_arr[x]);
       item.appendChild(node);
       let element=document.getElementById("side_menu_id");
       element.appendChild(item);
    }
    
}



window.onload=side_menu;