import fs from "node:fs";

if (fs.existsSync(".env")) process.loadEnvFile();

export const CONFIG = {
  PORT: process.env.PORT || 3000,
  MISTRAL_API_KEY: process.env.MISTRAL_API_KEY,
  TRANSPORT_OPTIONS: {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
};
