const express = require('express');
const app = express();
const mysql = require('mysql2');


app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "corvit",

});

db.getConnection((err, con) => {

    if (err) {
        console.log("DB not Connected !!");
    } else {
        console.log("Connection Success !!");
    }

    con.release();

});










app.listen(3000, () => {
    console.log('Server is Running');
});