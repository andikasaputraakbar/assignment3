import { ErrorRequestHandler, NextFunction, Response, Request } from "express";

class ErrorHandler {
  static errorHandler = (err:ErrorRequestHandler, req:Request, res:Response, next:NextFunction) => {
    let code = 0;
    let name = err.name;
    let message = "";

    switch (name) {
      case "INVALID_TOKEN":
        code = 401;
        message = "Invalid Token";
        break;
      case "UNAUTHORIZED_TOKEN":
        code = 401;
        message = "Unauthorized";
        break;
      case "UNAUTHORIZED":
        code = 401;
        message = "Email & Password not match";
        break;
      case "NOT_FOUND_SPECIFIC":
        code = 404;
        message = "Can't find the data";
        break;
      case "NOT_FOUND_ALL":
        code = 404;
        message = "Data is not found";
        break;
      case "Missing_Token":
        code = 401;
        message = "Missing Token";
        break;
      default:
        code = 500;
        message = "Internal Server Error";
    }

    res.status(code).json({ success: false, message: message });
  };
}

export default ErrorHandler;
