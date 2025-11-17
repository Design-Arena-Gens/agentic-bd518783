export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>? {new Date().getFullYear()} Einfaches Landing</span>
        <a href="https://vercel.com" rel="noreferrer" target="_blank">Bereitgestellt mit Vercel</a>
      </div>
    </footer>
  );
}
