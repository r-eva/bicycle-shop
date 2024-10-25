import { Request } from 'express';
import { prisma } from '../libs/prisma';

class AuthService {
  async userLogin(req: Request) {
    const { email, password } = req.body;

    const data = await prisma.user.findFirst({
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
      },
      where: {
        email: email,
        password: password,
      },
    });

    if (!data) throw new Error('Wrong e-mail!');
    if (!data.password) throw new Error('Wrong e-mail!');

    return { message: 'Logged in success', role: data.role };
  }
}
export default new AuthService();
