import nodemailer from "nodemailer";
import { Router } from "express";
import {
  getAdminEmailTemplate,
  getUserConfirmationEmailTemplate,
} from "../templates/index.js";
import { CONFIG } from "../config/index.js";

export const contactRouter = Router();

const transporter = nodemailer.createTransport(CONFIG.TRANSPORT_OPTIONS);

contactRouter.post("/", async (req, res) => {
  const formData = req.body;

  if (!formData.name || !formData.email || !formData.message) {
    return res.status(400).json({ error: "Falta algún campo obligatorio" });
  }

  try {
    // Enviar ambos emails en paralelo
    const [adminEmail, userEmail] = await Promise.allSettled([
      transporter.sendMail({
        from: "plataformas@kilometrosporexplorar.es",
        to: "admin@kilometrosporexplorar.es",
        subject: "¡Formulario de contacto recibido!",
        html: getAdminEmailTemplate(formData),
      }),
      transporter.sendMail({
        from: "contacto@kilometrosporexplorar.es",
        to: formData.email,
        subject: "Confirmación de contacto",
        html: getUserConfirmationEmailTemplate(formData),
      }),
    ]);

    // Verificar resultados
    if (adminEmail.status === "rejected") {
      console.error("Error al enviar email al admin:", adminEmail.reason);
      return res.status(500).json({
        success: false,
        error: "No se pudo enviar el email al administrador",
      });
    }

    if (userEmail.status === "rejected") {
      console.error("Error al enviar email de confirmación:", userEmail.reason);
      return res.status(500).json({
        success: false,
        error: "No se pudo enviar la confirmación al email",
      });
    }

    console.log("Emails enviados correctamente");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error en la ruta de contacto:", error);
    res
      .status(500)
      .json({ success: false, error: "Error procesando el formulario" });
  }
});
