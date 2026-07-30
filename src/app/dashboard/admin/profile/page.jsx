"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
import { User, Mail, Lock, CheckCircle2, AlertCircle, Eye, EyeOff } from "lucide-react";
import AdminLoader from "@/components/dashboard/AdminLoader";

const Profile = () => {
  const router = useRouter();
  const { data: session, isPending, refetch } = useSession();

  const user = session?.user;

  const [name, setName] = useState("");
  const [nameStatus, setNameStatus] = useState({ ok: false, msg: "", error: false });
  const [nameLoading, setNameLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState({ ok: false, msg: "", error: false });
  const [emailLoading, setEmailLoading] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState({ ok: false, msg: "", error: false });
  const [passwordLoading, setPasswordLoading] = useState(false);

  if (isPending) {
    return <AdminLoader fullPage size="lg" text="Loading..." />;
  }

  const handleUpdateName = async (e) => {
    e.preventDefault();
    setNameLoading(true);
    setNameStatus({ ok: false, msg: "", error: false });

    const { error } = await authClient.updateUser({ name });

    if (error) {
      setNameStatus({ ok: false, msg: error.message || "Failed to update name", error: true });
    } else {
      setNameStatus({ ok: true, msg: "Name updated successfully", error: false });
      refetch();
    }

    setNameLoading(false);
  };

  const handleChangeEmail = async (e) => {
    e.preventDefault();
    setEmailLoading(true);
    setEmailStatus({ ok: false, msg: "", error: false });

    const { error } = await authClient.changeEmail({ newEmail: email });

    if (error) {
      setEmailStatus({ ok: false, msg: error.message || "Failed to change email", error: true });
    } else {
      setEmailStatus({ ok: true, msg: "Email changed successfully", error: false });
      refetch();
    }

    setEmailLoading(false);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    setPasswordStatus({ ok: false, msg: "", error: false });

    const { error } = await authClient.changePassword({
      currentPassword,
      newPassword,
      revokeOtherSessions: true,
    });

    if (error) {
      setPasswordStatus({ ok: false, msg: error.message || "Failed to change password", error: true });
      setPasswordLoading(false);
      return;
    }

    setPasswordStatus({ ok: true, msg: "Password changed! Redirecting to login...", error: false });
    setPasswordLoading(false);

    setTimeout(async () => {
      await authClient.signOut();
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-10">
      <h1 className="font-serif font-bold text-2xl text-[#0F3457] mb-6 mt-5">
        Profile Settings
      </h1>

      {/* Profile Info Card */}
      <div className="bg-white rounded-2xl border border-[#0F3457]/10 p-6">
        <h2 className="font-serif font-bold text-lg text-[#0F3457] mb-4">
          Profile Information
        </h2>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <User size={18} className="text-[#0F3457]/60 shrink-0" />
            <div>
              <p className="text-xs text-[#1C2530]/60">Name</p>
              <p className="font-semibold text-[#1C2530]">
                {user?.name || "Not set"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={18} className="text-[#0F3457]/60 shrink-0" />
            <div>
              <p className="text-xs text-[#1C2530]/60">Email</p>
              <p className="font-semibold text-[#1C2530]">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Update Name */}
      <div className="bg-white rounded-2xl border border-[#0F3457]/10 p-6">
        <h2 className="font-serif font-bold text-lg text-[#0F3457] mb-4">
          Update Name
        </h2>

        <form onSubmit={handleUpdateName} className="space-y-4">
          <div>
            <label className="block text-sm text-[#1C2530]/60 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={user?.name || "Enter your name"}
              className="w-full border border-[#0F3457]/20 rounded-xl px-4 py-2.5 text-sm text-[#1C2530] outline-none focus:border-[#0F3457] transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={nameLoading || !name.trim()}
            className="bg-[#0F3457] text-white rounded-xl px-6 py-2.5 text-sm font-semibold hover:bg-[#0F3457]/90 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
          >
            {nameLoading ? "Saving..." : "Save Name"}
          </button>

          {nameStatus.msg && (
            <div
              className={`flex items-center gap-2 text-sm mt-2 ${
                nameStatus.error ? "text-red-600" : "text-green-600"
              }`}
            >
              {nameStatus.error ? (
                <AlertCircle size={16} />
              ) : (
                <CheckCircle2 size={16} />
              )}
              {nameStatus.msg}
            </div>
          )}
        </form>
      </div>

      {/* Change Email */}
      <div className="bg-white rounded-2xl border border-[#0F3457]/10 p-6">
        <h2 className="font-serif font-bold text-lg text-[#0F3457] mb-4">
          Change Email
        </h2>

        <form onSubmit={handleChangeEmail} className="space-y-4">
          <div>
            <label className="block text-sm text-[#1C2530]/60 mb-1.5">
              New Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={user?.email || "Enter new email"}
              className="w-full border border-[#0F3457]/20 rounded-xl px-4 py-2.5 text-sm text-[#1C2530] outline-none focus:border-[#0F3457] transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={emailLoading || !email.trim()}
            className="bg-[#0F3457] text-white rounded-xl px-6 py-2.5 text-sm font-semibold hover:bg-[#0F3457]/90 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
          >
            {emailLoading ? "Saving..." : "Change Email"}
          </button>

          {emailStatus.msg && (
            <div
              className={`flex items-center gap-2 text-sm mt-2 ${
                emailStatus.error ? "text-red-600" : "text-green-600"
              }`}
            >
              {emailStatus.error ? (
                <AlertCircle size={16} />
              ) : (
                <CheckCircle2 size={16} />
              )}
              {emailStatus.msg}
            </div>
          )}
        </form>
      </div>

      {/* Change Password */}
      <div className="bg-white rounded-2xl border border-[#0F3457]/10 p-6">
        <h2 className="font-serif font-bold text-lg text-[#0F3457] mb-4">
          Change Password
        </h2>

        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm text-[#1C2530]/60 mb-1.5">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                className="w-full border border-[#0F3457]/20 rounded-xl px-4 py-2.5 pr-10 text-sm text-[#1C2530] outline-none focus:border-[#0F3457] transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C2530]/40 hover:text-[#0F3457] transition cursor-pointer"
              >
                {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#1C2530]/60 mb-1.5">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full border border-[#0F3457]/20 rounded-xl px-4 py-2.5 pr-10 text-sm text-[#1C2530] outline-none focus:border-[#0F3457] transition"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C2530]/40 hover:text-[#0F3457] transition cursor-pointer"
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={passwordLoading || !currentPassword.trim() || !newPassword.trim()}
            className="bg-[#0F3457] text-white rounded-xl px-6 py-2.5 text-sm font-semibold hover:bg-[#0F3457]/90 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
          >
            {passwordLoading ? "Changing..." : "Change Password"}
          </button>

          {passwordStatus.msg && (
            <div
              className={`flex items-center gap-2 text-sm mt-2 ${
                passwordStatus.error ? "text-red-600" : "text-green-600"
              }`}
            >
              {passwordStatus.error ? (
                <AlertCircle size={16} />
              ) : (
                <CheckCircle2 size={16} />
              )}
              {passwordStatus.msg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
