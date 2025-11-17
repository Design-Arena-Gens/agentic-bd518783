import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav" aria-label="Hauptnavigation">
          <div className="brand">
            <span className="badge">Neu</span>
            <span>Einfaches Landing</span>
          </div>
          <div>
            <Link href="/">Start</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
