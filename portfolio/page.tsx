import Image from 'next/image';

const projects = [
  {
    title: 'GM Brand & Apparel Design',
    category: 'Brand Design',
    description: 'A custom GM logo and apparel concept designed for my business, pairing a bold green mark with a clean black athletic look.',
    image: '/jr5.jpg',
    imageAlt: 'Black athletic tank top featuring a green GM logo design',
  },
  {
    title: 'Lifestyle Website',
    category: 'Web Design',
    description: 'An editorial-style website concept built to combine storytelling, elegance, and smooth navigation.',
    image: '/jr6.jpg',
    imageAlt: 'Web design project created by German',
  },
  {
    title: 'Creative Portfolio',
    category: 'Portfolio',
    description: 'A dynamic portfolio experience designed to showcase artistic work with clarity and impact.',
    image: '/jr 7.png',
    imageAlt: 'Creative portfolio website concept featuring bold typography and scenic imagery',
  },
];

export default function Portfolio() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ color: '#0ea5e9', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Portfolio
        </p>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', marginBottom: '0.75rem' }}>Selected work</h1>
        <p style={{ color: '#475569', maxWidth: '700px', lineHeight: 1.8 }}>
          A collection of design and development work focused on thoughtful experiences, polished visuals, and modern digital storytelling.
        </p>
      </div>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project) => (
          <article
            key={project.title}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '1.5rem',
              boxShadow: '0 14px 30px rgba(15, 23, 42, 0.06)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
            }}
          >
            <div
              style={{
                height: '180px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #0f172a, #334155)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1152}
                height={896}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <p style={{ color: '#0ea5e9', fontWeight: 700, marginBottom: '0.5rem' }}>{project.category}</p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h2>
            <p style={{ color: '#475569', lineHeight: 1.7 }}>{project.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
