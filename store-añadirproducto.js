if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-remove-item-cart')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var buttonsMinus = document.getElementsByClassName('btn-disminuir2')
    for (var i = 0; i < buttonsMinus .length; i++) {
        var button = buttonsMinus[i]
        button.addEventListener('click', disminuirModalProductos)
    }
    var buttonsPlus = document.getElementsByClassName('btn-mas2')
    for (var i = 0; i < buttonsPlus.length; i++) {
        var button = buttonsPlus[i]
        button.addEventListener('click', agregarModalProductos)
    }
    var modalquantityInputs = document.getElementsByClassName('modal-quantity-input')
    for (var i = 0; i <  modalquantityInputs.length; i++) {
        var input =  modalquantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    


}
function disminuirModalProductos(event){
    var buttonc = event.target;
    var x = buttonc.parentElement.parentElement.parentElement;
    var input = x.getElementsByClassName('modal-quantity-input')[0];
    var num = input.value;
    if(num > 1){
        num--;
        input.value=num;
    }    
}
function agregarModalProductos(event){
    var buttonc = event.target;
    var x = buttonc.parentElement.parentElement.parentElement;
    var input = x.getElementsByClassName('modal-quantity-input')[0];
    var num = input.value;
    num++;
    input.value=num;
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    let numcarrito = document.getElementById('numcarrito');
    let resta = parseInt(numcarrito.innerText);
    resta--;
    numcarrito.innerText=resta;
    if(resta==0){
        document.getElementById("btnContinuar").innerHTML="";
    }
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    let cant = input.parentElement.parentElement.parentElement.parentElement
    let x = cant.getElementsByClassName('cart-cantidad')[0]
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }else{
        x.innerText=input.value
    }

    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    var contenido = shopItem.getElementsByClassName('shop-item-content')[0].innerText
    
    if(button.id=="agregarModal"){
        var numcantidad = shopItem.getElementsByClassName('modal-quantity-input')[0].value;
        addItemToCart(title, price, imageSrc, contenido, numcantidad)
    }else{
        addItemToCart(title, price, imageSrc, contenido, 1)
    }

    
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc, contenido, cantidad) {
    var numcarrito = document.getElementById('numcarrito');
    var suma = parseInt(numcarrito.innerText);
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
   
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    suma++;
    numcarrito.innerText=suma;
    var cartRowContents = `<div class="row">
        <div class="col-2">
            <div class="cart-item cart-column">
                <img class="cart-item-image img-fluid" src="${imageSrc}">
            </div>
                
        </div>
        <div class="col-4">
            <div class="cart-item cart-column">
                <h3 class="cart-item-title" style="font-size:1vmax">${title}</h3>
                <span class="cart-item-content" style="font-size:1vmax">${contenido}</span>
                <div class="cantidad-carrito d-flex">
                    <p class="cart-item-cant" style="font-size:1vmax">Cantidad: <p class="cart-cantidad" style="font-size:1vmax" value="${cantidad}">${cantidad}</p></p>
                    
                </div>
            </div>            
        </div>
        <div class="col-6">
            <div class="cart-item cart-column">
                <span class="cart-column" style="font-size:1vmax;font-weight:bold"><img src="img/image 42.png" class="img-fluid" alt=""></img>${price}</span>
            </div>
            <div class="cart-item cart-column">
                <span class="cart-price cart-column" style="font-size:1vmax;"><img src="img/image 42.png" class="img-fluid" style="visibility:hidden" alt=""></img>${price}</span>
            </div>  
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-3">
                        <button type="button" class="btn btn-primary btn-circle menos2" style="border:1px solid grey;color:grey;background:white;border-radius:50%"><i class="fas fa-minus" style=""></i>
                        </button>
                    </div> 
                    <div class="col-4" style="margin-right:0%">
                        <input class="cart-quantity-input form-control text-center" type="number" value="1" style="">
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-default btn-circle mas2" style="border:1px solid grey;color:grey;background:white;border-radius:50%"><i class="fas fa-plus" style=""></i>
                        </button>
                    </div>                
                </div>
            </div>
        </div>
        <button class="btn btn-link btn-remove-item-cart me-0" type="button" style="text-decoration:none;color:red">Eliminar</button>            
    </div>
        
        
        
            

        
    </div>`
    var btnContinuar = `<button type="button" class="btn" onclick="tavo()" style="padding-left:10%;padding-right:10%;border-radius:20px;background-color:#043CAA;color:white">Continuar</button>`
    document.getElementById("btnContinuar").innerHTML=btnContinuar;
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove-item-cart')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('mas2')[0].addEventListener('click', btnAgregar)
    cartRow.getElementsByClassName('menos2')[0].addEventListener('click', btnDisminuir)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function tavo(){
    window.location="shoppingcart-añadirproducto" + ".html";
}  

function btnAgregar(event){
    let btnAgregar = event.target;
    let agregar = btnAgregar.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    var input = agregar.getElementsByClassName('cart-quantity-input')[0];
    var span = agregar.getElementsByClassName('cart-cantidad')[0];
    var suma=parseInt(input.value);
    suma++;
    input.value=suma;
    span.innerHTML=input.value;
    updateCartTotal();
}
function btnDisminuir(event){
    let btnDisminuir = event.target;
    let agregar = btnDisminuir.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    var input = agregar.getElementsByClassName('cart-quantity-input')[0];
    var span = agregar.getElementsByClassName('cart-cantidad')[0];
    var suma=parseInt(input.value);
    if(input.value>1){
        suma--;
        input.value=suma;
        span.innerHTML=input.value;
        updateCartTotal();
    }

}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('S/ ', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'S/ ' + total
}