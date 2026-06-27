"use client";

import { useState } from "react";
import {
  EnvelopeSimple,
  Phone,
  WhatsappLogo,
  ArrowUpRight,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const channels = [
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneRaw}`,
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${profile.phoneRaw}`,
  },
];

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length) return;

    try {
      setStatus({ sending: true, ok: null, msg: "" });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setStatus({
        sending: false,
        ok: true,
        msg: "Message sent. I'll get back to you soon.",
      });
      setForm(initial);
    } catch (err) {
      console.error(err);
      setStatus({
        sending: false,
        ok: false,
        msg: "Something went wrong. Please email me directly.",
      });
    }
  };

  const inputCls =
    "w-full rounded-md border border-line bg-ink-900/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30";

  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container-content">
        <SectionHeading
          index="04"
          kicker="Contact"
          title="Let's build something, or just talk shop."
          className="max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* left: channels */}
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-fg-muted">
              Open to engineering roles, collaboration on data/ML side projects,
              or a good conversation about reliability and building software.
              Reach me through any channel below.
            </p>

            <div className="mt-10 flex flex-col divide-y divide-line border-y border-line">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.label === "WhatsApp" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4 transition-colors"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-ink-700 text-accent transition-colors group-hover:border-accent/40">
                      <Icon size={19} />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-fg-faint">
                        {c.label}
                      </span>
                      <span className="text-sm text-fg transition-colors group-hover:text-accent">
                        {c.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      weight="bold"
                      className="ml-auto text-fg-faint transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-xl border border-line bg-ink-800/50 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="First name"
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  error={errors.firstName}
                  autoComplete="given-name"
                  cls={inputCls}
                />
                <Field
                  label="Last name"
                  name="lastName"
                  value={form.lastName}
                  onChange={onChange}
                  error={errors.lastName}
                  autoComplete="family-name"
                  cls={inputCls}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  error={errors.email}
                  autoComplete="email"
                  cls={inputCls}
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  optional
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                  cls={inputCls}
                />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] uppercase tracking-wider text-fg-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  aria-invalid={!!errors.message}
                  placeholder="What would you like to talk about?"
                  className={`${inputCls} resize-y`}
                />
                {errors.message && (
                  <span className="text-xs text-red-400">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={status.sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink-900 transition-all hover:bg-accent-soft active:translate-y-px disabled:opacity-60 sm:w-auto"
              >
                {status.sending ? "Sending…" : "Send message"}
                {!status.sending && <ArrowUpRight size={15} weight="bold" />}
              </button>

              {status.ok === true && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                  <CheckCircle size={16} weight="fill" />
                  {status.msg}
                </p>
              )}
              {status.ok === false && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-red-400">
                  <WarningCircle size={16} weight="fill" />
                  {status.msg}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, error, optional, autoComplete, cls }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-wider text-fg-muted"
      >
        {label}
        {optional && <span className="ml-1 text-fg-faint">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className={cls}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
