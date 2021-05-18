import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsServices";

class SettingsController {
  async create(request: Request, response: Response) {
    const { username, chat } = request.body;

    const settingsService = new SettingsService();

    try {
      const settings = settingsService.create({ username, chat });

      return response.json(settings);
    } catch(err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { SettingsController };
