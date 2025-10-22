export const getAdminEmailTemplate = (formData) => `
  <body style="font-family: Arial, sans-serif; background-color:#f9f9f9; padding:20px;">
    <table width="100%" border="0" cellspacing="0" cellpadding="10" 
          style="max-width:600px; margin:auto; background:#ffffff; border:1px solid #ddd;">
      <tr>
        <td colspan="2" align="center" 
            style="background:#f2f2f2; font-size:18px; font-weight:bold; padding:15px;">
          Nuevo mensaje desde el formulario de contacto
        </td>
      </tr>

      <tr>
        <td style="width:150px; font-weight:bold; border-bottom:1px solid #eee;">Nombre:</td>
        <td style="border-bottom:1px solid #eee;">${formData.name}</td>
      </tr>
      <tr>
        <td style="font-weight:bold; border-bottom:1px solid #eee;">Apellidos:</td>
        <td style="border-bottom:1px solid #eee;">${formData.lastName}</td>
      </tr>
      <tr>
        <td style="font-weight:bold; border-bottom:1px solid #eee;">Email:</td>
        <td style="border-bottom:1px solid #eee;">${formData.email}</td>
      </tr>
      <tr>
        <td style="font-weight:bold; border-bottom:1px solid #eee;">Teléfono:</td>
        <td style="border-bottom:1px solid #eee;">${formData.phone}</td>
      </tr>
      <tr>
        <td style="font-weight:bold; vertical-align:top;">Mensaje:</td>
        <td>${formData.message}</td>
      </tr>
    </table>

    <p style="font-size:12px; color:#888; text-align:center; margin-top:20px;">
      Este mensaje fue generado automáticamente desde el formulario de contacto.
    </p>
  </body>
`;
