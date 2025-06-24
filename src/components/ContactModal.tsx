'use client';

import { useEffect, useState, useLayoutEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // For smooth unmount, track visible state
  const [show, setShow] = useState(false);
  // For animation, track if we should show the open state
  const [animateIn, setAnimateIn] = useState(false);
  // For copy feedback
  const [copied, setCopied] = useState(false);

  const email = 'julie.chabin@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  // Mount/unmount logic
  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else if (show) {
      setAnimateIn(false);
      // Wait for animation before unmount
      const timeout = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, show]);

  // Opening transition: trigger after mount
  useLayoutEffect(() => {
    if (show) {
      setAnimateIn(false); // Start closed
      // Next frame, set open
      requestAnimationFrame(() => setAnimateIn(true));
    }
  }, [show]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${animateIn ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Modal */}
      <div
        className={`relative bg-true-gray-800 border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transition-all duration-300 ease-out
          ${animateIn ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}`}
        style={{ zIndex: 60 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-true-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        {/* Content */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-6 border-b pb-6 border-white/10">Don't be shy, say hi!</h2>
          <div className="space-y-6">
            {/* Email */}
            <div>
              <h3 className="text-true-gray-300 text-sm font-medium mb-2">Email</h3>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="mailto:julie.chabin@gmail.com"
                  className="text-white hover:text-blue-400 transition-colors text-md"
                >
                  julie.chabin@gmail.com
                </a>
                <button
                  onClick={copyToClipboard}
                  className="text-true-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? (
                    <Check size={12} className="text-green-400" />
                  ) : (
                    <Copy size={12} />
                  )}
                </button>
              </div>
            </div>
            {/* Twitter */}
            <div>
              <h3 className="text-true-gray-300 text-sm font-medium mb-2">X / Twitter</h3>
              <a
                href="https://twitter.com/syswarren"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors text-md"
              >
                @syswarren
              </a>
            </div>
            {/* LinkedIn */}
            <div>
              <h3 className="text-true-gray-300 text-sm font-medium mb-2">LinkedIn / Resume</h3>
              <a
                href="https://linkedin.com/in/juliechabin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors text-md"
              >
                juliechabin
              </a>
            </div>
            {/* Location */}
            <div>
              <h3 className="text-true-gray-300 text-sm font-medium mb-2">Location</h3>
              <p className="text-white text-md">☀️ 🇫🇷 🌴</p>
            </div>
          </div>
          {/* Message */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-true-gray-300 text-sm">
              While I&apos;m currently fully booked, I&apos;m always up for a good conversation about design, startups, or building something useful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 