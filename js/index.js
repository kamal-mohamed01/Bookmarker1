var bookmarkName =document.getElementById('bookmarkName');
var bookmarkURL =document.getElementById('bookmarkURL');
var tableContent =document.getElementById('tableContent');
var divShow= document.getElementById("divShow");
var closeBtn = document.getElementById("closeBtn")
var prodactsContanir = []
if (localStorage.getItem ("prodacs") != null) {
    prodactsContanir =JSON.parse( localStorage.getItem("prodacs"));
    displayProdacts (prodactsContanir);
}
function addProdact() {
    if (validateProdactName() == true) {
    
        var prodact = {
        name : bookmarkName.value,
        bookmarkURL : bookmarkURL.value
        }
        prodactsContanir.push(prodact);
        localStorage.setItem("prodacs",JSON.stringify (prodactsContanir))
        displayProdacts (prodactsContanir);
        clearForm ()
    }
    else{
        divValidate()
    }
}
function divValidate() {
    divShow.classList.replace("d-none","d-block")
}
function clearForm (){
        bookmarkName.value ='';
    bookmarkURL.value ="";
}
function displayProdacts() {
    var box = '';
    for (var i = 0; i < prodactsContanir.length; i++)  {
        box += `<tr>
        <td>${i+1}</td>
        <td>${prodactsContanir[i].name}</td>
        <td><button onclick="goToPage(this)" value= "${prodactsContanir[i].bookmarkURL}" class="btn btn-visit btn-sm">
        <i class="fa-solid fa-eye pe-2"></i>
        <a href=""></a>visit</button>
        </td>
        <td><button onclick="deletProdact(${i})" class="btn btn-delete btn-sm">
        <i class="fa-solid fa-trash-can"></i>
        Delete</button></td>
    </tr>`; 
    }
    tableContent.innerHTML = box;
}
function deletProdact(prodactIndex) {
    prodactsContanir.splice(prodactIndex,1)
    localStorage.setItem("prodacs",JSON.stringify (prodactsContanir))

    displayProdacts (prodactsContanir)
}
function closeDiv() {
    divShow.classList.replace("d-block","d-none")
}
closeDiv()
function goToPage(link)
{
window.open(link.value);
}
function validateProdactName() {
    var regex = /^[a-z]{3,15}$/;
    return regex.test(bookmarkName.value)
}
function validateProdactName() {
    var regex = /(http|ftp|https|www)([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?$/;
    return regex.test(bookmarkURL.value)
}









