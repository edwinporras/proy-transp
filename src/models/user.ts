export interface Schema{
    Username: {
        type: string,
        required: true,
        min: 4,
        lowercase: true
    },
    email: {
        type: string,
        unique: true,
        required: true,
        lowercase: true 
    },
    password:{
        type: string,
        required: true
    }
}