import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={container}>
    <h1 style={heading}>Nuevo Mensaje de tu Portfolio</h1>
    <div style={card}>
      <p style={paragraph}>
        Has recibido un nuevo mensaje a través del formulario de contacto de tu sitio web.
      </p>
      <hr style={hr} />
      <div style={content}>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`} style={link}>{email}</a></p>
        <p><strong>Mensaje:</strong></p>
        <p style={messageBox}>{message}</p>
      </div>
      <hr style={hr} />
      <p style={footer}>
        Este correo fue enviado desde tu DevPortfolio.
      </p>
    </div>
  </div>
);

export default ContactFormEmail;

// Styles
const baseFont = {
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#f0f4f8',
  padding: '20px',
  ...baseFont,
};

const heading = {
  color: '#2c3e50',
  fontSize: '24px',
  textAlign: 'center' as const,
  marginBottom: '20px',
};

const card = {
  backgroundColor: '#ffffff',
  border: '1px solid #dfe6e9',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#576574',
};

const content = {
  ...paragraph,
  marginTop: '20px',
};

const messageBox = {
  ...paragraph,
  backgroundColor: '#f8f9fa',
  border: '1px solid #e9ecef',
  borderRadius: '4px',
  padding: '15px',
  whiteSpace: 'pre-wrap' as const,
  wordWrap: 'break-word' as const,
};

const link = {
  color: '#3498db',
  textDecoration: 'none',
};

const hr = {
  borderColor: '#dfe6e9',
  margin: '20px 0',
};

const footer = {
  ...paragraph,
  fontSize: '12px',
  color: '#a0a9b4',
  textAlign: 'center' as const,
  marginTop: '20px',
};
