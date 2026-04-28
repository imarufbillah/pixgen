"use client";

import Link from "next/link";
import { Sparkles, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";
import InputField from "@/components/InputField";
import GradientButton from "@/components/GradientButton";

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Full name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Full name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Image URL validation (optional but if provided, should be valid)
    if (
      formData.image &&
      !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(formData.image)
    ) {
      newErrors.image = "Please enter a valid image URL (jpg, png, gif, webp)";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        image: formData.image || undefined, // Only include image if provided
      });

      if (error) {
        toast.error("Sign up failed", {
          description:
            error.message || "Please check your information and try again.",
        });
        return;
      }

      if (data) {
        toast.success("Account created successfully!", {
          description:
            "Welcome to PixGen! You can now sign in to your account.",
        });

        // Redirect to signin page or profile
        router.push("/signin");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("Sign up failed", {
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture py-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/10 via-[#080b10] to-cyan-900/10" />

      {/* Sign Up Card */}
      <div className="relative z-10 w-full max-w-md mx-4 sm:mx-auto">
        <div className="bg-[#0f1318] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-violet-500/10">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Sparkles className="text-violet-400" size={28} />
            <span className="text-2xl sm:text-3xl font-bold font-syne">
              <span className="text-white">Pix</span>
              <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Gen
              </span>
            </span>
          </div>

          {/* Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-syne">
              Create Account
            </h1>
            <p className="text-sm sm:text-base text-slate-400">
              Join PixGen and explore AI-generated art
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {/* Full Name Field */}
            <InputField
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              error={errors.name}
            />

            {/* Email Field */}
            <InputField
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              error={errors.email}
            />

            {/* Profile Image URL Field */}
            <InputField
              label="Profile Image URL (Optional)"
              type="url"
              placeholder="https://example.com/avatar.jpg"
              value={formData.image}
              onChange={(e) => handleInputChange("image", e.target.value)}
              error={errors.image}
            />

            {/* Password Field */}
            <div className="relative">
              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                error={errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-9.5 sm:top-10.5 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit Error - Removed since we're using toast notifications */}

            <GradientButton
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 sm:py-4 mt-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </GradientButton>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-5 sm:my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs sm:text-sm text-slate-500">
              or continue with
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Google OAuth Button */}
          <button className="w-full flex items-center justify-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg hover:bg-slate-100 transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-slate-900 font-semibold text-sm sm:text-base">
              Continue with Google
            </span>
          </button>

          {/* Sign In Link */}
          <p className="text-center text-xs sm:text-sm text-slate-400 mt-5 sm:mt-6">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-violet-400 hover:text-cyan-400 font-semibold transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
