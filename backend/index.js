//import hello from "./tools.js"
var tools = require('./tools.js');
var database = require('./database.js');
var express = require('express');
var app = express();
var session = require('express-session');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./food_db');
const port = 3000;

app.use(express.static(__dirname + '/static'));


let meals = {
    "stir_fry": {
        foods : ["noodle", "sauce"]
    }
};

let meal_count = 0;
let meal_plan = [];

function getMeal(name) {
    return meals[mealName];
}

function createShoppingList(meal_plan) {
    let shopping_list = []
    for (meal in meal_plan) {
        console.log(meal);
        for (item in meal.foods) {
            console.log(item);
            shopping_list += item;
        }
    }
    return shopping_list;
}

app.use(session({secret: "Shh, its a secret!"}));
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    req.session.views++;
    res.send(req.session.views + " visits from your sexy ass");
})


app.get('/hello', (req, res) => {

    res.send(__dirname);
})

app.get('/api/meal/:name', (req, res) => {
    const mealName = req.params.name;
    //res.send(req.params.name);


    res.send({
        "meal" : meals[mealName]
    })

})

// seller, itemName, genName, unit, amount, price, allergy
app.get('/init_db', (req, res) => {

    console.log(database.init_db());
    // console.log(database.importFood("Coles", "Coles_Aussie_Beef_Sausages_680g", "sausages", "g", 680, 5, "_"));
    // console.log(database.importFood("Woolworths", "Woolworths_Aussie_Beef_Sausages_680g", "sausages", "g", 680, 4, "_"));
    // console.log(database.importFood("Coles", "Coles_Aussie_Beef_Sausages_340g", "sausages", "g", 340, 5, "_"));
    // console.log(database.importFood("Woolworths", "Woolworths_Aussie_Beef_Sausages_340g", "sausages", "g", 340, 5, "_"));
    // console.log(database.importFood("Coles", "Coles_Aussie_Beef_Sausages_1000g", "sausages", "g", 1000, 10, "_"));
    // console.log(database.importFood("Woolworths", "Woolworths_Aussie_Beef_Sausages_1000g", "sausages", "g", 1000, 10, "_"));
    // console.log(database.importFood("Leon", "Leons_Aussie_Human_Sausages_1000g", "sausages", "g", 1000, 5, "vegan"));
    console.log(database.importMeal("Spaghetti Bolognese"));
    console.log(database.importMeal("Spaghetti Bolognese2"));
    console.log(database.importMeal("Spaghetti Bolognese3"));
    // res.send("done");

})


/*
app.post('/api/list/', (req, res) => {

})
*/

//app.put('meal')
/*
app.get('/api/list/', (req, res) => {
    req.session.meal_plan = [];
    req.session.meal_plan+=
    let meal_plan = req.session.meal_plan;
    let shopping_list = createShoppingList(meal_plan);
    res.send({
        list : shopping_list
    });

})
*/
//app.get('/', function (req, res))

app.listen(port, () => {
    console.log(`Running server on port ${port}...`)
})
