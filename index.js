/*1.  require and make all the packages /libraries to be used in this cproject part of it */

const express = require('express') //express is used for serving resources/content------ i.e server
const path =require('path'); //path helps us to navigate 
const bodyParser = require("body-parser")


let server = express();
/* __filename //for file
__dirname //points to the folder */

// console.log(__dirname);
// console.log(__filename);


//need to create settings... this setting should know where to relocate where the pug is




//3. set the engine that is to render files
server.set("view engine", "pug"); //set the  view engine to pug
//4. specify where the engine is to pick views,compile them to HTML and then render them, or serve them to the client application
let joinedpath = path.join(__dirname, "views");
server.set("views", joinedpath); //the view engine now knows where to pick the pug files that are in views


//Encoding and decoding-----imagine an arabic facebook user but data is always stored in english
//middleware bodyparser captures content from the body and turns it into json objects which node can understand
server.use(bodyParser.json()); //could be optional since it's js front and back-----but if used another language, then it's important
server.use(bodyParser.urlencoded({ extended: true }));// character sets---characters should be understood----this data will go through the url, encoded which should be decoded



//2. to make the server get ready to receive content---------------------------------------server is listening-----4000 is now open for requests
server.listen(4000,() =>{
    console.log("server 4000 is listening..................")
})


/*3.  how to request for resources through routes
methods
1.get------if you want to GET something from the server
2.post-----if you want to GIVE something to the server and the server doesn't have it
3.put------if you want to EDIT something in the server
4.delete---if you want to DELETE something in the server
5.patch */

//path and the callback function
/* server.route('/',(req,res)=>{
    res.send('Hey I am working')
});

 */

/* 
1. home/index
2. products
3. services
4. about us
5. contacts
*/

server.get("/", (req, res) => {
  res.send("This is the Home page");
});


server.get("/products", (req, res) => {
  res.send("This is the Products page");
});


server.get("/services", (req, res) => {
  res.send("This is the Services page");
});

server.get("/aboutus", (req, res) => {
  res.send("This is the about Us page");
});


server.get("/contacts", (req, res) => {
  res.send("This is the Contacts page");
});



/* 4. Type of data that we are serving
1. plain text------serving plain text e.g This is the Contacts page... above
2. JSON data ------serving json data for API(Application Programming Interface)e.g RESTFUL API---(Representattion State Transfer)
CGI and REST
With CGI;
Many duplications made
With RESTFUL API;
Design the databse at once and provide channels/api endpoints----connect to the database via endpoints----
mobile,desktop or IOT can all access  the same database via APIs
3. Files-images,Html etc */

//using single page application programs----mostly used way--vuejs






server.get("/registration", (req, res) => {
  res.render("form");
});

server.post("/register", (req, res) => {
  res.send("you have been successfully registered!")
  console.log(req.body.firstname)
   res.render("form");
});