import { Request } from "express";

interface Auth extends Request{
    userData?: string;
    userDataId?: string;
}

export default Auth;