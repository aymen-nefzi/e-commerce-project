function signup() {
var test=true;
var firstName=document.getElementById("firstName").value;

verification("firstNameError","first must have at least 3 chars",firstName.length<3);
var lastName=document.getElementById("lastName").value;

verification("lastNameError","last name must have at least 4 chars",lastName.length<4);

var email=document.getElementById("email").value;
var verifEmail=verifEmailExist(email);
if (verifEmail) {
    document.getElementById("emailExistError").innerHTML="email already exists";
    document.getElementById("emailExistError").style.color="red";
    test=false;
} else {
    document.getElementById("emailExistError").innerHTML="";
}
var validateemail=validateEmail(email);
if (!validateemail) {
    document.getElementById("validateEmailError").innerHTML="invalid Email";
    document.getElementById("validateEmailError").style.color="red";
} else {
    document.getElementById("validateEmailError").innerHTML="";
}
var tel=document.getElementById("Tel").value;
if (tel.length!=8) {
    document.getElementById("telError").innerHTML="tel must be 8";
    document.getElementById("telError").style.color="red";
    test=false;
} else {
    document.getElementById("telError").innerHTML="";
}
var password=document.getElementById("password").value;
var passwordVerif=checkPassword(password);
if (!passwordVerif) {
    document.getElementById("passwordError").innerHTML="password must have at least 8 chars or max 16 chars a symbol an upper case and a lower case";
    document.getElementById("passwordError").style.color="red";
    test=false;
} else {
    document.getElementById("passwordError").innerHTML="";
}
// if (password.length<8 || password.length>16 ) {
//     document.getElementById("passwordError").innerHTML="password must have at least 8 chars or max 16 chars";
//     document.getElementById("passwordError").style.color="red";
//     test=false;
// } else {
//     document.getElementById("passwordError").innerHTML="";

// }
var confirmPassword=document.getElementById("confirmPassword").value;
if (confirmPassword!=password) {
    document.getElementById("confirmPasswordError").innerHTML="password must match";
    document.getElementById("confirmPasswordError").style.color="red";
    test=false;
} else {
    document.getElementById("confirmPasswordError").innerHTML="";
}
var users=JSON.parse(localStorage.getItem("users")||"[]");

if (test) {
    var idUser=JSON.parse(localStorage.getItem("idUser")||"10");
    var user={
        id:idUser,
        firstName:firstName,
        lastName:lastName,
        email:email,
        tel:tel,
        password:password,
        role:"client",
    }
    // localStorage.setItem("users",JSON.stringify(user))
    var users=JSON.parse(localStorage.getItem("users") || "[]");
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("idUser",idUser+1);
    // console.log(users);
    
    // localStorage.removeItem("users");
}

}

function addProduct() {
    var test=true;
var productName=document.getElementById("productName").value ;
if (productName.length<5) {
    document.getElementById("productNameError").innerHTML="product name must be at least 5 chars";
    document.getElementById("productNameError").style.color="red";
    test=false;
} else {
    document.getElementById("productNameError").innerHTML="";
}
var price=document.getElementById("Price").value;
if (price<0) {
    document.getElementById("priceError").innerHTML="price must be positive";
    document.getElementById("priceError").style.color="red";
    test=false;
} else {
    document.getElementById("priceError").innerHTML="";

}
var stock=document.getElementById("Stock").value;
if (stock<0) {
    document.getElementById("stockError").innerHTML="stock must be postive";
    document.getElementById("stockError").style.color="red";
    test=false;
} else {
    document.getElementById("stockError").innerHTML="";

}
var category=document.getElementById("category").value;
var image=document.getElementById("image").value
var newImage=replaceCh(image)
console.log(image);
// if (category.length<3) {
//     document.getElementById("categoryError").innerHTML="category must be at least 3 chars";
//     document.getElementById("categoryError").style.color="red";
//     test=false;

// } else {
//     document.getElementById("categoryError").innerHTML="";
 
// }
if (test) {
    var idProduct=JSON.parse(localStorage.getItem("idProduct")||"1")
    var product={
        id:idProduct,
        productName:productName,
        price:price,
        stock:stock,
        category:category,
        image:newImage
    }

    var products=JSON.parse(localStorage.getItem("products")||"[]");
// console.log(products);
products.push(product);
localStorage.setItem("products",JSON.stringify(products));
localStorage.setItem("idProduct",idProduct+1);
}
// console.log(productName,price,stock,category);


// console.log(product);
// localStorage.setItem("product",JSON.stringify(product));

}

