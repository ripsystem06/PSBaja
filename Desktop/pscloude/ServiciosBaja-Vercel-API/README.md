# Pagos y Servicios Baja - Sitio Web

Sitio web para Pagos y Servicios Baja, distribuidor autorizado de WaliApp en Baja California.

## 🚀 Despliegue en Vercel

### Paso 1: Configurar Resend (para envío de emails)

1. Ve a [https://resend.com](https://resend.com) y crea una cuenta gratuita
2. Verifica tu dominio `pagoserviciosbaja.com` (o usa el dominio de prueba)
3. Genera una API Key en el dashboard
4. Copia la API Key

### Paso 2: Subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/pagos-servicios-baja.git
git push -u origin main
```

### Paso 3: Conectar con Vercel

1. Ve a [https://vercel.com](https://vercel.com)
2. Clic en "Import Project"
3. Selecciona tu repositorio de GitHub
4. En "Environment Variables", agrega:
   - `RESEND_API_KEY` = tu_api_key_de_resend

### Paso 4: Configurar dominio (opcional)

1. En el dashboard de Vercel, ve a "Settings" → "Domains"
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

## 📁 Estructura del Proyecto

```
├── api/
│   └── contact.js          # API Route para envío de emails
├── public/
│   ├── images/             # Imágenes del sitio
│   ├── index.html          # Página principal
│   ├── main.js             # JavaScript principal
│   ├── aviso-de-privacidad.html
│   ├── terminos-y-condiciones.html
│   └── preguntas-frecuentes.html
├── package.json
├── vercel.json             # Configuración de Vercel
└── README.md
```

## 📧 Configuración del Email

El formulario de contacto envía emails a: `contacto@pagoserviciosbaja.com`

Para cambiar el destinatario, edita el archivo `api/contact.js`:

```javascript
to: ['contacto@pagoserviciosbaja.com'],  // Cambia este email
```

## 📱 Datos de Contacto

- **WhatsApp:** +52 646 276 2564
- **Email:** contacto@pagoserviciosbaja.com
- **Ubicación:** Baja California, México

## 🛠️ Tecnologías

- HTML5
- Tailwind CSS (CDN)
- JavaScript Vanilla
- Anime.js (animaciones)
- Lucide Icons
- Vercel Serverless Functions
- Resend (envío de emails)

## 📝 Licencia

© 2025 Pagos y Servicios Baja. Todos los derechos reservados.

Desarrollado por [RIP Smart IT](https://ripsmartit.com)
