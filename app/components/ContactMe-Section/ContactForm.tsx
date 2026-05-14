import React, {useState} from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({email: "", message: ""});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    emailjs
      .send(
        "service_llpb4pr",
        "template_bdrc1zj",
        form,
        "-HC-1r045_s_wwLqn"
      )
      .then(
        () => {
          setSubmitted(true);
          setForm({email: "", message: ""});
          setLoading(false);
        },
        (err) => {
          setError("Failed to send message, please try again later.");
          console.error(err);
          setLoading(false);
        }
      );
  };

  if (submitted) {
    return (
      <div
        className="flex min-h-[420px] items-center justify-center rounded-[28px] bg-slate-950 p-8 text-center text-white">
        <div className="max-w-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-white/55">Message sent</p>
          <p className="mt-4 font-[family:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em]">
            Thank you for reaching out.
          </p>
          <p className="mt-3 text-sm leading-7 text-white/75">
            I&apos;ll get back to you soon with the next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="rounded-[28px] bg-white p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">Start a conversation</p>
        <h3 className="font-[family:var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.04em] text-slate-950">
          Tell me what you&apos;re building.
        </h3>
        <p className="max-w-xl text-sm leading-7 text-slate-600">
          Share a quick overview and I&apos;ll reply with how I can help, what I&apos;d focus on first, and the best
          next step.
        </p>
      </div>

      <div className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
            className="rounded-2xl border border-[rgba(24,33,47,0.12)] bg-[rgba(248,244,238,0.9)] px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Message
          <textarea
            name="message"
            placeholder="I need help redesigning a product interface, polishing a landing page, or improving a frontend experience..."
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            disabled={loading}
            className="resize-none rounded-2xl border border-[rgba(24,33,47,0.12)] bg-[rgba(248,244,238,0.9)] px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none"
          />
        </label>
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Direct and thoughtful frontend
          collaboration</p>
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition ${
            loading
              ? "cursor-not-allowed bg-slate-400"
              : "bg-slate-950 shadow-[0_18px_36px_rgba(17,37,63,0.16)] hover:bg-teal-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
