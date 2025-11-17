"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function KontaktPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Unbekannter Fehler");
    }
  }

  return (
    <div className="main">
      <Header />
      <main className="container" style={{ padding: "90px 0 40px" }}>
        <h1>Kontakt</h1>
        <p style={{ color: "var(--muted)", marginBottom: 16 }}>Schreib uns eine Nachricht ? wir melden uns.</p>

        <form className="form card" onSubmit={onSubmit}>
          <label>
            <div>Name</div>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Max Mustermann" required />
          </label>
          <label>
            <div>E-Mail</div>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="max@example.com" required />
          </label>
          <label>
            <div>Nachricht</div>
            <textarea className="textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Wie k?nnen wir helfen?" required />
          </label>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button className="button" disabled={status === "loading"}>
              {status === "loading" ? "Senden?" : "Absenden"}
            </button>
            {status === "success" && <span className="success">Danke! Nachricht erfolgreich versendet.</span>}
            {status === "error" && <span className="error">{errorMsg}</span>}
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
