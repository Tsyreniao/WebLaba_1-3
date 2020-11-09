
const express = require("express");

const app = express();
app.use(express.static(`${__dirname}/public/WebLaba`))
app.get("/", function(request, response){
     
    response.sendFile(__dirname + "/Index.html");
});
app.listen(3000);