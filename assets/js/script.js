// FOOD & DRINK CALL API SECTION

var partyProducts = [
    "Great Value Chunk Chicken Breast in Water, 12.5 oz, 2 Count",
    "Armour Hearty Homestyle Corned Beef Hash, 14 oz",
    "McCormick® Minced Onions, 2 oz",
    "Kingsford Match Light Charcoal Briquettes, 11.6 lbs",
    "Idaho Spuds Classic Mashed Potatoes, 26.7 oz",
    "Hunt's Petite Diced Tomatoes, 14.5 Oz, 6 Count Box",
    "Lay's Potato Chips Party Size, Classic, 15.25 Oz",
    "Lay'sÂ® Barbecue Flavored Potato Chips 9.5 oz. Bag",
    "Lay's Sour Cream & Onion Flavored Potato Chips, 9.5 oz. Bag",
    "Coca-Cola Soda, 12 Fl Oz, 12 Count",
    "Sprite Lemon-Lime Soda, 12 Fl Oz, 12 Count",
    "Diet Coca-Cola Diet Soda, 12 Fl Oz, 12 Count",
    "Chinet Dinner Classic White Plates, 10 3/8\", 80 Count",
    "Great Value Clear Plastic Cups, 9 oz, 80 Count",
    "Great Value White Forks, 100 ct"
];

// api key for walmart 868k2y3778cqn6rf4prcrem4 

$("#add").on("click", displayList);

function displayList () {
    console.log("click");
    $("#random-list").empty();
for (var i = 0; i < partyProducts.length; i++){
    var products = partyProducts[i];
    var URL = "https://api.walmartlabs.com/v1/search?apiKey=868k2y3778cqn6rf4prcrem4&query="+products;

    // ajax call for pricing
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function(response){
        console.log(URL);
        console.log(response);

        // storing price data from ajax
        var productPrice= response.items[0].salePrice;
        console.log(productPrice);

    var list = $("<ol>");
    var products = $("<ul>").text(partyProducts[i]+ " " + productPrice);
    list.append(products);
    $("#add-product").append(list);
    });
};

};