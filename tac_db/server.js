const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer")

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "tac_db"
    }
)

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,'./public/images')
    }, 
    filename: function(req,file,cb){
        return cb(null,`${Date.now()}_${file.originalname}`) 
    }
})

const upload = multer({storage})

app.get("/",(req,res) =>{
    const sql= "select * from tithes";
    db.query(sql,(err,data) => {
        if (err) return res.json("error");
        return res.json(data);
    })

})

app.post("/create",upload.single('file'),(req,res) =>{
    const sql= "insert tithes (`churchTitle`,`firstName`,`lastName`,`contactNumber`,`Province`,`Branch`,`depositedDate`,`Amount`,`popType`,`paymentProof`) values(?)";
    const values = [
        req.body.title,
        req.body.name,
        req.body.surname,
        req.body.contactNo,
        req.body.province,
        req.body.branch,
        req.body.depositedDate,
        req.body.amount,
        req.body.popType, 
        req.file.filename
    ]
    db.query(sql,[values],(err,result) => {
        if (err) return res.json({Error: "error Signup"});
        return res.json({Status: "Success"});
    })

})

app.listen(8081,() =>{
    console.log("listening");
})
