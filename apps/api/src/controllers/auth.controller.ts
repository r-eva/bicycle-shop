import { NextFunction, Request, Response } from 'express';
import authService from '../services/auth.services';

class AuthController {
  async userLogin(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const data = await authService.userLogin(req);
      return res.send({
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}
export default new AuthController();
