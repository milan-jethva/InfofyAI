import { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block" }}
         data-ad-client="ca-pub-9872414866439900"
         data-ad-slot="9652419265"
         data-ad-format="autorelaxed"></ins>
  );
};

export default AdComponent;
