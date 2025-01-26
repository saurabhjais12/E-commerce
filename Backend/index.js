const express =require("express")
const cors =require("cors")
require("dotenv").config()
const cookieParser = require('cookie-parser')



const connectDB=require('./config/db')
const router =require("./routes/index")

const app =express()

app.use(express.json()); // Parse JSON before setting routes
app.use(cors(
    {
        origin :process.env.FRONTEND_URL,
        credentials:true
    }
));
app.use(cookieParser())
app.use("/api", router);

const PORT = 8002 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('DB Connected');
        console.log('server is running');
    })

});

