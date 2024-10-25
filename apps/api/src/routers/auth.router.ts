import { Router } from 'express';
import authController from '../controllers/auth.controller';

class AuthRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.initializedRoutes();
  }
  initializedRoutes() {
    this.router.post('/', authController.userLogin);
  }
  getRouter() {
    return this.router;
  }
}

export default new AuthRouter();
