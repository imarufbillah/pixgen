"use client";

import { useState } from "react";
import { User, Mail, Image as ImageIcon } from "lucide-react";
import InputField from "@/components/InputField";
import GradientButton from "@/components/GradientButton";
import GhostButton from "@/components/GhostButton";
import SectionHeader from "@/components/SectionHeader";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "",
  });

  return (
    <div className="w-full min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {/* Profile Card */}
        <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl shadow-violet-500/5">
          {!isEditing ? (
            // View Mode
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br from-violet-600 to-cyan-500 p-1 mb-4 sm:mb-6">
                <div className="w-full h-full rounded-full bg-[#0f1318] flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white font-syne">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-syne">
                {userData.name}
              </h1>

              {/* Email */}
              <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6">
                {userData.email}
              </p>

              {/* Edit Button */}
              <GhostButton
                onClick={() => setIsEditing(true)}
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
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />

              <InputField
                label="Email"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />

              <InputField
                label="Profile Image URL"
                type="url"
                placeholder="https://example.com/avatar.jpg"
                value={userData.imageUrl}
                onChange={(e) =>
                  setUserData({ ...userData, imageUrl: e.target.value })
                }
              />

              <div className="flex gap-4 mt-2">
                <GradientButton
                  onClick={() => setIsEditing(false)}
                  className="flex-1"
                >
                  Save Changes
                </GradientButton>
                <GhostButton
                  onClick={() => setIsEditing(false)}
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
          <div className="bg-[#0f1318] border border-white/10 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-syne">
              12
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Liked</div>
          </div>

          <div className="bg-[#0f1318] border border-white/10 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-syne">
              5
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Downloads</div>
          </div>

          <div className="bg-[#0f1318] border border-white/10 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-base sm:text-2xl font-bold bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent mb-1 font-syne">
              Jan 2025
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
          <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
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
