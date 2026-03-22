import Link from 'next/link';

export const metadata = {
  title: 'Blog | Antony Peacock',
};

const posts = [
  {
    title: 'Antony Peacock’s Blog, Site Launches',
    slug: 'first-blog-post',
    date: '2019-12-12',
    excerpt: 'Well. Finally got around to putting this old website together. Neat thing about it - powered by Jekyll and I can use Markdown to author my posts. It actually is a lot easier than I thought it was going to be.',
  },
  {
    title: 'Alignment In C++',
    slug: 'alignment-in-c++',
    date: '2018-07-19',
    excerpt: 'What is alignment and why should I care? Every type in C++ has the property called alignment requirement, which specifies the number of bytes between successive addresses at which objects of this type can be allocated.',
  }
];

export default function BlogIndex() {
  return (
    <div className="animate-fade-in">
      <h1 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
        Blog
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-panel" style={{ padding: '2rem', display: 'block' }}>
            <h2 style={{ borderBottom: 'none', margin: 0, padding: 0 }}>{post.title}</h2>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{post.date}</div>
            <p style={{ margin: 0, color: 'var(--text-primary)' }}>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
