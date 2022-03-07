
import { side_menu_arr } from "./Modal/data.mjs";
import { main_menu_arr } from "./Modal/data.mjs";
import {nonVegIcon} from "./Modal/data.mjs";
import {vegIcon} from "./Modal/data.mjs";


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

function main_menu(){
    for(let x in main_menu_arr){
        let main_menu_item=$("<div></div>").addClass("border")
        $(".main-box-child2").append(main_menu_item);

        let main_menu_item2=$("<div></div>").addClass("flex-container-row main-box-parent1")
        main_menu_item.append(main_menu_item2);

        let main_menu_item3=$("<div></div>").addClass("child-2-1")
        main_menu_item2.append(main_menu_item3);

        var main_menu_img_veg_nonVeg;
        if(main_menu_arr[x].veg==true){
             main_menu_img_veg_nonVeg=$('<img/>',{
                src:vegIcon,
                alt:'veg',
                class:'header-icon',
                dataVal:'veg'
            })
        }
        else {
            main_menu_img_veg_nonVeg=$('<img/>',{
                src:nonVegIcon,
                alt:'icon',
                class:'header-icon',
                dataVal:'nonVeg'
            })
        }
        main_menu_item3.append(main_menu_img_veg_nonVeg);

        let itemName=$("<div></div>").addClass("name-of-dish").text(main_menu_arr[x].title);
        main_menu_item3.append(itemName);

        let itemPrice=$("<div></div>").addClass("price").text("Rs. "+ main_menu_arr[x].price);
        main_menu_item3.append(itemPrice);

        let itemDesc=$("<div></div>").addClass("desciption-of-dish").text(main_menu_arr[x].desc);
        main_menu_item3.append(itemDesc);

        let main_menu_item4=$("<div></div>").addClass("child-2-2")
        main_menu_item2.append(main_menu_item4);
        
        let itemImage=$('<img/>',{
            class:'image-main-menu',
            src:main_menu_arr[x].image,
            alt:'food-image'
        });
        main_menu_item4.append(itemImage)

        let item9=$("<div></div>").addClass("add");
        main_menu_item4.append(item9);
        
        let itemQuantityDecrement=$("<div></div>").addClass("decrement-main-menu").text("-");
        item9.append(itemQuantityDecrement);

        let itemQuantity=$("<div></div>").addClass("item-quantity-main-menu").text("ADD");
        item9.append(itemQuantity);
        
        let itemQuantityIncrement=$("<div></div>").addClass("increment-main-menu").text("+");
        item9.append(itemQuantityIncrement);
        
    
        
    }
}


let total_cart_count=0;
let bill=0;

