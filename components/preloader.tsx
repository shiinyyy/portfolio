"use client"

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Preloader = () => {
  console.log("Rendering Preloader (main)");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading or listen for real loading events
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <DotLottieReact
            src="https://lottie.host/01579b41-7535-466e-9f63-895353820207/a0uuAlS9cF.lottie"
            loop
            autoplay
            style={{ width: 600, height: 700 }}
          />
        </div>
      )}
    </>
  );
};

export const PreloaderGH = () => {
  console.log("Rendering PreloaderGH (GH page)");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <DotLottieReact
            src="https://lottie.host/e841dc14-7da1-4fda-905f-4f34c2183f7f/aosKWTlVb6.lottie"
            loop
            autoplay
            style={{ width: 250, height: 250 }}
          />
        </div>
      )}
    </>
  );
};

