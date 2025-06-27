"use client"

import { useEffect, useRef } from 'react';

export default function ThreeDScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the Spline viewer script only once
    if (!document.getElementById("spline-viewer-script")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.10.14/build/spline-viewer.js";
      script.id = "spline-viewer-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="mx-auto my-3 flex justify-center items-center">
      <div
        className="w-[700px] h-[700px] rounded-2xl overflow-hidden shadow-lg"
        style={{ borderRadius: "32px", overflow: "hidden" }}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          dangerouslySetInnerHTML={{
            __html: `
              <spline-viewer
                url="https://prod.spline.design/lHQxYiMFcmUSJnhx/scene.splinecode"
                style='width:100%;height:100%;border:none;display:block;'>
              </spline-viewer>
            `
          }}
        />
      </div>
    </div>
  );
}

