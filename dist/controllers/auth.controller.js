"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.singnin = exports.singnup = void 0;
// Registrar un usuario
const singnup = (req, res) => {
    res.send('singnup');
};
exports.singnup = singnup;
// Login
const singnin = (req, res) => {
    res.send('singnin');
};
exports.singnin = singnin;
// Decirle los datos al usuario de su perfil
const profile = (req, res) => {
    res.send('profile');
};
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map