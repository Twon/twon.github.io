import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
      <h1 className="animate-fade-in" style={{ fontSize: '4rem', letterSpacing: '-1.5px', marginBottom: '1rem', background: 'linear-gradient(to right, #e6edf3, #58a6ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Antony Peacock
      </h1>
      <p className="animate-fade-in delay-100" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        Musing on software development, focused primarily on high performance computing and C++.
      </p>

      <div className="glass-panel animate-fade-in delay-200" style={{ maxWidth: '400px', margin: '0 auto', padding: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: 'none' }}>Latest Writing</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Check out my latest musings on C++ alignment and software development.</p>
        <Link href="/blog" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.8rem 2rem', background: 'rgba(88, 166, 255, 0.1)', border: '1px solid rgba(88, 166, 255, 0.4)', borderRadius: '30px', fontWeight: 600, color: 'var(--accent-color)' }}>
          Read the Blog &rarr;
        </Link>
      </div>
    </div>
  );
}
