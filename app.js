const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.static('./public'))
let Stock = require("./data/db.json");

app.get("/", function (req, res) {
    res.render("home", { Stock });
  });

app.get("/products", function (req, res) {
  res.render("products",{ Stock });
})
app.get("/products/ice-cream",(req, res)=>{
  const ice=Stock.filter((x) => x.cat === "iceCream" );
  res.render("iceCream",{ice})
})

app.get("/products/snacks",(req, res)=>{
  const sna=Stock.filter((x) => x.cat === "snacks" )
  res.render("snacks",{sna})
})

app.get("/products/meat",(req, res)=>{
  const meat=Stock.filter((x) => x.cat === "meat" )
  res.render("meat",{meat})
})

app.get("/products/soft-drink",(req, res)=>{
  const SD=Stock.filter((x) => x.cat === "softDrink" )
  res.render("softDrink",{SD})
})

app.get("/products/grocery",(req, res)=>{
  const gro=Stock.filter((x) => x.cat === "grocery" )
  res.render("grocery",{gro})
})

app.get("/products/beverages",(req, res)=>{
  const bev=Stock.filter((x) => x.cat === "bev" )
  res.render("beverages",{bev})
})


  app.listen(3000, () => {
    console.log("listening on port 3000");
  });