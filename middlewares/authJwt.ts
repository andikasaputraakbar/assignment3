import { NextFunction } from "express";
import { Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import Auth from "../interface/auth.interface";

class authJwt{
    static authentication(req:Auth, res: Response, next: NextFunction) {
        const { access_token } = req.headers;
        if (!access_token) {
          throw { name: "Missing_Token" };
        }
    
        const decoded:any = jwt.verify(access_token as string, "saltacademy"); 
        req.userData = decoded.data;
        req.userDataId = decoded.data._id;
        next();
        
      }
    
      static async specificPlayer(req: Auth, res: Response, next: NextFunction) {
        const { idUser } = req.params;
        
        const result:any = await User.findById(req.userDataId);
        
        try {
          if (result.id == idUser) {
            next();
          } else {
            throw { name: "UNAUTHORIZED_TOKEN" };
          }
        } catch (err) {
          next(err);
        }
      }
}

export default authJwt;