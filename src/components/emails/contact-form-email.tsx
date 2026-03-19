import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactFormEmail({
  name,
  email,
  message,
}: Readonly<ContactFormEmailProps>) {
  return (
    <div style={main}>
      <div style={container}>
        <div style={card}>
          <div style={logoContainer}>
            <img 
              src="https://res.cloudinary.com/dqh1coa3c/image/upload/v1756991404/devProfile/logo-clancig-3_yzrv8l.webp" 
              alt="Clancig Logo" 
              style={logo}
            />
          </div>
          <div style={header}>
            <h1 style={heading}>NUEVO MENSAJE</h1>
            <p style={subtitle}>Has recibido un contacto desde tu portfolio</p>
          </div>
          
          <div style={section}>
            <div style={fieldGroup}>
              <span style={label}>REMITENTE</span>
              <p style={value}>{name}</p>
            </div>
            
            <div style={fieldGroup}>
              <span style={label}>EMAIL</span>
              <a href={`mailto:${email}`} style={link}>{email}</a>
            </div>
            
            <div style={fieldGroup}>
              <span style={label}>MENSAJE / DESAFÍO</span>
              <div style={messageBox}>
                {message}
              </div>
            </div>
          </div>
          
          <div style={footer}>
            <p style={footerText}>
              Este correo fue procesado automáticamente vía Smart Contact Hub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormEmail;

// --- Estilos Globales (Dark Engineering) ---

const baseFont = {
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const main = {
  ...baseFont,
  backgroundColor: '#09090b', // Zinc-950
  padding: '40px 20px',
  width: '100%',
};

const container = {
  margin: '0 auto',
  maxWidth: '600px',
};

const card = {
  backgroundColor: '#18181b', // Zinc-900
  border: '1px solid #27272a', // Zinc-800
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
};

const header = {
  padding: '0px 32px 24px',
  borderBottom: '1px solid #27272a',
  textAlign: 'center' as const,
};

const logoContainer = {
  padding: '40px 32px 24px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
  maxWidth: '220px',
  height: 'auto',
};

const heading = {
  margin: '0 0 8px 0',
  color: '#fafafa', // Zinc-50
  fontSize: '24px',
  fontWeight: '600',
  letterSpacing: '1px',
};

const subtitle = {
  margin: '0',
  color: '#2dd4bf', // Cian Esmeralda (Primary)
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '0.5px',
  textTransform: 'uppercase' as const,
};

const section = {
  padding: '32px',
};

const fieldGroup = {
  marginBottom: '24px',
};

const label = {
  display: 'block',
  color: '#a1a1aa', // Zinc-400 (Muted)
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  marginBottom: '8px',
};

const value = {
  margin: '0',
  color: '#fafafa', // Zinc-50
  fontSize: '16px',
  lineHeight: '1.5',
};

const link = {
  color: '#2dd4bf', // Cian Esmeralda
  fontSize: '16px',
  textDecoration: 'none',
  fontWeight: '500',
};

const messageBox = {
  backgroundColor: '#09090b', // Fondo Oscuro Principal para destacar el área
  border: '1px solid #27272a',
  borderRadius: '8px',
  padding: '20px',
  color: '#e4e4e7', // Zinc-200
  fontSize: '15px',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
  wordWrap: 'break-word' as const,
  marginTop: '8px',
};

const footer = {
  padding: '20px 32px',
  backgroundColor: '#09090b',
  borderTop: '1px solid #27272a',
  textAlign: 'center' as const,
};

const footerText = {
  margin: '0',
  color: '#71717a', // Zinc-500
  fontSize: '12px',
};