import Image from "next/image";

export default function Home() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2rem',
          alignItems: 'center',
          minHeight: '70vh',
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#f97316', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Creative developer
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Creating, Exploring, and Living My Passion.
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '640px', color: '#334155', marginBottom: '2rem' }}>
            Hi! I&apos;m German Molina Jr., a creative developer who enjoys designing websites, running my business, and exploring new places. I love staying active, hiking, and trying new adventures while learning new things along the way.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/about"
              style={{
                background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                color: 'white',
                padding: '0.9rem 1.5rem',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: 700,
                boxShadow: '0 16px 30px rgba(15, 23, 42, 0.2)',
              }}
            >
              About Me
            </a>
            <a
              href="/portfolio"
              style={{
                border: '1px solid #cbd5e1',
                color: '#0f172a',
                padding: '0.9rem 1.5rem',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: 700,
                background: 'rgba(255,255,255,0.5)',
              }}
            >
              View My Work
            </a>
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, #0f172a, #1e293b)',
            borderRadius: '24px',
            minHeight: '420px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 30px 60px rgba(15, 23, 42, 0.25)',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at top, rgba(249, 115, 22, 0.38), transparent 40%)',
            }}
          />
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Image
              src="/guri2.png"
              alt="German Molina Jr"
              width={220}
              height={220}
              priority
              style={{
                width: '220px',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '4px solid rgba(255,255,255,0.25)',
                marginBottom: '1rem',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)',
              }}
            />
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>German Molina Jr</div>
            <div style={{ opacity: 0.8, marginTop: '0.5rem' }}>Creative Developer • Explorer • Business Owner</div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.5rem' }}>
        <div style={{ background: 'white', borderRadius: '18px', padding: '1.5rem', boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)' }}>
          <h3 style={{ marginBottom: '0.75rem' }}>Creativity</h3>
          <p style={{ color: '#475569', lineHeight: 1.7 }}>Turning my ideas into creative designs and unique projects.</p>
        </div>
        <div style={{ background: 'white', borderRadius: '18px', padding: '1.5rem', boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)' }}>
          <h3 style={{ marginBottom: '0.75rem' }}>Exploration</h3>
          <p style={{ color: '#475569', lineHeight: 1.7 }}>Discovering new places, hiking, and enjoying outdoor adventures.</p>
        </div>
        <div style={{ background: 'white', borderRadius: '18px', padding: '1.5rem', boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)' }}>
          <h3 style={{ marginBottom: '0.75rem' }}>Business</h3>
          <p style={{ color: '#475569', lineHeight: 1.7 }}>Building my own brand and learning how to grow my business.</p>
        </div>
      </section>
    </main>
  );
}
