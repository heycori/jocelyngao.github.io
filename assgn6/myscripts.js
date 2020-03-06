function changeBlackberryTotal() {
  var blackberryQuantity = document.getElementById("blackberryquantity").value;
  document.getElementById("blackberrytotal").innerHTML = "TOTAL: " + blackberryQuantity;
}

function changeCaramelTotal() {
  var caramelQuantity = document.getElementById("caramelquantity").value;
  document.getElementById("carameltotal").innerHTML = "TOTAL: " + caramelQuantity;
}

function changeOriginalTotal() {
  var originalQuantity = document.getElementById("originalquantity").value;
  document.getElementById("originaltotal").innerHTML = "TOTAL: " + originalQuantity;
}







function addBlackberryImage(){
	getElementById('productimage').innerHTML = "<img src='images/blackberrybunonly.png' alt='productimage'>";
}

function addBlackberryPrice() {
	var blackberryQuantity = document.getElementById("blackberryquantity").value;
	getElementById("price").innerHTML = "<p>"+blackberryQuantity+"</p>";
}

function addBlackberryTitle() {
	getElementById('bunname').innerHTML="<p>Blackberry Cinnamon Buns</p>";
}

function addBlackberryGlazing(){
	var blackberryGlazing = document.getElementById("blackberryglazing").value;
	document.getElementById("itemglazing").innerHTML= "<p id= 'summaryglazing'>Glazing: " + blackberryGlazing+"</p>";
}

function addBlackberryQuantity(){
	var blackberryQuantity = document.getElementById("blackberryquantity").value;
  document.getElementById("itemquantity").innerHTML = "<p id= 'summaryquantity'>Quantity: " + blackberryQuantity+"</p>";
}

var i = 0;
function buttonClick() {
	document.getElementById('inc').value= ++i;
}

 var shoppingCart = [];

    //this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
        //ensure we delete all previously added rows from ordered products table
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        //iterate over array of objects
        for(var product in shoppingCart){
            //add new row      
            var row=orderedProductsTblBody.insertRow();
            //create three cells for product properties 
            var cellName = row.insertCell(0);
            var cellGlazing = row.insertCell(1);
            var cellQuantity= row.insertCell(2);
            var cellPrice = row.insertCell(3);
            cellPrice.align="right";
            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[product].Name;
            cellGlazing.innerHTML = shoppingCart[product].Glazing;
            cellQuantity.innerHTML = shoppingCart[product].Quantity;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
        }
        //fill total cost of our shopping cart 
        document.getElementById("cart_total").innerHTML=cart_total_price;
    }
    function AddtoCart(name,glazing,quantity,price){
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Glazing=document.getElementById("blackberryglazing").value;
       singleProduct.Quantity=document.getElementById('blackberryquantity').options[document.getElementById('blackberryquantity').selectedIndex].text;
       singleProduct.Price=Number(document.getElementById("blackberryquantity").value);
       //Add newly created product to our shopping cart 
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

    } 