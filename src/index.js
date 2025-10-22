import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { contactRouter } from "./routes/contact.js";
import { chatbotRouter } from "./routes/chatbot.js";
import { CONFIG } from "./config/index.js";

const app = express();
app.use(express.json());
app.use(corsMiddleware());

app.disable("x-powered-by");

app.use("/contact", contactRouter);
app.use("/chatbot", chatbotRouter);

app.listen(CONFIG.PORT, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${CONFIG.PORT}`
  );
});
