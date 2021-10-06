$(document).ready(() => {
    // Get element <nav> <ul> by id="MenuItems"
    var $menuItems = $("#MenuItems")

    // Adding onClick fuction to the <img> with class=".menu-icon"
    $(".menu-icon").on('click', function() {
        // Setting the maxHeight of #MenuItems Div with a class toggle() to hide or show when clicked
        $menuItems.css({maxHeight: "200px"}).toggle()
    })

    // Getting the data from json file
    $.getJSON("./data.json", function(data) {
        // Fuction that takes 2 parameters clssOfDiv, indexOfProduct
        // Append <img> with picture of the product to display
        const createProducts = (classOfDiv, indexOfProduct) => {
            let product = $(classOfDiv).append($("<img>").attr('src', data[indexOfProduct].image))
            return product
        }

        // Fuction that takes 2 parameters classOfDiv, indexOfProduct which use the same index to get the tittle and price of the product 
        // Append <img> with the picture, tittle and price of the product to display
        const createProductsWithDetails = (classOfDiv, indexOfProduct) => {
            let product = $(classOfDiv).append($("<img>").attr('src', data[indexOfProduct].image), 
            $("<h4>").text(data[indexOfProduct].title), $("<p>").text(data[indexOfProduct].price))
            return product
        }

        createProducts(".col-3.img1", 0)
        createProducts(".col-3.img2", 1)
        createProducts(".col-3.img3", 2)

        createProductsWithDetails(".col-4.img1", 3)
        createProductsWithDetails(".col-4.img2", 4)
        createProductsWithDetails(".col-4.img3", 5)
        createProductsWithDetails(".col-4.img4", 6)
        createProductsWithDetails(".col-4.img5", 7)
        createProductsWithDetails(".col-4.img6", 8)
        createProductsWithDetails(".col-4.img7", 9)
        createProductsWithDetails(".col-4.img8", 10)
        createProductsWithDetails(".col-4.img9", 11)
        createProductsWithDetails(".col-4.img10", 12)
        createProductsWithDetails(".col-4.img11", 13)
        createProductsWithDetails(".col-4.img12", 14)
    })
})