//import hello from "./tools.js"
var tools = require('./tools.js')

var express = require('express');
var app = express();
var session = require('express-session');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('/home/leon/MagicMeal/magic-meals/backend/food_db');
const port = 3000;



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

    res.send(tools.hello());
})

app.get('/api/meal/:name', (req, res) => {
    const mealName = req.params.name;
    //res.send(req.params.name);


    res.send({
        "meal" : meals[mealName]
    })

})

app.get('/index', (req, res) => {
    res.render('./index.html')
})

app.get('/init_db', (req, res) => {

    // db.run (`CREATE DATABASE food_db`);
    let createFoodT = `CREATE TABLE food(foodID INTEGER PRIMARY KEY,
                                                itemName TEXT NOT NULL,
                                                genName TEXT,
                                                unit TEXT NOT NULL,
                                                amount INTEGER NOT NULL,
                                                price INTEGER NOT NULL,
                                                allergy TEXT NOT NULL)`;

    let createMealT = `CREATE TABLE meal(mealID INTEGER PRIMARY KEY,
                                                mealName TEXT NOT NULL)`;

    let createIngrT = `CREATE TABLE ingredient(mealID INTEGER NOT NULL,
                                                foodID INTEGER NOT NULL,
                                                quantity INTEGER NOT NULL)`;



    db.run(createFoodT);
    db.run(createMealT);
    db.run(createIngrT);
    res.send("done");

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
