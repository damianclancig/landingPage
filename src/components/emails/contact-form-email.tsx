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
    <div style={container}>
      <div style={card}>
        <h1 style={heading}>Nuevo Mensaje de tu Portfolio</h1>
      <p style={paragraph}>
        Has recibido un nuevo mensaje a través del formulario de contacto.
      </p>
      <hr style={hr} />
      <div style={content}>
        <p style={paragraph}><strong>Nombre:</strong> {name}</p>
        <p style={paragraph}><strong>Email:</strong> <a href={`mailto:${email}`} style={link}>{email}</a></p>
        <p style={paragraph}><strong>Mensaje:</strong></p>
        <p style={messageBox}>{message}</p>
      </div>
      <hr style={hr} />
      <p style={footer}>
        Este correo fue enviado desde DevPortfolio.
      </p>
    </div>
  </div>
  );
}

export default ContactFormEmail;

// Styles for dark mode compatibility
const baseFont = {
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#1c1c1c', // Dark background for the whole email body
  padding: '20px',
  ...baseFont,
};

const card = {
  backgroundColor: '#2b2b2b', // Slightly lighter card background
  border: '1px solid #444',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
  color: '#e0e0e0', // Light text color for card content
};

const heading = {
  color: '#ffffff', // White heading
  fontSize: '24px',
  textAlign: 'center' as const,
  marginBottom: '20px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#cccccc', // Light gray for paragraphs
};

const content = {
  ...paragraph,
  marginTop: '20px',
};

const messageBox = {
  ...paragraph,
  backgroundColor: '#333333',
  border: '1px solid #555',
  borderRadius: '4px',
  padding: '15px',
  whiteSpace: 'pre-wrap' as const,
  wordWrap: 'break-word' as const,
  color: '#ffffff', // White text for the message itself
};

const link = {
  color: '#8ab4f8', // A nice blue that works on dark backgrounds
  textDecoration: 'none',
};

const hr = {
  borderColor: '#555',
  margin: '20px 0',
};

const footer = {
  fontSize: '12px',
  color: '#888888', // Dimmed footer text
  textAlign: 'center' as const,
  marginTop: '20px',
};