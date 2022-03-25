import { Response, Request } from "express";
// Registrar un usuario
export const singnup = (req: Request, res: Response)=>{
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