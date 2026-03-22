import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', marginTop: '3rem', color: 'var(--text-secondary)' }}>
      <p>&copy; {new Date().getFullYear()} Antony Peacock. Built with Next.js.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <a href="https://twitter.com/antpeacock" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://github.com/twon" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/antonypeacock/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
