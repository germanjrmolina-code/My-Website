import Link from "next/link";

export default function About() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h1>

      <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
        Hi! I&apos;m a creative developer who enjoys making websites and exploring new ideas. Aside from coding, I love hiking, traveling, and discovering new places. I&apos;m an active person who enjoys outdoor activities, trying new things, and making unforgettable memories. I love learning, exploring, and experiencing new adventures.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>What I Focus On</h2>
        <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li>Exploring new places and experiencing different adventures</li>
          <li>Staying active through hiking and outdoor activities</li>
          <li>Discovering new hobbies and learning new things</li>
          <li>Improving my creativity and skills</li>
          <li>Enjoying life and making unforgettable memories</li>
        </ul>
      </section>

      <p style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: '#0f172a', fontWeight: 600 }}>Back to home</Link>
      </p>
    </main>
  );
}
