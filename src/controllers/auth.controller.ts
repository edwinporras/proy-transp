import { Response, Request } from "express";
import { Schema } from '../models/user'
// Registrar un usuario
export const singnup = (req: Request, res: Response)=>{
    console.log(req.body);
    res.send('singnup');
};

// Login
export const singnin = (req: Request, res: Response)=>{
    res.send('singnin');
};

// Decirle los datos al usuario de su perfil
export const profile = (req: Request, res: Response)=>{
    res.send('profile');
};