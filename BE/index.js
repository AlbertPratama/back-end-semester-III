import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoutes.js";

const app = express();
const port = 5001; 

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(port, () => console.log(`Server Up and Running on port ${port}...`));
