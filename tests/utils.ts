import { randomUUID } from 'crypto';

export class Utils {
  static generate_random_username(): string {
    return randomUUID();
  }
  static generate_random_email(): string {
    return randomUUID().replace(/-/g, '') + '@gmail.com';
  }
}
