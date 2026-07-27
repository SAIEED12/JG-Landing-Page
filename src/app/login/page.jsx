'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: signInError } = await authClient.signIn.email({
      email: form.email,
      password: form.password,
    });

    if (signInError) {
      setError('Wron Credentials');
      setLoading(false);
      return;
    }

    router.push('/dashboard/admin');
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F5F9] px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col gap-4"
      >
        <h1 className="font-serif font-bold text-2xl text-[#0F3457] text-center mb-2">
          Admin Login
        </h1>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
        )}

        <input
          type="email"
          required
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-[#0F3457]/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F3457]/30"
        />

        <input
          type="password"
          required
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border border-[#0F3457]/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F3457]/30"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#0F3457] hover:bg-[#1B4C7E] text-white font-semibold py-3 rounded-full transition-colors disabled:opacity-60"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;