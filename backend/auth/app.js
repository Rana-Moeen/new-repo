const express = require("express");
const app = express();
const cors = require("cors");
const dbConfig = require("./db/DatabaseConfig");


dbConfig.initializeDB();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Health check route to test if the service is running
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Auth service is running ...Yes it is working...awesome "});
});
const authRoutes = require("./routes/auth");
//const userRoute = require("./routes/users");

app.use(cors());

app.use("/auth", authRoutes);
//app.use("/signup", userRoute);

app.listen(process.env.APP_PORT || 4000, function () {
	console.log("App Started on ", process.env.APP_PORT);
});