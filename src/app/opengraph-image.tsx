import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ABB Process Automation Solutions - Gross Automation Wisconsin';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#1a1a2e',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ABB Red accent bar at top */}
        <div
          style={{
            width: '100%',
            height: '8px',
            background: 'linear-gradient(90deg, #FF000F 0%, #CC000C 100%)',
            display: 'flex',
          }}
        />

        {/* Main content area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 80px',
          }}
        >
          {/* Company name */}
          <div
            style={{
              fontSize: 28,
              color: '#FF000F',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex',
            }}
          >
            Gross Automation
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            ABB Process Automation Solutions
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: '#a0a0b8',
              marginBottom: '40px',
              display: 'flex',
            }}
          >
            Your Wisconsin Partner for Industrial Automation
          </div>

          {/* Product badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {[
              'Freelance DCS',
              'System 800xA',
              'Symphony Plus',
              'Compact Control',
              'Measurement & Analytics',
            ].map((product) => (
              <div
                key={product}
                style={{
                  padding: '8px 20px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 0, 15, 0.15)',
                  border: '1px solid rgba(255, 0, 15, 0.3)',
                  color: '#FF6B6B',
                  fontSize: 16,
                  fontWeight: 600,
                  display: 'flex',
                }}
              >
                {product}
              </div>
            ))}
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 80px',
            backgroundColor: 'rgba(255, 0, 15, 0.08)',
            borderTop: '1px solid rgba(255, 0, 15, 0.2)',
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: '#a0a0b8',
              display: 'flex',
            }}
          >
            Brookfield, WI · 35+ Years Experience
          </div>
          <div
            style={{
              fontSize: 16,
              color: '#FF000F',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            abbautomationsales.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
