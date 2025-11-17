import { NextResponse } from "next/server";

function isValidEmail(email: string): boolean {
  return /.+@.+\..+/.test(email);
}

export async function POST(req: Request) {
  const { name, email, message } = await req.json().catch(() => ({ }));

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Felder fehlen" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Ung?ltige E-Mail" }, { status: 400 });
  }

  // Hier k?nnte eine E-Mail/DB-Integration erfolgen.
  return NextResponse.json({ ok: true });
}