function verification(spanId,msg,condition) {
    if (condition) {
        document.getElementById(spanId).innerHTML=msg;
        document.getElementById(spanId).style.color="red";
        test=false;
    } else {
        document.getElementById(spanId).innerHTML="";
    }
}

function generateId(T) {
    var max=0;
    if (T.length==0) {
        return max
    } else {
        for (let i = 0; i < T.length; i++) {
            if (T[i].id>max) {
                max=T[i].id
            }
            
        }
    }
    return max
}

function verifEmailExist(email) {
    var users=JSON.parse(localStorage.getItem("users")||"[]");
    var exist=false;
    for (let i = 0; i <= users.length-1; i++) {
        if (users[i].email==email) {
            exist=true;
            break;
        }
        
    }
    return exist;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function checkPassword(str)
  {
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
      return re.test(str);
  }

function addCategory() {
    var test=true;
    var categoryName=document.getElementById("categoryName").value;
    if (categoryName.length==0) {
        document.getElementById("CategoryNameError").innerHTML="you need to fill a category Name";
        document.getElementById("CategoryNameError").style.color="red";
        test=false;
    } else {
        document.getElementById("CategoryNameError").innerHTML=""; 
    }
    var verifcategory=verifCategoryExist(categoryName);
    if (verifcategory) {
        document.getElementById("CategoryExistError").innerHTML="category already exists";
        document.getElementById("CategoryExistError").style.color="red";
        test=false;
    } else {
        document.getElementById("CategoryExistError").innerHTML="";
    }

    var categoryDescription=document.getElementById("description").value;
    if (categoryDescription.length==0) {
        document.getElementById("descriptionError").innerHTML="you need to fill a category description";
        document.getElementById("descriptionError").style.color="red";
        test=false;
    } else {
        document.getElementById("descriptionError").innerHTML=""; 
    }

    if (test) {
        var idCategory=JSON.parse(localStorage.getItem("idCategory")||"1")
        var category={
            id:idCategory,
            categoryName:categoryName,
            description:categoryDescription,
        }
    var categories=JSON.parse(localStorage.getItem("categories")||"[]");
    categories.push(category);
    localStorage.setItem("categories",JSON.stringify(categories));
    localStorage.setItem("idCategory",idCategory+1)
    location.reload();
    }
    
}

function verifCategoryExist(ch) {
    var categories=JSON.parse(localStorage.getItem("categories")||"[]");
    var exist=false;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].name==ch) {
            exist=true;
            break;
        }
        
    }
    return exist;
}

function insertAdmins() {
    var users=JSON.parse(localStorage.getItem("users")||"[]");
    var admin1={
        id:1,
        firstName:"Admin1",
        lastName:"Admin1",
        email:"Admin1@gmail.com",
        tel:"24556335",
        password:"Admin1!11",
        role:"admin",
    }
    var admin2={
        id:2,
        firstName:"Admin2",
        lastName:"Admin2",
        email:"Admin2@gmail.com",
        tel:"22354896",
        password:"Admin2!22",
        role:"admin",
    }
    var admin3={
        id:3,
        firstName:"Admin3",
        lastName:"Admin3",
        email:"Admin3@gmail.com",
        tel:"22354896",
        password:"Admin3!33",
        role:"admin",
    }
    users.push(admin1,admin2,admin3);
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("AdminsAdded",true);
}

