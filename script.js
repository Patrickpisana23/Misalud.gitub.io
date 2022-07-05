let items = document.querySelectorAll('.carousel .carousel-item')


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
            loop:false
        },
        768:{
            items: 2,
            loop:false
        },
        1100:{
            items: 3,
            loop:false
        },
        1400:{
            items: 4,
            loop:false
        },
        1600:{
            items: 5,
            loop:false
        },
    }
});

function goBack() {
    window.history.back()
  }

function menos(){
    var cantidadinput = document.getElementById("forma1").value;
    var preciototal = document.getElementById("multiplicador1");
    var price = parseFloat(preciototal.innerText.replace('S/ ', ''))
    var total= document.getElementById("total1");
    var multiplicacion = cantidadinput * price;
    total.innerText='S/ '+multiplicacion;
}

function multiplicar(){
    var cantidadinput = document.getElementById("forma1").value;
    var preciototal = document.getElementById("multiplicador1");
    var price = parseFloat(preciototal.innerText.replace('S/ ', ''))
    var total= document.getElementById("total1");
    var multiplicacion = cantidadinput * price;
    total.innerText='S/ '+multiplicacion;
}