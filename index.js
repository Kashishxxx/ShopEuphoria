const express = require("express");     // importing express library
const app = express();  // this is our application
const mongoose = require("mongoose"); 
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/Cart")
const orderRoute = require("./routes/order")

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection Successfull!"))
        .catch((err) => {
            console.log(err);
        })

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

// app.get("/api/test", () => {
//     console.log("test is successful");
// })

app.listen(process.env.PORT || 8000, () => {
    console.log("Backend server is running");
})