function displayUsers() {
    var users=JSON.parse(localStorage.getItem("users")||"[]");
    var usersTable=`<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Tel</th>
        <th scope="col">role</th>
        <th scope="col">actions</th>
      </tr>
    </thead>`
    for (let i = 0; i < users.length; i++) {
        usersTable=usersTable+`
        <tr>
            <th scope="row">${users[i].id}</th>
            <td>${users[i].firstName}</td>
            <td>${users[i].lastName}</td>
            <td>${users[i].email}</td>
            <td>${users[i].tel}</td>
            <td>${users[i].role}</td>
            <td><button type="button" class="btn btn-danger" onclick="deleteUser(${users[i].id})">Delete</button>
            <button type="button" class="btn btn-warning" onclick="editUser(${users[i].id})">Edit</button>
            </td>
        </tr>
        `
        
    }
    usersTable=usersTable+`</table>`
    document.getElementById("usersTable").innerHTML=usersTable
}

function displayCategories() {
    var categories = JSON.parse(localStorage.getItem("categories") || "[]");
    var categoriesTable = `
    <table class="table table-dark">
                                <thead>
                                  <tr>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Description</th>
                                    <th>actions</th>
                                  </tr>
                                </thead>
                                <tbody>`;

    for (let i = 0; i < categories.length; i++) {
        categoriesTable = categoriesTable + `
        <tr>
        <th scope="row">${categories[i].name}</th>
        <th scope="row">${categories[i].description}</th>
        <td><button type="button" class="btn btn-danger" onclick="deleteCategory(${categories[i].id})">Delete</button>
        <button type="button" class="btn btn-warning" onclick="editCategory(${categories[i].id})">Edit</button>
        </td>
        
      </tr>
        
        `;
        
    }
    categoriesTable = categoriesTable + `
    </tbody>
    </table>
    `;

    document.getElementById('categoriesTable').innerHTML = categoriesTable;

    
}

function displayProducts() {
    var products = JSON.parse(localStorage.getItem("products") || "[]");
    var productsTable = `
    <table class="table table-dark">
                                <thead>
                                  <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Category</th>
                                    
                                  </tr>
                                </thead>
                                <tbody>`;

    for (let i = 0; i < products.length; i++) {
        var category=searchById(products[i].category,"categories")
    
        productsTable = productsTable + `
        <tr>
        <th scope="row">${products[i].productName}</th>
        <th scope="row">${products[i].price} DT</th>
        <th scope="row">${products[i].stock}</th>
        <th scope="row">${category.name}</th>
        <td><button type="button" class="btn btn-danger" onclick="delete(${products[i].id})">Delete</button>
        <button type="button" class="btn btn-warning" onclick="editProduct(${products[i].id})">Edit</button>
        </td>

        
      </tr>
        
        `;
        
    }
    productsTable = productsTable + `
    </tbody>
    </table>
    `;

    document.getElementById('productsTable').innerHTML = productsTable;

    
}

function displaySelectCategories() {
    var categories = JSON.parse(localStorage.getItem("categories") || "[]");
 
     var select = `
     <select name="" id="category">
     <option value=''> Category </option>
     `;
     for (let i = 0; i < categories.length; i++) {
         select = select + `
         <option value="${categories[i].id}">${categories[i].name}</option>
         `;   
     }
    select = select + `</select>`;
   
 
     document.getElementById('select').innerHTML = select;
     
 }

 function searchById(id,key) {
    var objects = JSON.parse(localStorage.getItem(key) || "[]");
    var object ;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].id == id) {
            object = objects[i]
        } 
    }

    return object;
}

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var userFound ;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            userFound = users[i]
           break; 
        }
    }
    if (userFound) {
        // user exists

        localStorage.setItem("connectedUser",JSON.stringify(userFound));
        // Redirection
        switch (userFound.role) {
            case "client":
                location.replace("index.html")
                break;

            case "admin":
                location.replace("dahsboardAdmin.html")
                break;
        
          
        }
    } else {
        // not exists
        document.getElementById("error").innerHTML = 'Wrong informations'
        document.getElementById("error").style.color = 'red'
    }
}
function deleteUser(id) {
var users=JSON.parse(localStorage.getItem("users")||"[]");
var pos;
for (let i = 0; i < users.length; i++) {
    if (users[i].id==id) {
        pos=i;
    }
}
users.splice(pos,1);
localStorage.setItem("users",JSON.stringify(users));
location.reload();    
}

