const cart=(cart_list, action, item)=>{


    let cart_list= []

    switch(action){
    case 'add':
        return [...cart_list, item];
    case 'remove':
        let cart_list2=cart_list.slice()
            for (let cartItem of cart_list2){
                if(cartItem.id === item.id){
                    cart_list2.splice(cart_list2.indexOf(cartItem),1)
                    return cart_list2
                }
            }
            return cart_list2
    case 'remove_all':
        return cart_list.filter((cartItem)=>item.id!== cartItem.id)
    case 'empty':
       return []
    default:
        console.log("Thats not correct");
    }
}

let item1={
    id:1,
    nam:"Coke",
    desc: "white snow",
    price: 100
}


const cartActions ={
    add,
    remove,
    empty,
    remove_all
    
}
