const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
const cors = require('cors')
const categorieRouter=require("./routes/categorie.routes")
const scategorieRouter=require("./routes/scategorie.routes")
const articleRouter=require("./routes/article.routes")
const app = express();

//config dotenv
dotenv.config()
//Les cors

app.use(cors())

app.get("/",(req,res)=>{
    res.send("page acceuil")
})
app.get("/contact ",(req,res)=>{
    res.send("page contact")
})


// connexion a la base de donnees 
mongoose.connect(process.env.DATABASECLOUD,{
    useNewUrlParser :true , 
    useUnifiedTopology:true
})
.then (() => {console.log("Connexion a la base de donnee")}).catch(err => {
    console.log ('Impossible de se connecter  a la base de donnee ')
process.exit(); 
}) 
app.use( "/api/categories",categorieRouter)
app.use( "/api/scategories",scategorieRouter)
app.use( "/api/articles",articleRouter)
app.listen(process.env.PORT)
console.log("application run at port "+ process.env.PORT)


module.exports = app;