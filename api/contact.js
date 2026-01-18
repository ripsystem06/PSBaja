// API Route para enviar emails con Resend
// Endpoint: POST /api/contact

export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Validar campos requeridos
  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  // Verificar API Key
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY no configurada');
    return res.status(500).json({ error: 'Error de configuración del servidor' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Pagos y Servicios Baja <contacto@pagoserviciosbaja.com>',
        to: ['contacto@pagoserviciosbaja.com'],
        reply_to: email,
        subject: `[Web] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">Nuevo mensaje de contacto</h1>
            </div>
            
            <div style="padding: 30px; background: #f8fafc;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #64748b;">Nombre:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #64748b;">Email:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #64748b;">Teléfono:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <a href="tel:${phone}" style="color: #2563eb;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #64748b;">Asunto:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                    ${subject}
                  </td>
                </tr>
              </table>
              
              <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #64748b; display: block; margin-bottom: 10px;">Mensaje:</strong>
                <p style="color: #1e293b; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="padding: 20px; background: #1e293b; text-align: center;">
              <p style="color: #94a3b8; margin: 0; font-size: 12px;">
                Este mensaje fue enviado desde el formulario de contacto de pagoserviciosbaja.com
              </p>
            </div>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(500).json({ error: data.message || 'Error al enviar email' });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      id: data.id 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Error al enviar el mensaje. Por favor intenta de nuevo.' 
    });
  }
}
