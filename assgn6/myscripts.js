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

    function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }
        var cart_total_price=0;
        for(var product in shoppingCart){

            var row=orderedProductsTblBody.insertRow();

            var cellName = row.insertCell(0);
            var cellGlazing = row.insertCell(1);
            var cellQuantity= row.insertCell(2);
            var cellPrice = row.insertCell(3);
            var remove = row.insertCell(4);
            cellPrice.align="right";
            
            cellName.innerHTML = shoppingCart[product].Name;
            cellGlazing.innerHTML = shoppingCart[product].Glazing;
            cellQuantity.innerHTML = shoppingCart[product].Quantity;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
            remove.innerHTML = shoppingCart[product].Remove;
        } 
        //total cost of shopping cart 
        document.getElementById("cart_total").innerHTML=cart_total_price;
    }
    function AddtoCart(name,glazing,quantity,price){
       var singleProduct = {};
       
       singleProduct.Name=name;
       singleProduct.Glazing=document.getElementById("blackberryglazing").value;
       singleProduct.Quantity=document.getElementById('blackberryquantity').options[document.getElementById('blackberryquantity').selectedIndex].text;
       singleProduct.Price=Number(document.getElementById("blackberryquantity").value);
       singleProduct.Remove='<div id= "item"><input type = "button" value = "x" onclick="getIndex(this)">';
       //Add product to array
       shoppingCart.push(singleProduct);
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

//opens modal
var btn = document.getElementById("myBtn");

//closes modal
var span = document.getElementsByClassName("close")[0];

//open modal
btn.onclick = function() {
  modal.style.display = "block";
}

//close modal
span.onclick = function() {
  modal.style.display = "none";
}

//close modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//stuff for shopping cart modal
var cartModal = document.getElementById("cartModal");

// open
var cartbtn = document.getElementById("cartBtn");

// close
var cartspan = document.getElementsByClassName("cartclose")[0];

// opens modal
cartbtn.onclick = function() {
  cartModal.style.display = "block";
}

// closes modal
cartspan.onclick = function() {
  cartModal.style.display = "none";
  countitems();
}

// closes modal
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
  var items = 0;
    for (var i = 0; i<shoppingCart.length; i++) {
      if (shoppingCart[i].Quantity == "-"){
        items = items + 0;
      }
      if (shoppingCart[i].Quantity== "1 ($1.99)") {
        items = items + 1;
      }
      if (shoppingCart[i].Quantity== "3 ($4.99)") {
        items = items + 3;
      }
      if (shoppingCart[i].Quantity== "6 ($8.99)") {
        items = items + 6;
      }
      if (shoppingCart[i].Quantity== "12 ($14.99)") {
        items = items + 12;
      }
    }
    document.getElementById('inc').value = items;
  }


/*
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