function cartEmpty(){
    if(total_cart_count==0){
        $(".cart-empty").show();
        $(".bill").hide();
    }
    else{
        $(".cart-empty").hide();
        $(".bill").show();
    }
}
function totalBill(mystr,x){
    sub_str=mystr.split(" ")[1];
    if(x==1){
        bill+=Number(sub_str);
    }
    else {
        bill-=Number(sub_str);
        bill=Math.max(0,bill);
    }
    $(".totla-bill-price").text("Rs. "+bill);

}
function itemQuantityChange(){
    const addItem = document.getElementsByClassName('increment-main-menu');
    const decrementItem = document.getElementsByClassName('decrement-main-menu');
    cartEmpty();
    for(let i=0;i<addItem.length;i++){
        let count=0;
        
        addItem[i].addEventListener('click', function() {
            const div = this.previousElementSibling;
            
            let pare=addItem[i].parentElement.parentElement.previousElementSibling;
            
            count++;
            div.innerText=count;
            if(count==1){
                total_cart_count++;
                let ele1=$("<div></div>").addClass("cart-item-box");
                $(".cart-item-big-box").append(ele1);
                let cart_itemIcon=$("<div></div>").addClass("cart-icon-box");
                ele1.append(cart_itemIcon);
   
                let cart_item_vegNonveg=$('<img/>',{
                    class:'cart-icon',
                    src:$(pare.firstChild).attr('src'),
                    alt:'food-image',
                    dataVal:$(pare.firstChild).attr('dataVal')
                });
                
                cart_itemIcon.append(cart_item_vegNonveg);
                
                let cart_itemName=$("<div></div>").addClass("cart-item-name").text($(pare).children().eq(1).text());
                ele1.append(cart_itemName);

                let ele5=$("<div></div>").addClass("cart-number-box");
                ele1.append(ele5);

                let cart_itemDecrement=$("<div></div>").addClass("cart-decrement").text("-");
                ele5.append(cart_itemDecrement);
                let cart_itemQuantity=$("<div></div>").addClass("cart-quantity").text("1");
                ele5.append(cart_itemQuantity);
                let cart_itemIncrement=$("<div></div>").addClass("cart-increment").text("+");
                ele5.append(cart_itemIncrement);

                let cart_itemPrice=$("<div></div>").addClass("cart-price").text($(pare).children().eq(2).text());
                ele1.append(cart_itemPrice); 
                totalBill($(pare).children().eq(2).text(),1); 
                $("#cart-no-of-items").text(total_cart_count+" Item");
            }
            else{
                total_cart_count++;
                
                const cartItem = document.getElementsByClassName('cart-increment');
               
                for(let j=0;j<cartItem.length;j++){
                    let cartEle=cartItem[j].parentElement.parentElement;
                    if($(pare).children().eq(1).text()== $(cartEle).children().eq(1).text()){
                        let final_ele=cartItem[j].previousElementSibling;
                
                        $(final_ele).text(count);
                        totalBill($(pare).children().eq(2).text(),1); 

                    }
                }
                $("#cart-no-of-items").text(total_cart_count+" Items");

            }
            
         cartEmpty();
            
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
                    
                    console.log(total_cart_count+"sainya");
                    let cartEle=cartItem[j].parentElement.parentElement;
                    if($(pare).children().eq(1).text()== $(cartEle).children().eq(1).text()){
                        total_cart_count--;
                        let final_ele=cartItem[j].nextElementSibling;
                        if(count<=0)
                            $(cartEle).remove();
                        else
                            $(final_ele).text(count);
                        totalBill($(pare).children().eq(2).text(),0); 
                    }
                 }
                 if(total_cart_count==1){
                 $("#cart-no-of-items").text(total_cart_count+" Item");
                 }
                 else{
                    $("#cart-no-of-items").text(total_cart_count+" Items");
                 }
                 
           
            cartEmpty();
            

        })


    }

}

function vegOnly(){
    let ele=document.getElementById('vegonly');
    ele.addEventListener('click',function(){
        
    
    let main_menu_elements=document.getElementsByClassName('border');
    
    if(ele.checked){
        for(i=0;i<main_menu_elements.length;i++){
            let image_ele=$(main_menu_elements[i]).children().children("div.child-2-1").children("img.header-icon");
            if(image_ele.attr('dataVal')=="nonVeg"){
               $(main_menu_elements[i]).hide();
           }    
        }
        
        
    }
    else{
        for(i=0;i<main_menu_elements.length;i++){
        
               $(main_menu_elements[i]).show();
               
        }
    }
    })
    
}

function searchFilter(){
   let ele=document.getElementById('search-filter');
   ele.addEventListener('input',function(){
    let itemList=document.getElementsByClassName('border');
    for(i=0;i<itemList.length;i++){
        let itemName=$(itemList[i]).children().children("div.child-2-1").children("div.name-of-dish").text();
        if(itemName.toLowerCase().includes(ele.value.toLowerCase())){
            $(itemList[i]).show();
        }
        else{
            $(itemList[i]).hide();
        }
    }
})
   
}
function storage(){
    let cart=[];
    let ele=document.getElementById("checkout-button");
    ele.addEventListener('click',function(){
        let cartItems=document.getElementsByClassName('cart-item-box');
        console.log(cartItems);
        for(i=0;i<cartItems.length;i++){

            let x={};
            let vegBool=$(cartItems[i].firstChild.children).attr('dataVal');
            if(vegBool=='veg'){
                x.veg=true;
            }
            else{
                x.veg=false;
            }
            let itemName=$(cartItems[i]).children("div.cart-item-name").text();
            x.title=itemName;
            let itemQuantity=$(cartItems[i]).children("div.cart-number-box").children("div.cart-quantity").text();
            x.quantity=itemQuantity;
            let itemPrice=$(cartItems[i]).children("div.cart-price").text();
            x.price=itemPrice.split(" ")[1];
            cart.push(x); 
        }
        console.log(cart);
        localStorage.setItem("cart",JSON.stringify(cart));
        
    });

}


$(document).ready(function(){
    side_menu();
    main_menu();
    vegOnly();
    itemQuantityChange();
    searchFilter();
    storage();
});