function deleteCategory(id) {
    var categories = JSON.parse(localStorage.getItem("categories") || "[]")
   
 
    // suppression categorie 
    for (let i = 0; i < categories.length; i++) {
        if( id == categories[i].id){
            categories.splice(i,1);
            localStorage.setItem("categories",JSON.stringify(categories));
            break;    
        }
        
    }
    var products = JSON.parse(localStorage.getItem("products") || "[]")
    var newProducts = []
    for (let i = 0; i < products.length; i++) {
        if (products[i].category != id) {
            newProducts.push(products[i])
        }  
    }
    localStorage.setItem("products",JSON.stringify(newProducts));

    location.reload()
}

function editUser(id) {
    var user=searchById(id,"users")
    var editUserForm=`
    <div class="login_form_inner">
						<h3>Log in to enter</h3>
						<div class="row login_form"  id="contactForm" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<input type="tel" class="form-control" id="tel" value="${user.tel}" name="name" placeholder="tel" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'">
							</div>
							<span id="telError"></span>
							
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn" onclick="validateEditUser(${user.id})">edit</button>
								<h3 id="error"></h3>
							</div>
						</div>
					</div>
    `
    document.getElementById("EditUser").innerHTML=editUserForm;
}
function validateEditUser(id) {
    var newTel=document.getElementById("tel").value;
    var test=true;
    if (newTel.length == 8 && !isNaN(newTel)) {
        document.getElementById('telError').innerHTML =""
    } else {
        document.getElementById('telError').innerHTML ="Invalid tel"
        document.getElementById('telError').style.color ="red"
        test = false;
    }
    if (test) {
        var users=JSON.parse(localStorage.getItem("users")||"[]")
        for (let i = 0; i < users.length; i++) {
           if (users[i].id==id) {
            users[i].tel=newTel;
            break;
           }
            
        }
        localStorage.setItem("users",JSON.stringify(users));
        location.reload();
    }
}
function editCategory(id) {
    var category=searchById(id,"categories");
    var editCategoryForm=`
    <div class="login_form_inner">
    <h3>Edit category</h3>
    <div class="row login_form" >
        
        <div class="col-md-12 form-group">
            <textarea name="" id="description" cols="30" rows="10"  class="form-control" placeholder="Description">${category.description}</textarea>
            <span id="descriptionError"></span>
        </div>
        
        <div class="col-md-12 form-group">
            <button type="submit" value="submit" class="primary-btn" onclick="validateEditCategory(${category.id})" >Edit</button>
        
        </div>
    </div>
</div>
    `
    document.getElementById("EditCatgory").innerHTML=editCategoryForm
}
function validateEditCategory(id) {
    var newDescription=document.getElementById("description").value;
    var test=true;
    if (newDescription.length==0) {
        document.getElementById("descriptionError").innerHTML="invalid description";
        document.getElementById("descriptionError").style.color="red";
        test=false;
    }else{
        document.getElementById("descriptionError").innerHTML="";
    }
    if (test) {
        categories=JSON.parse(localStorage.getItem("categories")||"[]");
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].id==id) {
                categories[i].description=newDescription;
                break;
            }
            
        }
        localStorage.setItem("categories",JSON.stringify(categories));
        location.reload();
    }
    
}

