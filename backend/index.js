var express = require('express');
var app = express();
var session = require('express-session');
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

app.get('/api/meal/:name', (req, res) => {
    const mealName = req.params.name;
    //res.send(req.params.name);


    res.send({
        "meal" : meals[mealName]
    })

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
