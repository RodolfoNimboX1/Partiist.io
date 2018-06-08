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

// renders list
$("#add").on("click", displayList);

function displayList () {
    console.log("click");
for (var i = 0; i < partyProducts.length; i++){
    var products = partyProducts[i];
    var URL = "https://api.walmartlabs.com/v1/search?apiKey=868k2y3778cqn6rf4prcrem4&query="+products;

    // ajax call for pricing
    $.ajax({
        url: URL,
        method: "GET",
        dataType: "JSON"
    }).then(function(response){
        console.log(URL);
        console.log(response);

        // storing price data from ajax
        var productPrice= response.data.items[0].salePrice;
        console.log(productPrice);

    var list = $("<ol>");
    var products = $("<ul>").text(partyProducts[i]+ " " + productPrice);
    list.append(products);
    $("#listHolder").append(list);
    });
};

};

// add new product
$("#add-new").on("click", addProduct);

function addProduct () {
    var newProduct = $("#new-product").val().trim();
    var newItem = $("<ul>").text(newProduct);
    $("#newFD").append(newItem);
    partyProducts.push(newProduct);
    console.log(partyProducts);
};


// party name display

$("#add-party").on("click", addName);

function addName () {
    var partyName = $("#party-name").val().trim();
    console.log(partyName);
    $("#myparty").append(partyName);
}

// date picker
$("#add-date").on("click", addDate);

function addDate () {
    var date = $("#datepicker").val();
    console.log(date);
    $("#date-holder").append(date);
};

// create a new party

$("#add").on("click", newParty);

function newParty () {

    // creates The Partyers
    var thePartyersColor = $("<div>").attr("class", "column box");
    thePartyersColor.attr("id", "thePartyersColor");
    var thePartyers = $("<div>").attr("class", "has-text-weight-bold");
    thePartyers.text("The Partyers");
    thePartyersColor.append(thePartyers);
    // here goes the logic to append the new attendees
    // new div to hold attendees
    // append to thePartyersColor
    $("#theScrollBoxColor").append(thePartyersColor);

    // creates Food & Drinks section
    var theFoodColor = $("<div>").attr("class", "column box");
    theFoodColor.attr("id", "theFoodColor");
    var foodNdrinks = $("<div>").attr("class", "has-text-weight-bold");
    foodNdrinks.text("Food & Drinks");
    theFoodColor.append(foodNdrinks);
    var listHolder = $("<div>").attr("id", "listHolder");
    displayList ();
    $("#theScrollBoxColor").append(theFoodColor);

    // creates Party Details
    var theMoneyColor = $("<div>").attr("class", "column box");
    theMoneyColor.attr("id", "theMoneyColor");
    var partyDetails = $("<div>").attr("class", "has-text-weight-bold")
    partyDetails.text("Your Party Details:");
    theMoneyColor.append(partyDetails);
    //Party Name
    var myParty = $("<span>");
    var myPartyHolder = $("#myparty").val();
    myParty.append(myPartyHolder);
    theMoneyColor.append(myParty);
    // The bucks
    // missing logic :(
    //
    // Party Date
    var partyDate = $("<div>");
    var dateHolder = $("#date-holder").val();
    partyDate.append(dateHolder);
    theMoneyColor.append(partyDate);
    $("#theScrollBoxColor").append(theMoneyColor);
};