function editProduct(id) {
    var product=searchById(id,"products");
    var editProductForm=`
    <div class="login_form_inner">
    <h3>Edit product</h3>
    <div class="row login_form" >
       
        <div class="col-md-12 form-group">
        <h5>price</h5>
            <input type="number" class="form-control" id="price" name="name" placeholder="Price" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Price'" value="${product.price}">
            <span id="priceError"></span>
        </div>
        <div class="col-md-12 form-group">
        <h5>stock</h5>
            <input type="number" class="form-control" id="stock" name="name" placeholder="Stock" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Stock'" value="${product.stock}">
            <span id="stockError"></span>
        </div>
       
        
        
        
        <div class="col-md-12 form-group">
            <button type="submit" value="submit" class="primary-btn" onclick="validateEditProduct(${id})">Edit</button>
            
        </div>
    </div>
</div>
    `
    document.getElementById("EditProduct").innerHTML=editProductForm;
}
function validateEditProduct(id) {
    var newPrice=document.getElementById("price").value;
    var newStock=document.getElementById("stock").value;
    var test=true
    if (newPrice<=0) {
        document.getElementById("priceError").innerHTML="invalid price";
        document.getElementById("priceError").style.color="red";
        test=false;
    }else{
        document.getElementById("priceError").innerHTML="";
    }
    if (newStock<10) {
        document.getElementById("stockError").innerHTML="invalid stock";
        document.getElementById("stockError").style.color="red";
        test=false;
    }else{
        document.getElementById("stockError").innerHTML="";
    }
    if (test) {
        var products=JSON.parse(localStorage.getItem("products")||"[]");
        for (let i = 0; i < products.length; i++) {
           if (products[i].id==id) {
            products[i].price=newPrice;
            products[i].stock=newStock;
            break;
           }
            
        }
        localStorage.setItem("products",JSON.stringify(products));
        location.reload();
    }
}
function displayShop() {
    var products=JSON.parse(localStorage.getItem("products")||"[]");
    var shop=``
    for (let i = 0; i < products.length; i++) {
        shop+=`
        <div class="col-lg-4 col-md-6">
							<div class="single-product">
								<img class="img-fluid" src="${products[i].image}" alt="">
								<div class="product-details">
									<h6>${products[i].productName}</h6>
									<div class="price">
										<h6>${products[i].price} DT</h6>
										
									</div>
                                    <h6>${products[i].stock}</h6>
										
									</div>
									<button type="button" class="primary-btn" onclick="displaySingleProduct(${products[i].id})" >order</button>
								</div>
							</div>
						</div>
        `
        
    }
    document.getElementById("shop").innerHTML=shop;
}

function displaySingleProduct(id) {
    localStorage.setItem("idToPreserve",id);
    location.replace("single-product.html");
}
function displayProductDetails() {
    var id=JSON.parse(localStorage.getItem("idToPreserve"));
    var product=searchById(id,"products");
    document.getElementById("ProductName").innerHTML=product.productName;
    document.getElementById("ProductPrice").innerHTML=product.price+" DT";
    document.getElementById("ProductStock").innerHTML=product.stock+" quantity";

    var category = searchById(product.category,"categories")
    console.log(product.stock);
    
    document.getElementById("productCategory").innerHTML=category.categoryName

}

function addOrder() {
    var Qty = Number(document.getElementById("qty").value);
    var idProduct = JSON.parse(localStorage.getItem("idToPreserve"));
    var product = searchById(idProduct,"products");
    if (product.stock< Qty || Qty <= 0) {
        document.getElementById("qtyError").innerHTML =" Qty must be > 0 "
        document.getElementById("qtyError").style.color= "red";
    }
    else{

        document.getElementById("qtyError").innerHTML ="";
         var idOrder = JSON.parse(localStorage.getItem("idOrders")|| "1");
        var conectedUser= JSON.parse(localStorage.getItem("connectedUser"))
        var order ={
            idOrder :idOrder,
            idUser : conectedUser.id,
            idProdect : idProduct,
            Qty : Qty,
         }
         var orders = JSON.parse(localStorage.getItem("orders")|| "[]");
         orders.push (order);
         localStorage.setItem("orders" ,JSON.stringify(orders));
         localStorage.setItem("idOrders",idOrder+1);
         var products =JSON.parse(localStorage.getItem("products") || "[]");
         for (let i = 0; i < products.length; i++) {
            products[i].stock=Number(products[i].stock)
               if (products[i].id == idProduct) {  
                products[i].stock -= Qty;   
            }
         }
         localStorage.setItem("products",JSON.stringify(products));

    } 
    location.replace("cart.html")  
}

