var MenuItems = document.getElementById("MenuItems")

MenuItems.style.maxHeight = "0px"

const menutoggle = () => {
    if(MenuItems.style.maxHeight == "0px") {
        MenuItems.style.visibility = "show"
        MenuItems.style.maxHeight = "200px"

    } else {
        MenuItems.style.maxHeight = "0px"
    }
}

$(document).ready(() => {
    const addImgClass = (classOfDiv) => {
        let img = $(classOfDiv)
        return img
    }

    // const appendImg = (indexOfImg) => {
    //     addImgCategories()
    // }

    $.getJSON("./data.json", function(data) {
        addImgClass(".col-3.img1").append($("<img>").attr('src', data[0].image))
        addImgClass(".col-3.img2").append($("<img>").attr('src', data[1].image))
        addImgClass(".col-3.img3").append($("<img>").attr('src', data[2].image))

        addImgClass(".col-4.img1").append($("<img>").attr('src', data[3].image), $("<h4>").text(data[3].title), $("<p>").text(data[3].price))
        addImgClass(".col-4.img2").append($("<img>").attr('src', data[4].image), $("<h4>").text(data[4].title), $("<p>").text(data[4].price))
        addImgClass(".col-4.img3").append($("<img>").attr('src', data[5].image), $("<h4>").text(data[5].title), $("<p>").text(data[5].price))
        addImgClass(".col-4.img4").append($("<img>").attr('src', data[6].image), $("<h4>").text(data[6].title), $("<p>").text(data[6].price))

        addImgClass(".col-4.img5").append($("<img>").attr('src', data[7].image), $("<h4>").text(data[7].title), $("<p>").text(data[7].price))
        addImgClass(".col-4.img6").append($("<img>").attr('src', data[8].image), $("<h4>").text(data[8].title), $("<p>").text(data[8].price))
        addImgClass(".col-4.img7").append($("<img>").attr('src', data[9].image), $("<h4>").text(data[9].title), $("<p>").text(data[9].price))
        addImgClass(".col-4.img8").append($("<img>").attr('src', data[10].image), $("<h4>").text(data[10].title), $("<p>").text(data[10].price))
        addImgClass(".col-4.img9").append($("<img>").attr('src', data[11].image), $("<h4>").text(data[11].title), $("<p>").text(data[11].price))
        addImgClass(".col-4.img10").append($("<img>").attr('src', data[12].image), $("<h4>").text(data[12].title), $("<p>").text(data[12].price))
        addImgClass(".col-4.img11").append($("<img>").attr('src', data[13].image), $("<h4>").text(data[13].title), $("<p>").text(data[13].price))
        addImgClass(".col-4.img12").append($("<img>").attr('src', data[14].image), $("<h4>").text(data[14].title), $("<p>").text(data[14].price))
    })
})