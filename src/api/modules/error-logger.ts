import fs from 'fs';
import { promisify } from 'util';
import { resolve } from 'path';
import shell from 'shelljs';

const appendFile = promisify(fs.appendFile);

export class ErrorLogger {
  constructor() {
    shell.mkdir('-p', 'logs/dashboard', 'logs/api');
  }

  private logsPath = resolve('./logs');
  private sessionDate = new Date()
    .toISOString()
    .replace(/:/g, '');

  private get timestamp() {
    return new Date().toISOString();
  }

  async dashboard(message: string) {
    await appendFile(
      `${this.logsPath}/dashboard/${this.sessionDate}.log`,
      `[${this.timestamp}] ${message}\n`
    );
  }

  async api(status: number, message: string, route: string) {
    await appendFile(
      `${this.logsPath}/api/${this.sessionDate}.log`,
      `[${this.timestamp}] [${status}] [${route}] ${message}\n`
    );
  }
}