function displayCart() {
    var orders=JSON.parse(localStorage.getItem("orders")||"[]");
    var connectedUser=JSON.parse(localStorage.getItem("connectedUser"));
    var cart=`
    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">actions</th>
                            </tr>
                        </thead>
                        
    `
    var subTotal=0
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].idUser==connectedUser.id) {
            var product=searchById(orders[i].idProdect,"products")
            console.log(product);
            var total=orders[i].Qty*product.price
            subTotal+=total
            cart+=`
            <tr>
                                <td>
                                    <div class="media">
                                        <div class="d-flex">
                                            <img src="${product.image}" style="width:120px;heigth:20px" alt="">
                                        </div>
                                        <div class="media-body">
                                            <p>${product.productName}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h5>${product.price}</h5>
                                </td>
                                <td>
                                        ${orders[i].Qty}
                                </td>
                                <td>
                                    <h5>${total}</h5>
                                </td>
            <td>
            <button type="submit" value="submit" class="btn btn-warning" onclick="editOrder(${orders[i].id})">Edit</button>
            <button type="submit" value="submit" class="btn btn-danger" onclick="deleteOrder(${orders[i].id})">Delete</button>

            </td>
            </tr>
            `
        }
        
    }
    cart+=`
    
                            <tr>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <h5>Subtotal</h5>
                                </td>
                                <td>
                                    <h5>${subTotal}</h5>
                                </td>
                            </tr>
    `
    document.getElementById("cartTable").innerHTML=cart
}

function deleteOrder(id) {
    var order=searchById(id,"orders")
    console.log(order);
    // mise à jour du stock
    var products=JSON.parse(localStorage.getItem("products")||"[]");
    for (let i = 0; i < products.length; i++) {
        if (products[i].id==order.idProdect) {
            products[i].stock+=order.Qty;
            break;
        }
        
    }
    localStorage.setItem("products",JSON.stringify(products));

    // suppresion de l'order
    deleteObject(id,"orders");

}
function deleteObject(id,key) {
    var objects=JSON.parse(localStorage.getItem(key)||"[]");
var pos;
for (let i = 0; i < objects.length; i++) {
    if (objects[i].id==id) {
        pos=i;
    }
}
objects.splice(pos,1);
localStorage.setItem(key,JSON.stringify(objects));
location.reload();    
}
function editOrder(id) {
    var order = searchById(id,"orders")
    console.log(order);
    var editOrderForm = `
    <div class="login_form_inner">
    <h3>Edit Order</h3>
    <div class="row login_form">
      
   
        <div class="col-md-12 form-group">
            <input type="number" class="form-control" id="qty" name="name" value="${order.Qty}" placeholder="Quantity"  onfocus="this.placeholder = ''" onblur="this.placeholder = 'Quantity'">
        </div>
        <span id="qtyError"></span>
        <div class="col-md-12 form-group">
            <button type="submit" value="submit" class="primary-btn" onclick="validateEditOrder(${order.idOrder})"  >Edit</button>
        
        </div>
    </div>
</div>
    `;

    document.getElementById('editOrderForm').innerHTML = editOrderForm;
}




function validateEditOrder(id) {
    var newQty = document.getElementById("qty").value;

    var order = searchById(id,"orders")
    
    var diff = Number(newQty) - Number(order.qty);
    
    var product = searchById(order.idProduct,"products");

    if (diff > product.stock || newQty <= 0) {
        document.getElementById('qtyError').innerHTML = "Qty not available"
        document.getElementById('qtyError').style.color = "red"
    } else {
        document.getElementById('qtyError').innerHTML = ""

        // Mise à jour de la commande
        var orders = JSON.parse(localStorage.getItem("orders") || "[]");
        for (let i = 0; i < orders.length; i++) {
          if (orders[i].id == id) {
            orders[i].qty = newQty;
          }   
        }
        localStorage.setItem("orders",JSON.stringify(orders))
 
        // mise à jour du stock
        var products = JSON.parse(localStorage.getItem("products") || "[]")
        for (let i = 0; i < products.length; i++) {
            if (order.idProduct  == products[i].id) {
                products[i].stock -= diff;
            }
        }
        localStorage.setItem("products",JSON.stringify(products));
        location.reload();
    }
}


