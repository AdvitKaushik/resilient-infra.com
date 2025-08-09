import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New inquiry from Resilient Infrastructure website");
    data.append("to", "Info.resilientinfra@gmail.com"); // set recipient in Formspree too

    const res = await fetch("https://formspree.io/f/xyzplydq", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input id="name" name="name" required className="rounded-xl border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="rounded-xl border px-3 py-2" />
        </div>
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
        <textarea id="message" name="message" rows={5} required className="rounded-xl border px-3 py-2" />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500">By submitting, you agree we may contact you.</p>
        <button className="rounded-2xl px-5 py-2 text-white font-semibold" style={{ background: '#1D5788' }}>
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </div>

      {status === "sent" && <p className="text-green-600 text-sm">Thanks! We’ll get back to you shortly.</p>}
      {status === "error" && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
    </form>
  );
}
