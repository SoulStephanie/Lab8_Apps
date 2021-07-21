//==============================================================
//==============================================================
//============== ESTO SE PONE SIEMPRE 

// Dependencias
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//==============================================================
//==============================================================



//  (DATA)
// =============================================================
var tables = [
  {
    Name: "yoda",
    number: "5576953824",
    email: "sstine@gmail.com",
    uniqueID: 900,
    
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  

// Displays tables 
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});



// Displays a table, or returns wait list
app.get("/api/tables", function(req, res) {
  return res.json(characters);
});

// Displays a single table, or returns false
app.get("/api/tables/:table", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});


// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTable = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

  newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  // We then add the json the user sent to the character array
  tables.push(newTable);

  // We then display the JSON to the users
  res.json(newTable);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
