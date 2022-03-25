import mysql from 'mysql'

const connection =mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'tve0enjhutqa'
});

connection.connect(function (err) {
    if (err) {
        console.log("Problemas en la coneccion!");
    }else{
        console.log("Conectada!");
    }
})