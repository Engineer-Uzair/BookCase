// start sidebar
function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
// end sidebar

document.addEventListener('keydown', function(event) {
    // Disable F12
    if (event.key === 'F12') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+I (Dev Tools)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+C (Inspect)
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+K (Console in Firefox)
    if (event.ctrlKey && event.shiftKey && event.key === 'K') {
        event.preventDefault();
        return false;
    }
  
    // Disable Ctrl+Shift+I (Dev Tools)
    if (event.ctrlKey && event.shiftKey && event.key === 'i') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.key === 'j') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+C (Inspect)
    if (event.ctrlKey && event.shiftKey && event.key === 'c') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+K (Console in Firefox)
    if (event.ctrlKey && event.shiftKey && event.key === 'k') {
        event.preventDefault();
        return false;
    }
  
  });
  
     // Disable right-click context menu
     document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      return false;
    });

const btns = document.querySelectorAll("[data-target]");
const close_modals =document.querySelectorAll(".close-modal");
const overlay =document.getElementById("overlay");

// for opening popup
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active")
    });
});

// For closeing popup using "X" sing
close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
});
});

// After opening popup, if you click outside the popup, it will close.
window.onclick=(event) => {
    if(event.target == overlay){
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};

// Contact form validation
function validate(){
    var name = document.getElementById("name").Value;
    var subject = document.getElementById("subject").Value;
    var phone = document.getElementById("phone").Value;
    var email = document.getElementById("email").Value;
    var message = document.getElementById("message").Value;
    var error_message = document.getElementById("error_message").Value;
    error_message.style.padding ="10px";
    var text;

// Asian names can be three-letter names such as lee or Mae hence limit >=3
if(name.length < 2){
    text = "Please Enter Valid Name (Minimum 3 characters)";
    error_message.innerHTML =text;
    return false;
}

if(subject.length < 10){
    text = "Please Enter Correct Subject (Minimum 10 characters)";
    error_message.innerHTML =text;
    return false;
}


if(isNaN(phone) || phone.length !== 10) {
    text = "Please Enter valid Phone Number (10-digit)";
    error_message.innerHTML = text;
    return false;
}

// Message should have more than 140 characters
if(message.length <= 140){
    text ="Please enter more than 140 characters";
    error_message.innerHTML = text;
    return false;
}

// Message should have less than 500 characters
if(message.length >= 500){
    text ="Please enter less than 500 characters";
    error_message.innerHTML = text;
    return false;
}

// This Alert messae will appper if all form fields are filled correctly
 alert("Form submitted succesfully! Thank you for contacting Us");
 return true;


}


// Search Functionality
function filter(){
    var filterValue, input, ProductList,ProductName,h4,i;
    input = document.getElementById("Search");
    filterValue = input.Value.toUpperCase();
    ProductList = document.getElementById("product-list");
    ProductName = document.getElementsByClassName("col-4");
    for (i = 0; i < ProductName.length ; i++){
        h4 = ProductName[i].getElementsByTagName("h4")[0];
        // In search if typed string matches with the element name.
        if(h4.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            ProductName[i].style.display = "";
        }
        else{

            ProductName[i].style.display = "none";
        }
    }
}

// Sort by price
function sortlist(){
    var ProductList, ProductionName, i, switching, b, c, shouldSwitch;
    ProductList = document.getElementById("product-list");
    ProductionName =  ProductList.getElementsByClassName("col-4")
    switching = true; //Boolean true
    while (switching){
        switching = false;
        // loop is runinng through each product
        for(i = 0 ; 1 < (ProductionName.length - 1); i++){
            shouldSwitch = false;
            b = ProductionName[i].getElementsByTagName("span")[0].innerHTML;
            c = ProductionName[i+i].getElementsByTagName("span")[0].innerHTML;
            // Condition to check price for each product item
            if (Number(b) > (c)){
                shouldSwitch = true;
                break;
            }
        }
        // Each product element will switch with next product element based on product price sorting.
        if(shouldSwitch){
            ProductionName[i].parentNode.insertBefore(ProductionName[i+i], ProductionName[i]);
            switching = true
        }
    }
}

