"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'tve0enjhutqa'
});
connection.connect(function (err) {
    if (err) {
        console.log("Problemas en la coneccion!");
    }
    else {
        console.log("Conectada!");
    }
});
//# sourceMappingURL=database.js.map