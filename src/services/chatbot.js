import { Mistral } from "@mistralai/mistralai";
import { CONFIG } from "../config/index.js";
import { validateMessage } from "../utils/validators.js";
import { createSystemPrompt } from "../utils/prompts.js";

// Crear cliente Mistral una sola vez
const mistral = new Mistral({
  apiKey: CONFIG.MISTRAL_API_KEY,
});

/**
 * Enviar un mensaje al chatbot y obtener una respuesta
 * @param {string} message - El mensaje del usuario
 * @returns {Promise<{success: boolean, message?: string, error?: string}>}
 */
export const sendMessage = async (message) => {
  try {
    // Validar el mensaje
    const validation = validateMessage(message);
    if (!validation.valid) {
      return {
        success: false,
        error: validation.error,
      };
    }

    // Llamar a Mistral con el system prompt que incluye el contexto
    const result = await mistral.chat.complete({
      model: "mistral-small-latest",
      messages: [
        {
          role: "system",
          content: createSystemPrompt(),
        },
        {
          role: "user",
          content: message.trim(),
        },
      ],
    });

    return {
      success: true,
      message: result.choices[0].message.content,
    };
  } catch (error) {
    console.error("Error en servicio de chatbot:", error.message);
    return {
      success: false,
      error: "Error procesando tu mensaje. Por favor, intenta de nuevo.",
    };
  }
};
