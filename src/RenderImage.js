import mobileImage from "./images/image-product-mobile.jpg";
import desktopImage from "./images/image-product-desktop.jpg";
import { useEffect, useState } from "react";

export default function RenderImage(props) {
  let [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1440) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth < 1440) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      {isMobile ? (
        <img src={mobileImage} alt="mobile" className={props.className} />
      ) : (
        <img src={desktopImage} alt="desktop"  className={props.className} />
      )}
    </>
  );
}
