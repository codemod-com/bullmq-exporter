import "express-session";
import { User } from "./user";

declare module "express-session" {
  interface SessionData {
    passport: {
      user: User;
    };
  }
}
