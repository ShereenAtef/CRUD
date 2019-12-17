





var ProductContainer;

if (localStorage.getItem("ProductsData") == null) {
    ProductContainer = [];
}
else {
    ProductContainer = JSON.parse(localStorage.getItem("ProductsData"));
    display();
}



function Add() {

    var radioButtons = document.getElementsByName("onsale");
    var ProductName = document.getElementById("ProductName").value;
    var ProductPrice = document.getElementById("ProductPrice").value;
    var ProductCategory = document.getElementById("ProductCategory").value;
    var ProductDesc = document.getElementById("ProductDesc").value;
    

    var Value;
    if (radioButtons[0].checked == true) {

        Value = true;

    }
    else {
        Value = false;
    }

    var Product =
    {
        name: ProductName,
        Price: ProductPrice,
        Category: ProductCategory,
        Des: ProductDesc,
        onSale: Value

    }

    ProductContainer.push(Product);

    localStorage.setItem("ProductsData", JSON.stringify(ProductContainer));

    display();



}




function display() {
    var temp = "";
    for (i = 0; i < ProductContainer.length; i++) {

        temp += ` <div class="col-md-3">
    <div class="parent">
        <img class="img-fluid" src="css/images/portfolio-2.jpg">
        <h3>`+ ProductContainer[i].name + `</h3>
        <p>`+ ProductContainer[i].Des + `</p>
        <p>`+ ProductContainer[i].Price + `</p>
        <p>`+ ProductContainer[i].Category + `</p>`;
        if (ProductContainer[i].onSale == true) {
            temp += '<div class="mov bg-danger p-3">Sale</div>';
        }
        temp += `<button onclick="deleteProduct(` + i + `)" class="btn btn-sm btn-outline-danger">delete</button>
        <button onclick="updateProduct(`+ i + `)" class="btn btn-sm btn-outline-info">update</button>

        </div>
</div>`;
    }



    document.getElementById("ProductDisplay").innerHTML = temp;






}

// function test()
// {
//     console.log(document.getElementById("SearchProduct").value);
// }


function SearchProduct(Term) {



    var temp = "";
    for (i = 0; i < ProductContainer.length; i++) {



        if (ProductContainer[i].name.toLowerCase().includes(Term.toLowerCase()) || ProductContainer[i].Price.toLowerCase().includes(Term.toLowerCase())) {

            temp += ` <div class="col-md-3">
                <div class="parent" >
                    <img class="img-fluid" src="css/images/portfolio-2.jpg">
                        <h3>`+ ProductContainer[i].name + `</h3>
                        <p>`+ ProductContainer[i].Des + `</p>
                        <p>`+ ProductContainer[i].Price + `</p>
                        <p>`+ ProductContainer[i].Category + `</p>`

            if (ProductContainer[i].onSale == true) {
                temp += `<div class="mov bg-danger p-3">Sale</div>`;
            }
            temp += `
                         </div>
                 </div>`;














        }


    }

    document.getElementById("ProductDisplay").innerHTML = temp;

}

function deleteProduct(index) {
    var deleted = ProductContainer.splice(index, 1);
    localStorage.setItem("ProductsData", JSON.stringify(ProductContainer));

    display();
}


function updateProduct(index2) {
    // temp = "";
    // for (i = 0; i < ProductContainer.length; i++) {
    //     if (i == index2) {
    //         temp += `  <div class="col-md-3">
    //         <div class="parent">
    //             <img class="img-fluid" src="css/images/portfolio-2.jpg">
    //             <h3>`+ ProductContainer[i].name + `</h3>
    //             <p>`+ ProductContainer[i].Des + `</p>
    //             <p>`+ ProductContainer[i].Price + `</p>
    //             <p>`+ ProductContainer[i].Category + `</p>`;


    //         if (ProductContainer[i].onSale == true) {
    //             temp += '<div class="mov bg-danger p-3">Sale</div>';
    //         }


    //         temp += `<button onclick="deleteProduct(` + i + `)" class="btn btn-sm btn-outline-danger">delete</button>
    //             <button onclick="updateProduct(`+ i + `)" class="btn btn-sm btn-outline-info">update</button>


    //             </div>
    //     </div>`;

    //         document.getElementById("ProductDisplay").innerHTML = temp;





    document.getElementById("ProductName").value = ProductContainer[index2].name;

    document.getElementById("ProductDesc").innerHTML = ProductContainer[index2].Des;

    document.getElementById("ProductPrice").value = ProductContainer[index2].Price;

    document.getElementById("ProductCategory").value = ProductContainer[index2].Category;

    if (ProductContainer[index2].onSale == true) {
        document.getElementById("R1").checked = true;
        
    }

    else {
        
        document.getElementById("R1").checked = false;
    }

    // document.getElementById("B1").style.visibility = 'hidden';

    // document.getElementById("B2").style.visibility = 'visible';
    document.getElementById("B1").innerHTML = "update product"





    // var elm=document.getElementById("B1");

    document.getElementById("B1").addEventListener("click", function SaveUpdates(index2) {

        console.log(index2);

       
        if (radioButtons[0].checked == true) {

            Value = true;

        }
        else {
            Value = false;
        }

        var updatedContainer =
        {
            
            Price: document.getElementById("ProductPrice").value,
            Category: document.getElementById("ProductCategory").value,
            Des: document.getElementById("ProductDesc").value,
            onSale: Value


        }
        ProductContainer[index2].name=document.getElementById("ProductName").value;
        console.log(updatedContainer);

        console.log(ProductContainer);


         var Updated = ProductContainer.splice(index2, 1, updatedContainer);

        // ProductContainer.splice(index2, 1, updatedContainer);
        localStorage.setItem("ProductsData", JSON.stringify(ProductContainer));



        display();
    })

}




// function SaveUpdates(index3) {

//     //     var container1=[1,2,3];
//     //    var container2=[];


//     //    var object=
//     //    {name:5}


//     //    container2.push(object);


//     //    container1[0]= container2[0];
//     //    //object= updated object

//     //    console.log(container1);



// }











































































