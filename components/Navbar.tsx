import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-brand">
        Antony Peacock
      </Link>
      <div className="nav-links">
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/cv">CV</Link>
      </div>
    </nav>
  );
}
