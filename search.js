// Function to filter products based on search input
function filterProducts() {
    let input, filter, sections, products, productName, i, j;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    sections = document.getElementsByClassName("product-section");
    sections = document.getElementsByClassName("section");
    // Loop through each product section
    for (i = 0; i < sections.length; i++) {
        products = sections[i].getElementsByClassName("product");
        
        // Loop through each product within the section
        for (j = 0; j < products.length; j++) {
            productName = products[j].getElementsByTagName("h3")[0];
            
            // If the product name matches the search input, display it, otherwise hide it
            if (productName.innerHTML.toUpperCase().indexOf(filter) > -1) {
                products[j].style.display = "";
            } else {
                products[j].style.display = "none";
            }
        }
    }
}

