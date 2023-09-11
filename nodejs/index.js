const express = require("express");
const port = 8000;
const app = express();
app.get('/', function(request, response){
    response.send("Hello, devOps");
});

app.post('/addemployee', function(request, response){
    let empName = request.body.empName;
    let empPass = request.body.empPass;
    response.end(`POST sucess, you sent ${empName} and ${empPass}, Thanks!`)

});

//
app.listen(port, function(){
    console.log("App is listening " + port);
});