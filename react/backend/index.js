const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

app.use(cors());
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



app.get('/api/v1/test', (req, res) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {

        if (err) {
            res.json({
                status: false,
                message: "Something Went Wrong !"
            });

        } else {

            res.json({
                "status": true,
                "message": "All products",
                "products": result
            });

        }

    });


});


app.post('/api/v1/user/register', (req, res) => {

    const {
        email,
        name,
        phone,
        password,
        gender,
        address
    } = req.body;

    const sql = "INSERT INTO users (email,name,password,phone,gender,address,created_at) VALUE (?,?,?,?,?,?, NOW() ) ";

    db.query(sql, [email, name, password, phone, gender, address], (err, result) => {

        if (err) {

            res.json({
                status: false,
                message: "Something Wrong !!" + err
            });

        } else {

            res.json({
                status: true,
                message: "User Registered !!"
            });

        }

    });

});


app.post('/api/v1/user/login', (req, res) => {

    const { email, pass } = req.body;

    // Validate input
    if (!email || !pass) {
        return res.status(400).json({
            status: false,
            message: "Email and password are required."
        });
    }

    const sql = "SELECT id,email,name FROM users WHERE email=? AND password=?";

    db.query(sql, [email, pass], (err, result) => {

        if (err) {
            res.json({
                status: false,
                message: "Something Went Wrong !"
            });

            return;
        }

        if (result.length == 0) {
            res.json({
                status: false,
                message: "Invalid Credentials !"
            });
            return;
        }


        res.json({
            status: true,
            message: "User data",
            user: result[0]
        });


    });

});


app.put('/api/v1/user/edit/:id', (req, res) => {

    const { id } = req.params;
    const { name, address, phone, gender } = req.body

    if (!name || !address || !phone || !gender) {
        return res.status(400).json(
            {
                status: false,
                message: "name / address/ phone /gender are required"
            }
        );
    }


    const sql = "UPDATE users SET name=?,address=? ,phone=? , gender=? ,updated_at= NOW() WHERE id=?";

    db.query(sql, [name, address, phone, gender, id], (err, result) => {

        if (err) {
            res.status(500).json({
                status: false,
                message: "Something Went Wrong!"
            });

            return;
        }

        res.status(200).json({
            status: true,
            message: "User Record Updated !"
        });
    });

});



app.listen(3000, () => {
    console.log('Server is Running');
});