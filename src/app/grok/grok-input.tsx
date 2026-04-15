"use client";

import Image from "next/image";
import { useState } from "react";

export default function GrokInput() {
  const [value, setValue] = useState("");

  return (
    <div className="mx-4 mb-4 rounded-2xl bg-[#1a1a1a] px-4 pt-4 pb-3">
      <textarea
        rows={1}
        placeholder="Ask anything"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-transparent text-white placeholder-[#71767b] text-[17px] resize-none outline-none leading-snug"
      />
      <div className="flex items-center justify-between mt-3">
        {/* Left: attachment */}
        <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 transition-colors">
          <Image src="/images/add-single-file.svg" alt="attach" width={20} height={20} />
        </button>
        {/* Right: Auto selector + voice */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-[14px] text-white hover:bg-white/10 px-2 py-1 rounded-full transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            <span>Auto</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>
          <button
            className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${value.trim() ? "bg-white" : "bg-[#2f3336] hover:bg-[#3a3f44]"
              }`}
          >
            {value.trim() ? (
              <Image src="/images/send.svg" alt="send" width={18} height={18} />
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#71767b]">
                <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
