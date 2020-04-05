const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "test", // update me
      password: "testP@ssw0rd" // update me
    },
    type: "default"
  },
  server: "akanserver.database.windows.net", // update me
  options: {
    database: "Authenticators", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase(usrname, hashpw) {
  // Read all rows from table
  const request = new Request(
    `INSERT INTO Authenticators (Username, Password) VALUES (` + usrname + `, ` + hashpw + `);`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}
function makeAccount() {
  var output = document.getElementById("result");
  var password1 = document.getElementById("pw");
  var password2 = document.getElementById("pw2");
  if (password1.value === password2.value) {
    output.innerHTML = "Success!";
  }
  else {
    output.innerHTML = "Passwords do not match.";
  }
}
