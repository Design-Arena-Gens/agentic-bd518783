import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";

function getTargetDateISO(): string {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  d.setHours(12, 0, 0, 0);
  return d.toISOString();
}

export default function HomePage() {
  const target = getTargetDateISO();

  return (
    <div className="main">
      <Header />
      <main className="container hero">
        <h1>Willkommen ? Einfach, Schnell, Modern</h1>
        <p>Minimalistische Landing Page mit Header, Footer, Countdown und Kontaktformular.</p>
        <div className="cta">
          <a className="button" href="#countdown">Zum Countdown</a>
          <a className="button secondary" href="/kontakt">Kontakt aufnehmen</a>
        </div>
      </main>

      <section id="countdown" className="container" aria-label="Countdown">
        <div className="grid">
          <div className="card">
            <h2>Countdown bis zum Launch</h2>
            <p className="" style={{ color: "var(--muted)", marginTop: 4 }}>Bleib dran ? wir arbeiten am n?chsten gro?en Update.</p>
            <div style={{ marginTop: 14 }}>
              <Countdown targetDate={target} />
            </div>
          </div>
          <div className="card">
            <h2>Warum diese Seite?</h2>
            <p style={{ color: "var(--muted)" }}>
              Fokus auf schnelle Bereitstellung, klare Struktur und gutes UX ? perfekt f?r einen ersten Eindruck.
            </p>
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />
      <Footer />
    </div>
  );
}
