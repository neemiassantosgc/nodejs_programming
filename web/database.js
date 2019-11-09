const Pg = require("pg").Pool;
const config = {
    user: "user",
    host: "host",
    database: "db",
    password: "pass",
    port: 5432
};
const pool = new Pg(config);

const addUsers = function() {
    /*
    pool.query(
    "INSERT INTO CUSTOMERS VALUES (1, 'Mary', 32, 'Berlim', 20000, 54351234, 'mary@exemple.com'),"+
    "(2, 'Mark', 22, 'Vancouver', 22500, 54223456, 'Mark@exemple.com'),"+
    "(3, 'Jully', 25, 'Goias', 34100, 10349521, 'Jully@exemple.com'),"+
    "(4, 'John', 29, 'Florida', 55000, 48739210, 'John@exemple.com'),"+
    "(5, 'Jeniffer', 33, 'Los Angeles', 30000,  12390483, 'Jeniffer@exemple.com');",
    function (err, results) {
        if(err) { console.err(err); }
    }); */
}

const getUsers = function() {
    pool.query("SELECT * FROM CUSTOMERS", function(err, data) {
        if(err) { console.err(err); }
        let length = data.rows.length;
        for(let i = 0; i < length; i++) {
            console.log("name: "+data.rows[i].name+" salary: "+data.rows[i].salary);
        }
    });
};

getUsers();

pool.end(function(err) {
    if(err) { console.err(err); }
    console.log("Pool has ended");
});
