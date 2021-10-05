$(document).ready(() => {
    var $menuItems = $("#MenuItems")

    $(".menu-icon").on('click', function() {
        $menuItems.css({maxHeight: "200px"}).toggle()
    })

    // const createProducts = (classOfDiv) => {
    //     let img = $(classOfDiv)
    //     return img
    // }

    $.getJSON("./data.json", function(data) {
        const createProducts = (classOfDiv, indexOfProduct) => {
            let product = $(classOfDiv).append($("<img>").attr('src', data[indexOfProduct].image))
            return product
        }

        const createProductsWithDetails = (classOfDiv, indexOfProduct) => {
            let product = $(classOfDiv).append($("<img>").attr('src', data[indexOfProduct].image), $("<h4>").text(data[indexOfProduct].title), $("<p>").text(data[indexOfProduct].price))
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


        // createProducts(".col-3.img1").append($("<img>").attr('src', data[0].image))
        // createProducts(".col-3.img2").append($("<img>").attr('src', data[1].image))
        // createProducts(".col-3.img3").append($("<img>").attr('src', data[2].image))

        // createProducts(".col-4.img1").append($("<img>").attr('src', data[3].image), $("<h4>").text(data[3].title), $("<p>").text(data[3].price))
        // createProducts(".col-4.img2").append($("<img>").attr('src', data[4].image), $("<h4>").text(data[4].title), $("<p>").text(data[4].price))
        // createProducts(".col-4.img3").append($("<img>").attr('src', data[5].image), $("<h4>").text(data[5].title), $("<p>").text(data[5].price))
        // createProducts(".col-4.img4").append($("<img>").attr('src', data[6].image), $("<h4>").text(data[6].title), $("<p>").text(data[6].price))

        // createProducts(".col-4.img5").append($("<img>").attr('src', data[7].image), $("<h4>").text(data[7].title), $("<p>").text(data[7].price))
        // createProducts(".col-4.img6").append($("<img>").attr('src', data[8].image), $("<h4>").text(data[8].title), $("<p>").text(data[8].price))
        // createProducts(".col-4.img7").append($("<img>").attr('src', data[9].image), $("<h4>").text(data[9].title), $("<p>").text(data[9].price))
        // createProducts(".col-4.img8").append($("<img>").attr('src', data[10].image), $("<h4>").text(data[10].title), $("<p>").text(data[10].price))
        // createProducts(".col-4.img9").append($("<img>").attr('src', data[11].image), $("<h4>").text(data[11].title), $("<p>").text(data[11].price))
        // createProducts(".col-4.img10").append($("<img>").attr('src', data[12].image), $("<h4>").text(data[12].title), $("<p>").text(data[12].price))
        // createProducts(".col-4.img11").append($("<img>").attr('src', data[13].image), $("<h4>").text(data[13].title), $("<p>").text(data[13].price))
        // createProducts(".col-4.img12").append($("<img>").attr('src', data[14].image), $("<h4>").text(data[14].title), $("<p>").text(data[14].price))
    })
})