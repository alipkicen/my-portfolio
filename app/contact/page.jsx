"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+60)18 313 4090" },
  { icon: <FaWhatsapp />, title: "Whatsapp", description: "(+60)18 313 4090" },
  { icon: <FaEnvelope />, title: "Email", description: "alip.kicen@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
    // phone is optional
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: false, ok: null, msg: "" });

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

      setStatus({ sending: false, ok: true, msg: "Message sent. Thank you!" });
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: "Failed to send. Please try again later." });
      console.error(err);
    }
  };

  const FieldError = ({ name }) =>
    errors[name] ? <p className="text-red-400 text-xs mt-1">{errors[name]}</p> : null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 3, ease: "easeOut" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={onSubmit} className="flex flex-col gap-6 p-5 sm:p-8 md:p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl sm:text-4xl text-accent">Let's connect!</h3>
              <p className="text-white/60">
                I’d love to hear from you. Fill in the form and I’ll get back to you via email.
              </p>

              {/* fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="min-w-0">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={form.firstName}
                    onChange={onChange}
                    className="w-full h-12"
                    autoComplete="given-name"
                    aria-invalid={!!errors.firstName}
                  />
                  <FieldError name="firstName" />
                </div>

                <div className="min-w-0">
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={form.lastName}
                    onChange={onChange}
                    className="w-full h-12"
                    autoComplete="family-name"
                    aria-invalid={!!errors.lastName}
                  />
                  <FieldError name="lastName" />
                </div>

                <div className="min-w-0">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address *"
                    value={form.email}
                    onChange={onChange}
                    className="w-full h-12"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                  />
                  <FieldError name="email" />
                </div>

                <div className="min-w-0">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    value={form.phone}
                    onChange={onChange}
                    className="w-full h-12"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <Textarea
                  name="message"
                  className="w-full min-h-[180px]"
                  placeholder="Type your message here *"
                  value={form.message}
                  onChange={onChange}
                  aria-invalid={!!errors.message}
                />
                <FieldError name="message" />
              </div>

              <Button size="md" className="max-w-40" type="submit" disabled={status.sending}>
                {status.sending ? "Sending..." : "Send message"}
              </Button>

              {status.ok === true && (
                <p className="text-emerald-400 text-sm">✅ {status.msg}</p>
              )}
              {status.ok === false && (
                <p className="text-red-400 text-sm">❌ {status.msg}</p>
              )}
            </form>
          </div>


          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}