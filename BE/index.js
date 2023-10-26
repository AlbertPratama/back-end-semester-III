import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoutes.js";

const app = express();
const port = 5001; // Ubah port ke 3001 atau yang lain jika 3000 sudah digunakan.

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(port, () => console.log(`Server Up and Running on port ${port}...`));























































// import express from "express";
// import FileUpload from "express-fileupload";
// import cors from "cors";
// import ProductRoute from "./routes/ProductRoutes.js";

// // const app = express();

// // app.use(cors());
// // app.use(express.json());
// // app.use(FileUpload());
// // app.use(express.static("public"));
// // app.use(ProductRoute);

// // app.listen(5000, ()=> console.log('Server Up and Running...'));











































//const express = require('express')
// const app = express()
// const port = 3000
// const bodyParser = require('body-parser')
// const db = require('./connection.js')
// const response = require('./response')

// // app.use(bodyParser.json())

// // app.get("/", (req, res) => {

// // })

// // app.post("/", (req, res) => {

// // })

// // app.put("/", (req, res) => {

// // })

// // app.delete("/", (req, res) => {

// // })


// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })



























































// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   const sql = "SELECT * FROM `produk`"
//   db.query(sql, (error,result) => {
//     response(200, result, "get all data produk", res)
//   })
// });

// // db.query (sql, (error, result)) => {
// //   if (error) {
// //     console.log(error);
// //     response
// //     res.status(500).send('Error in database operation');
// //   } else {
// //     console.log(result);
// //     res.send(result);
// //   }
// // }

// app.get('/Hello', (req, res) => {
//   res.send('Hello World!')
// })

// // // if you call both data
// // app.get('/Hello', (req, res) => {
// //   console.log({urlParam : req.query})
// //   res.send('Hello World!')
// // })

// // // if you call addres only
// // app.get('/Hello', (req, res) => {
// //   console.log({urlParam : req.query.address})
// //   res.send('Hello World!')
// // })

// // if you call name only
// app.get('/find', (req, res) => {
//   const sql = `SELECT nama FROM produk WHERE id_produk = ${req.query.id_produk}`
//   db.query(sql, (error, result) => {
//     response(200, result, "find produk name", res)
//   })
//   // console.log('find id_produk: ', req.query.id_produk)
// })

// app.post('/login', (req, res) => {
//   console.log({requestFromOutside: req.body})
//   res.send('Sukses')
// })

// app.put('/username', (req, res) => {
//   console.log({updateData: req.body})
//   res.send('udah diganti ngab')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 