var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('food_db');


exports.init_db = function(){

    let createFoodT = `CREATE TABLE if not exists food(foodID INTEGER PRIMARY KEY AUTOINCREMENT, 
                                                        seller TEXT NOT NULL,
                                                        itemName TEXT NOT NULL, 
                                                        genName TEXT, 
                                                        unit TEXT NOT NULL, 
                                                        amount INTEGER NOT NULL, 
                                                        price INTEGER NOT NULL, 
                                                        allergy TEXT NOT NULL)`;

    let createMealT = `CREATE TABLE if not exists meal(mealID INTEGER PRIMARY KEY AUTOINCREMENT, 
                                                        mealName TEXT NOT NULL)`;

    let createIngrT = `CREATE TABLE if not exists ingredient(mealID INTEGER NOT NULL, 
                                                        foodID INTEGER NOT NULL, 
                                                        quantity INTEGER NOT NULL)`;



    db.run(createFoodT);
    db.run(createMealT);
    db.run(createIngrT);

    return "done"

}

exports.importFood = function(seller, itemName, genName, unit, amount, price, allergy){
    let foodEntry = `INSERT INTO food(seller, itemName, genName, unit, amount, price, allergy)
                            VALUES((${seller}), (${itemName}), (${genName}), (${unit}), (${amount}), (${price}), (${allergy}))`;
    db.run(foodEntry);
    let search = `SELECT foodID FROM food WHERE seller = (${seller}) AND itemName = (${itemName})`;
    res = db.run(search);
    console.log(res.foodID);

    return "imported food";
}

const importMeal = function (mealName){
    let mealEntry = "INSERT INTO meal(mealName) VALUES('" + mealName + "')";
    db.run(mealEntry, [], (err, res) => {
        if(err) {
            console.log("lol " + err);
        }
    });


    let search = "SELECT * FROM meal WHERE mealName='" + mealName + "'";
    console.log(search);
    db.get(search, [], (err, res) => {
        if(err) {
            console.log("adam" + err);
        } else {
            // console.log("id is " + res["mealID"]);
            var id = res["mealID"];
            console.log(id);
        }
    });

    return "meal added";

}

exports.importMeal = importMeal;


const getFoodIDFromName = function(seller, itemName){
    let getFoodID = `SELECT foodID FROM food WHERE seller = "${seller}" AND itemName = "${itemName}"`;

    db.run(getFoodID);
}


exports.getFoodIDFromName = getFoodIDFromName;


// @app.route('/initdb')
// function getFoodID(){
//     return db.run(`SELECT foodID from food`);

// }



// func main() {

//     save_player(2, 100, (arr) => {

//         if (arr["error"]) {
//             console.log(":something fuckedf up" + arr["error_code"]);
//         } else {
//             // good
//         }

//     });

//     load_player(1, (err, response) => {
//         if(err) {
//             console.log('fuck')
//             return;
//         }

//         let score = response["rows"]["score"]
//         let nane = response["rows"]["name"]

//         Player player = new Player(2, name, score) 

//     });
    

// }





// func load_player(id, callback) {
//     let sql = `SELECT name, score FROM players WHERE id=?`;
 
//     db.all(sql, [id], callback);
// }



