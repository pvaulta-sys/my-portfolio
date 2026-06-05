'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFormState('error');
    }
  };

  const fieldClass = (field: string) =>
    `w-full bg-[rgba(255,255,255,0.03)] border ${errors[field] ? 'border-red-500/50' : 'border-[rgba(255,255,255,0.1)]'} rounded-lg px-4 py-3 text-sm text-[#fafafa] placeholder-[#6b7280] focus:outline-none focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/20 transition-colors`;

  if (formState === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle2 size={48} className="mx-auto mb-4 text-[#34d399]" />
        <h3 className="text-xl font-bold text-[#fafafa] mb-2">Message sent</h3>
        <p className="text-[#a1a1aa]">Thank you! I&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {formState === 'error' && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email directly.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={fieldClass('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={fieldClass('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className={fieldClass('subject')}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
      </div>
      <div>
        <textarea
          rows={5}
          placeholder="Your message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={fieldClass('message') + ' resize-y min-h-[120px]'}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="btn btn--primary self-start"
      >
        <span className="btn__inner">
          <span className="btn__label">
            {formState === 'submitting' ? 'Sending...' : 'Send message'}
          </span>
          <span className="btn__arrow" aria-hidden>
            <Send size={15} strokeWidth={2.25} className="btn__arrow-icon" />
          </span>
        </span>
      </button>
    </form>
  );
}
