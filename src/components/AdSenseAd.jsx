import { useEffect } from "react";

export default function AdSenseAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block", margin: "20px auto", textAlign: "center" }}
      data-ad-client="ca-pub-9872414866439900"
      data-ad-slot="5786994744"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
