let carts = document.querySelectorAll('.bag');

let products = [
    {
    name:' Air Force 1',
    tag: 'af1',
    price: '4,995',
    incart: 0
    },

    {
    name:' Air Force 1',
    tag: 'af1',
    price: '4,995',
    incart: 0
    },

    {
    name:' Air Force 1',
     tag: 'af1',
    price: '4,995',
     incart: 0
    },

    {
    name:' Air Force 1',
    tag: 'af1',
    price: '4,995',
    incart: 0
    },


]
for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => 
    {
        cartnumbers(products[i]);
    })
}

function onloadcartnumbers(){
    let productnumbers = localStorage.getItem('cartnumbers');

    if(productnumbers){
        document.querySelector('.cart1 span').textContent = productnumbers;
    }
}

function cartnumbers(product){

    let productnumbers = localStorage.getItem('cartnumbers');

    productnumbers = parseInt(productnumbers);
    if(productnumbers){
        localStorage.setItem('cartnumbers', productnumbers +1);
        document.querySelector('.cart1 span').textContent = productnumbers + 1;
    } else {
        localStorage.setItem('cartnumbers', 1);
        document.querySelector('.cart1 span').textContent = 1;
    }
    setItems(product);

}
function setItems(product){
    let cartitems = localStorage.getItem('productincart');
    cartitems = JSON.parse(cartitems);

    if(cartitems !=null){
        cartitems[product.tag].incart +=1;
    } else{
        product.incart = 1;
        cartitems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productincart", JSON.stringify(cartitems));
}
onloadcartnumbers();
