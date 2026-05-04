"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { useSession } from "../../contexts/SessionContext";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import SectionHeader from "@/components/SectionHeader";

export default function Profile() {
  const router = useRouter();
  const { session, isPending, refreshSession } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Only store edited values in state, derive display values from session
  const [editedName, setEditedName] = useState("");
  const [editedImageUrl, setEditedImageUrl] = useState("");

  // Derive current display values
  const displayName = session?.user?.name || "";
  const displayEmail = session?.user?.email || "";
  const displayImageUrl = session?.user?.image || "";

  // Redirect to signin if not authenticated
  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please sign in to access your profile");
      router.push("/signin");
    }
  }, [session, isPending, router]);

  // Show loading state while checking session
  if (isPending) {
    return (
      <div className="w-full min-h-screen py-8 sm:py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-violet-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  // Don't render if no session (will redirect)
  if (!session) {
    return null;
  }

  const handleEditClick = () => {
    // Initialize edit state with current values
    setEditedName(displayName);
    setEditedImageUrl(displayImageUrl);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedName("");
    setEditedImageUrl("");
  };

  const handleSaveChanges = async () => {
    setIsSaving(true);
    try {
      // Update user profile using Better-Auth
      await authClient.updateUser({
        name: editedName,
        image: editedImageUrl,
      });

      // Refresh the session to get updated data
      await refreshSession();

      toast.success("Profile updated successfully!");
      setIsEditing(false);
      setEditedName("");
      setEditedImageUrl("");
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getMemberSince = () => {
    if (session?.user?.createdAt) {
      return new Date(session.user.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
    }
    return "Jan 2025";
  };

  return (
    <div className="w-full min-h-screen py-8 sm:py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {/* Profile Card */}
        <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl shadow-violet-500/5 hover:border-violet-500/30 transition-all duration-300">
          {!isEditing ? (
            // View Mode
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br from-violet-600 to-cyan-500 p-1 mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300">
                {displayImageUrl ? (
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={displayImageUrl}
                      alt={displayName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-full bg-[#0f1318] flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-white font-syne">
                      {getInitials(displayName)}
                    </span>
                  </div>
                )}
              </div>

              {/* Name */}
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-syne">
                {displayName}
              </h1>

              {/* Email */}
              <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6">
                {displayEmail}
              </p>

              {/* Edit Button */}
              <GhostButton
                onClick={handleEditClick}
                className="px-4 sm:px-6 py-2 text-xs sm:text-sm"
              >
                Edit Profile
              </GhostButton>
            </div>
          ) : (
            // Edit Mode
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-2 sm:mb-4 font-syne">
                Edit Profile
              </h2>

              <InputField
                label="Full Name"
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />

              <InputField
                label="Email"
                type="email"
                value={displayEmail}
                disabled
                onChange={() => {}}
              />

              <InputField
                label="Profile Image URL"
                type="url"
                placeholder="https://example.com/avatar.jpg"
                value={editedImageUrl}
                onChange={(e) => setEditedImageUrl(e.target.value)}
              />

              <div className="flex gap-4 mt-2">
                <GradientButton
                  onClick={handleSaveChanges}
                  disabled={isSaving}
                  className="flex-1"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </GradientButton>
                <GhostButton
                  onClick={handleCancelEdit}
                  disabled={isSaving}
                  className="flex-1"
                >
                  Cancel
                </GhostButton>
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="bg-[#0f1318] border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:border-violet-500/30 hover:scale-105 transition-all duration-300 cursor-default">
            <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-syne">
              12
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Liked</div>
          </div>

          <div className="bg-[#0f1318] border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:border-violet-500/30 hover:scale-105 transition-all duration-300 cursor-default">
            <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-syne">
              5
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Downloads</div>
          </div>

          <div className="bg-[#0f1318] border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:border-violet-500/30 hover:scale-105 transition-all duration-300 cursor-default">
            <div className="text-base sm:text-2xl font-bold bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent mb-1 font-syne">
              {getMemberSince()}
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              Member Since
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div>
          <SectionHeader
            title="My Activity"
            subtitle="Your liked and downloaded images"
            className="mb-6 sm:mb-8"
          />

          {/* Empty State */}
          <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-8 sm:p-12 text-center hover:border-violet-500/20 transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-violet-500/30">
              <ImageIcon className="text-violet-400" size={32} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-syne">
              No Activity Yet
            </h3>
            <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto">
              Your liked and downloaded images will appear here. Start exploring
              the gallery to build your collection!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
