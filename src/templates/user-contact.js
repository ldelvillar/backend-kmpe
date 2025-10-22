export const getUserConfirmationEmailTemplate = (formData) => `
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
        <td align="center" style="padding: 20px 0">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600"
                 style="background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);">
            <tr>
              <td align="center" bgcolor="#12a3ed" style="padding: 20px; color: #ffffff; font-size: 24px; font-weight: bold;">
                Confirmación de contacto
              </td>
            </tr>
            <tr>
              <td style="padding: 30px; color: #333333; font-size: 16px; line-height: 1.5;">
                <p>Hola <strong>${formData.name}</strong>,</p>
                <p>
                  Gracias por ponerte en contacto con nosotros a través de nuestro
                  sitio web. Hemos recibido correctamente tu mensaje y nuestro
                  equipo te responderá lo antes posible.
                </p>
                <p>
                  Mientras tanto, puedes visitar nuestra web para conocer más
                  sobre tu destino ideal:
                </p>
                <p style="text-align: center; margin: 30px 0">
                  <a
                    href="https://www.kilometrosporexplorar.es"
                    target="_blank"
                    style="
                      background: #12a3ed;
                      color: #ffffff;
                      text-decoration: none;
                      padding: 12px 24px;
                      border-radius: 6px;
                      display: inline-block;
                      font-weight: bold;
                    "
                  >Ir a la web</a>
                </p>
                <p>¡Gracias por confiar en nosotros!</p>
                <p>Atentamente,<br />El equipo de Kilómetros por Explorar</p>
              </td>
            </tr>
            <tr>
              <td align="center" bgcolor="#f0f0f0" style="padding: 15px; font-size: 12px; color: #777">
                © 2025 Kilómetros por Explorar. Todos los derechos reservados.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
`;
