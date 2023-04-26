// var express = require('express');
// var router = express.Router();
// const mysql = require('../db/db')


// router.get('/', async (req, res) => {
//     const sql = 'SELECT * FROM ACADEMY';
//     try {
//         mysql.getConnection((err,connection)=>{
//             console.log("connection_pool GET");
//             if(err) throw err;
//             connection.query(sql,(err,result,fields)=>{
//                 if(err){
//                     console.error("connection_pool GET error / "+err);
//                     res.status(500).send("message : Internal Server Error");
//                 }
//                 else{
//                     if(result.length === 0){
//                         res.status(400).send({
//                             success : false,
//                             message : "DB response Not Found"
//                         });
//                     }
//                     else{
//                         res.status(200).send({
//                             success : true,
//                             result
//                         });
//                     }
//                 }
//             });
//             connection.release();
//         });
//     } catch(err){
//         console.error("connection_pool GET Error / "+err);
//         res.status(500).send("message : Internal Server Error");
//     }
    
// });

// router.get('/members/teachers', async (req, res) => {
//     const conn = await getConn();
//     const query = 'SELECT * FROM TEACHER';
//     let [rows, fields] = await conn.query(query, []);
//     conn.release();

//     res.send(rows);
// });


// router.get('/members/teachers/:id', async (req, res) => {
//     const conn = await getConn();
//     const id = req.params.id;
//     const query = 'SELECT * FROM TEACHER WHERE ID = '+req.params.id;
//     let [rows, fields] = await conn.query(query, []);
//     conn.release();

//     res.send(rows);
// });

// router.get('/members/students', async (req, res) => {
//     const conn = await getConn();
//     const query = 'SELECT * FROM STUDENT';
//     let [rows, fields] = await conn.query(query, []);
//     conn.release();

//     res.send(rows);
// });

// module.exports = router;