function checkout() {

    var add1=document.getElementById("add1").value; 
    var add2=document.getElementById("add2").value; 
    var zip=document.getElementById("zip").value; 
    var town=document.getElementById("town").value; 
    var street=document.getElementById("street").value; 
    // var payement = document.querySelector("input [name=selector]" ).value;


    var details= 

    {
        add1:add1,
        add2:add2,
        zip:zip,
        town:town,
        street:street,
     

    }
localStorage.setItem("details",JSON.stringify(details));
location.replace("confirmation.html");

}


function displaych() {

    var details=JSON.parse(localStorage.getItem("details"));
    var connectedUser=JSON.parse(localStorage.getItem("connectedUser"));
    
document.getElementById("iduser").innerHTML=connectedUser.id ;  
document.getElementById("lastname").innerHTML= connectedUser.firstName+" "+connectedUser.lastName 
// document.getElementById("total").innerHTML= 
document.getElementById("Street").innerHTML= details.street
document.getElementById("Street1").innerHTML= details.street
document.getElementById("City").innerHTML= details.town;
document.getElementById("City1").innerHTML= details.town;
// document.getElementById("Country").innerHTML= details.
// document.getElementById("Country1").innerHTML= details.
document.getElementById("Postcode").innerHTML= details.zip;
document.getElementById("Postcode1").innerHTML= details.zip;

}

function replaceCh(ch) {


    var newCh = ch.replace(/\\/g, "/");
    var res = newCh.replace("fakepath", "Users/Nefzi/Desktop/session 3/karma-master/img");
    return res;
  
  }

function search(e) {
    var code = e.keyCode ;
    // console.log(code);
    if (code == 13) {
        var category = document.getElementById('search_input').value;
        localStorage.setItem("categoryToSearch",category)
        location.replace("result.html")
    }

}
function displayResult() {
    var categoryToSearch = localStorage.getItem("categoryToSearch")
    var products = JSON.parse(localStorage.getItem("products") || "[]");

    var result = [];

    for (let i = 0; i < products.length; i++) {
        var category = searchById(products[i].category, "categories")
        if (categoryToSearch == category.categoryName) {
            result.push(products[i])
        }
        
    }
    var shop = ``;
    for (let i = 0; i < result.length; i++) {
        
        shop += `
        <div  class="col-lg-4 col-md-6">
    
                               <div class="single-product">
                                   <img class="img-fluid" src="${result[i].image}" alt="">
                                   <div class="product-details">
                                       <h6>${result[i].productName}</h6>
                                       <div class="price">
                                           <h6>${result[i].price} DT </h6>
                                           <h6 >${result[i].stock} pieces</h6>
                                       </div>
                                       <div class="prd-bottom">
    
                                       <button type="submit" value="submit" class="primary-btn"onclick="displaySingleProduct(${result[i].id})"  >Order</button>
    
                                       </div>
                                   </div>
                               </div>
                           
                               </div>
       `;
    }
   
    document.getElementById("shop").innerHTML = shop;

}

function setHeader() {
    
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser"))
    var header = ``;
    if (connectedUser) {
        // user connected
        if (connectedUser.role == "admin") {
            // admin
            header = `
            <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="shop.html">Shop</a></li>
            <li class="nav-item"><a class="nav-link" href="dahsboardAdmin.html">Dashboard</a></li>
            <li class="nav-item"><a class="nav-link" href="addProduct.html">ADD PRODUCT</a></li>
            <li class="nav-item"><a class="nav-link" href="addCategory.html">ADD CATEGORY</a></li>
            <li class="nav-item"><a class="nav-link" onclick="logout()" >Logout</a></li>
            `;
        } else {
            // client
            header = `
            <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="shop.html">Shop</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            <li class="nav-item"><a class="nav-link"  onclick="logout()"  >Logout</a></li>
            `;
        }
    } else {

        // Visitor
        header = `
        <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
							
        <li class="nav-item"><a class="nav-link" href="shop.html">Shop</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item"><a class="nav-link" href="signup.html">Signup</a></li>
        <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
        `;
        
    }

    document.getElementById("headerId").innerHTML  = header;
}
function logout() {
    localStorage.removeItem("connectedUser");
    location.replace("index.html")
}
