var A = require('figlet');

A("Anupam Tarai",  (err, data) =>{
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });