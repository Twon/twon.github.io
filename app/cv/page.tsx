export const metadata = {
  title: 'CV | Antony Peacock',
};

export default function CV() {
  return (
    <div className="animate-fade-in glass-panel">
      <h1>Curriculum Vitae</h1>
      <p>Detailed CV content can be downloaded or viewed on my LinkedIn.</p>
      
      <h3>Skills</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li>C++ (C++11/14/17/20)</li>
        <li>High Performance Computing</li>
        <li>Software Architecture</li>
        <li>Optimization methodologies</li>
      </ul>

      <h3>Professional Experience</h3>
      <p>
        Focused on building and maintaining world-class high-performance systems.
      </p>
      
      <a href="https://linkedin.com/in/antonypeacock" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', background: 'rgba(88, 166, 255, 0.1)', border: '1px solid rgba(88, 166, 255, 0.4)', borderRadius: '20px' }}>
        View Full Profile on LinkedIn
      </a>
    </div>
  );
}
