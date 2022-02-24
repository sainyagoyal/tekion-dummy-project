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
const nonVegIcon="./images/non-veg.png";
const vegIcon="./images/veg.png";

main_menu_arr=[
    {
        veg:true,
        price:399,
        title:"Veg Platter",
        desc:"Feel like a Nawab with this one, soft cubes of paneer cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        veg:false,
        price:699,
        title:"Non-Veg Platter",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        veg:false,
        price:699,
        title:"Non-Veg Platter",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        veg:true,
        price:69,
        title:"ice-cream",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        veg:true,
        price:99,
        title:"waffles",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        veg:false,
        price:799,
        title:"Bowl",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        veg:false,
        price:699,
        title:"Non-Veg Platter",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    }
]

function main_menu(){
    for(let x in main_menu_arr){
        let item=$("<div></div>").addClass("border")
        $(".main-box-child2").append(item);

        let item2=$("<div></div>").addClass("flex-container-row main-box-parent1")
        item.append(item2);

        let item3=$("<div></div>").addClass("child-2-1")
        item2.append(item3);

        var item10;
        if(main_menu_arr[x].veg==true){
             item10=$('<img/>',{
                src:vegIcon,
                alt:'icon',
                class:'header-icon'
            })
        }
        else {
            item10=$('<img/>',{
                src:nonVegIcon,
                alt:'icon',
                class:'header-icon'
            })
        }
        item3.append(item10);

        let item4=$("<div></div>").addClass("name-of-dish").text(main_menu_arr[x].title);
        item3.append(item4);

        let item5=$("<div></div>").addClass("price").text("Rs. "+ main_menu_arr[x].price);
        item3.append(item5);

        let item6=$("<div></div>").addClass("desciption-of-dish").text(main_menu_arr[x].desc);
        item3.append(item6);

        let item7=$("<div></div>").addClass("child-2-2")
        item2.append(item7);
        
        let item8=$('<img/>',{
            class:'image-main-menu',
            src:main_menu_arr[x].image,
            alt:'food-image'
        });
        item7.append(item8)

        let item9=$("<div></div>").addClass("add").text("ADD");
        item7.append(item9);
        
        












        

        
    }
}

$(document).ready(function(){
    side_menu();
    main_menu();
});