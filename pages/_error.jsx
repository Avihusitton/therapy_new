export default function ErrorPage({ statusCode, message }) {
  return (
    <div style={{ padding: '2rem', direction: 'rtl', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#4C4A49', marginBottom: '1rem' }}>שגיאה {statusCode}</h1>
      <p style={{ color: '#6B6867', marginBottom: '2rem' }}>{message || 'אירעה שגיאה בשרת. אנא נסה שוב.'}</p>
      <a 
        href="/" 
        style={{ 
          backgroundColor: '#A2673E', 
          color: 'white', 
          padding: '0.75rem 1.5rem', 
          borderRadius: '8px', 
          textDecoration: 'none' 
        }}
      >
        חזרה לדף הבית
      </a>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  console.error(JSON.stringify({
    event: 'page_error',
    statusCode,
    message: err?.message,
    stack: err?.stack,
    url: typeof window !== 'undefined' ? window.location.href : 'server',
  }));
  return { statusCode, message: err?.message };
};
