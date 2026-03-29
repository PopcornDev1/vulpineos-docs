import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'VulpineOS'
  const description = searchParams.get('description') || 'AI Browser Agent Operating System'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #1a1025 0%, #2d1b4e 50%, #1a1025 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#7C3AED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}
          >
            🦊
          </div>
          <span
            style={{
              fontSize: '24px',
              color: '#a78bfa',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            VulpineOS
          </span>
        </div>

        <div
          style={{
            fontSize: '56px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: '24px',
            color: '#c4b5fd',
            lineHeight: 1.4,
            maxWidth: '800px',
          }}
        >
          {description}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            fontSize: '20px',
            color: '#6d5b8a',
          }}
        >
          vulpineos.com
        </div>

        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
