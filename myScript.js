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
        id:1,
        veg:true,
        price:399,
        title:"Veg Platter",
        desc:"Feel like a Nawab with this one, soft cubes of paneer cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        id:2,
        veg:false,
        price:699,
        title:"Non-Veg Platter",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        id:3,
        veg:false,
        price:699,
        title:"Non-Veg Platter",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        id:4,
        veg:true,
        price:69,
        title:"ice-cream",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        id:5,
        veg:true,
        price:99,
        title:"waffles",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        id:6,
        veg:false,
        price:799,
        title:"Bowl",
        desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
        image:"./images/food.jpeg"
    },
    {
        id:7,
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

        let item9=$("<div></div>").addClass("add");
        item7.append(item9);
        
        let item11=$("<div></div>").addClass("decrement-main-menu").text("-");
        item9.append(item11);

        let item12=$("<div></div>").addClass("item-quantity-main-menu").text("ADD");
        item9.append(item12);
        
        let item13=$("<div></div>").addClass("increment-main-menu").text("+");
        item9.append(item13);
        
    
        
    }
}

const addItem = document.getElementsByClassName('increment-main-menu');
const decrementItem = document.getElementsByClassName('decrement-main-menu');
function itemQuantityChange(){
   
    for(let i=0;i<addItem.length;i++){
        let count=0;
        addItem[i].addEventListener('click', function() {
            const div = this.previousElementSibling;
            
            let pare=addItem[i].parentElement.parentElement.previousElementSibling;
            
            count++;
            div.innerText=count;
            if(count==1){
                let ele1=$("<div></div>").addClass("cart-item-box");
                $(".main-box-child3").append(ele1);
                let ele2=$("<div></div>").addClass("cart-icon-box");
                ele1.append(ele2);
                console.log(addItem[i].parentElement.parentElement.previousElementSibling);
                let ele3=$('<img/>',{
                    class:'cart-icon',
                    src:$(pare.firstChild).attr('src'),
                    alt:'food-image'
                });
                ele2.append(ele3);
                
                let ele4=$("<div></div>").addClass("cart-item-name").text($(pare).children().eq(1).text());
                ele1.append(ele4);

                let ele5=$("<div></div>").addClass("cart-number-box");
                ele1.append(ele5);

                let ele5_1=$("<div></div>").addClass("cart-decrement").text("-");
                ele5.append(ele5_1);
                let ele5_2=$("<div></div>").addClass("cart-quantity").text("1");
                ele5.append(ele5_2);
                let ele5_3=$("<div></div>").addClass("cart-increment").text("+");
                ele5.append(ele5_3);

                let ele6=$("<div></div>").addClass("cart-price").text($(pare).children().eq(2).text());
                ele1.append(ele6);  
            }
            else{
                const cartItem = document.getElementsByClassName('cart-increment');
               
                for(let j=0;j<cartItem.length;j++){
                    let cartEle=cartItem[j].parentElement.parentElement;
                    if($(pare).children().eq(1).text()== $(cartEle).children().eq(1).text()){
                        let final_ele=cartItem[j].previousElementSibling;
                
                        $(final_ele).text(count);
                    }
                }

            }
            
        })
        decrementItem[i].addEventListener('click',function(){
            const div=this.nextElementSibling;
            count--;
            count=Math.max(count,0);
            let pare=addItem[i].parentElement.parentElement.previousElementSibling;
            if(count<=0)
                div.innerText='ADD';
            else
                div.innerText = count;

                const cartItem = document.getElementsByClassName('cart-decrement');
               
                for(let j=0;j<cartItem.length;j++){
                    let cartEle=cartItem[j].parentElement.parentElement;
                    if($(pare).children().eq(1).text()== $(cartEle).children().eq(1).text()){
                        let final_ele=cartItem[j].nextElementSibling;
                        if(count<=0)
                            $(cartEle).remove();
                        else
                            $(final_ele).text(count);
                    }
                }
        })
    }
}


$(document).ready(function(){
    side_menu();
    main_menu();
    itemQuantityChange();
});