"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#111827] px-4 py-12 md:px-6">
      <div className="w-full max-w-4xl bg-gray-800/50 text-white border border-gray-700 rounded-lg p-12 shadow-lg flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold tracking-tight text-white text-center">Get In Touch</h2>
        <p className="mt-4 text-xl text-white/70 text-center">
          Want to contact me? Reach out!
        </p>

        <div className="w-full mt-10 space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <Mail className="h-7 w-7 text-indigo-400" />
            <a href="mailto:mansoorwork980@gmail.com" className="text-xl hover:underline hover:text-indigo-300 transition">
            mansoorwork980@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex space-x-5">
          <a href="https://www.linkedin.com/in/mansoor-zafar-08b943307/" target="_blank" className="rounded-full bg-white/20 p-4 text-white hover:bg-indigo-600 transition">
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <Linkedin/>
            </svg>
          </a>
          <a href="https://github.com/MansoorAZafar" target="_blank" className="rounded-full bg-white/20 p-4 text-white hover:bg-indigo-600 transition">
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <Github/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
