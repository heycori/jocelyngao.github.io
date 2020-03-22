function changeBlackberryTotal() {
  var blackberryQuantity = document.getElementById("blackberryquantity").value;
  document.getElementById("blackberrytotal").innerHTML = "TOTAL: $" + blackberryQuantity;
}

function changeCaramelTotal() {
  var caramelQuantity = document.getElementById("caramelquantity").value;
  document.getElementById("carameltotal").innerHTML = "TOTAL: $" + caramelQuantity;
}

function changeOriginalTotal() {
  var originalQuantity = document.getElementById("originalquantity").value;
  document.getElementById("originaltotal").innerHTML = "TOTAL: $" + originalQuantity;
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
            var remove = row.insertCell(4);
            cellPrice.align="right";
            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[product].Name;
            cellGlazing.innerHTML = shoppingCart[product].Glazing;
            cellQuantity.innerHTML = shoppingCart[product].Quantity;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
            remove.innerHTML = shoppingCart[product].Remove;
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
       singleProduct.Remove='<div id= "item"><input type = "button" value = "x" onclick="getIndex(this)">';
       //Add newly created product to our shopping cart 
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

    } 

 

function subtotal() {
  var subtotal = 0;
  var table = document.getElementById("orderedProductsTblBody");
  var rows = table.getElementsByTagName("tr")
    for (var i = 0; i < rows.length; i++) {
       if (rows[i].getElementsByTagName("td").length > 0) {
        subtotal = subtotal + row[3]
      }
    }
  document.getElementById('inc').value = totalRowCount;
  }



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



    var cartModal = document.getElementById("cartModal");

// Get the button that opens the modal
var cartbtn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
var cartspan = document.getElementsByClassName("cartclose")[0];

// When the user clicks on the button, open the modal
cartbtn.onclick = function() {
  cartModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cartspan.onclick = function() {
  cartModal.style.display = "none";
  countitems();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = "none";
  }
}

var addtocartbtn = document.getElementById("blackberryaddtocart");

addtocartbtn.onclick = function(){
  AddtoCart('Blackberry','glazing', 'quantity', 'price');
  myModal.style.display = "none";
  countitems();
}


/*function countitems(){  
  document.getElementById('inc').value=shoppingCart.length;
  }*/


function countitems() {
  var totalRowCount = 0;
  var rowCount = 0;
  var table = document.getElementById("orderedProductsTblBody");
  var rows = table.getElementsByTagName("tr")
    for (var i = 0; i < rows.length; i++) {
      totalRowCount++;
      if (rows[i].getElementsByTagName("td").length > 0) {
        rowCount++;
      }
    }
  document.getElementById('inc').value = totalRowCount;
  }



/*
function removeItem(){
  var td = event.target.parentNode;
  var tr = td.parentNode;
  var product = tr.parentNode;
  tr.parentNode.removeChild(tr);
  product.parentNode.removeChild(product);
  newTotal = cart_total_price+-product.Price;
  document.getElementById("cart_total").innerHTML=newTotal;
}*/

function getIndex (element){
  var rowIndex = (element.closest('tr').rowIndex) - 2;
  shoppingCart.splice(rowIndex,1);
  var td = event.target.parentNode;
  var tr = td.parentNode;
  var product = tr.parentNode;
  tr.parentNode.removeChild(tr);
  product.parentNode.removeChild(product);
  displayShoppingCart();
}