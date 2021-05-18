import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositores/UsersRepository";

class UsersController {
  async create(request: Request, response: Response) {
    const { email } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);

    const user = usersRepository.create({
      email
    });

    await usersRepository.save(user);
    return response.json(user);
  }
}

export { UsersController }