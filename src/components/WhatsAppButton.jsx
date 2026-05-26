// [Category A: UI / Design / Layout]
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const message = encodeURIComponent(
    'שלום אביהו, ראיתי את האתר שלך ואשמח לשמוע עוד'
  );
  const phone = '972532853235';

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="צור קשר בוואטסאפ"
      onClick={() => {
        if (typeof gtag === 'function') {
          gtag('event', 'click_whatsapp', {
            event_category: 'lead',
            event_label: 'whatsapp_cta'
          });
        }
      }}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 9999,
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
        animation: 'pulse 2s infinite',
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L.057 23.571a.75.75 0 00.918.919l5.726-1.472A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.184-1.435l-.372-.22-3.853.99.99-3.853-.22-.372A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 5.477 10 10-4.477 10-10 10z"/>
      </svg>
    </a>
  );
}
