import { ImageResponse } from 'next/og'

// OG image dinámica para WhatsApp, Twitter cards, LinkedIn, etc.
// 1200x630 — proporción estándar Open Graph.

export const alt = 'Annelis Ortiz — Prestamista y Agente de Bienes Raíces'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#07070a',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 80px',
          position: 'relative',
        }}
      >
        {/* Radial accent glow (top-right) */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -120,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background:
              'radial-gradient(closest-side, rgba(212,176,106,0.45), transparent 70%)',
          }}
        />
        {/* Bottom-left soft glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -260,
            left: -160,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background:
              'radial-gradient(closest-side, rgba(212,176,106,0.20), transparent 70%)',
          }}
        />

        {/* Brand mark — small dot + name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 28,
            color: '#f5f5f7',
            letterSpacing: '-0.01em',
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: '#d4b06a',
              boxShadow: '0 0 24px 4px rgba(212,176,106,0.5)',
            }}
          />
          Annelis Ortiz
        </div>

        {/* Big serif headline */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'serif',
          }}
        >
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              color: '#f5f5f7',
              letterSpacing: '-0.02em',
              fontWeight: 500,
            }}
          >
            Construyendo patrimonio,
          </div>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              color: '#d4b06a',
              letterSpacing: '-0.02em',
              fontWeight: 500,
            }}
          >
            una familia a la vez.
          </div>
        </div>

        {/* Bottom row: subtitle + URL */}
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            color: '#a0a0aa',
            fontSize: 24,
          }}
        >
          <div style={{ maxWidth: 720, display: 'flex' }}>
            Prestamista · Agente de Bienes Raíces · Autora · Coach
          </div>
          <div
            style={{
              color: '#d4b06a',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: 20,
              display: 'flex',
            }}
          >
            annelisortiz.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
