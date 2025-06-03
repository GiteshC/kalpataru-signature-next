
export default function Home() {
  return (
    <>
      <section className="homebannerSec animationBanner">
        <div className="videoBox">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/images/homepage-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="homebannerWrapper homebannerContent">
          <div className="secHeading">
            <h1 className="swift-up-text new-swift-up-text">
              <span><i style={{ animationDelay: "0s" }}>Signature</i></span>
              <span><i style={{ animationDelay: "0.4s" }}>Collection</i></span>
            </h1>
            <p className="bannerTextanimation bannerTextanimationnew">
              <span>Fine Living. Finer Experiences</span>
            </p>
          </div>
        </div>
        <div className="scrollText scrollTextnew">
          <h3>Scroll to Explore</h3>
        </div>
      </section>

      <section className="signatureSec" id="signature-philosophy">
        <div className="signatureWrapper">
          <div className="secHeading">
            <h2 className="section-text-up newClass"><span>Signature Philosophy</span></h2>
            <p className="section-text-up newClass"><span>The pursuit of luxury. Our ultimate obsession.</span></p>
            <a href="https://ixdtm.com/projects/kalpataru-signature-wp/signature-philosophy/" className="section-text-up ctaBluetext newClass">
              <span>
                Explore More{" "}
                <img src="https://ixdtm.com/projects/kalpataru-signature-wp/wp-content/themes/kalpataru-signature/images/cta-arrow.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="signatureVideo">
          <div className="videoBox">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/images/signature-philosophy.mp4" type="video/mp4" />
            </video>
          </div>
          <a
            data-fancybox=""
            data-ratio="2"
            href="https://youtu.be/hN9fi92qncw?si=Sl1L3YBum54Y27ni"
          >
            Play full video
          </a>
        </div>
      </section>
    </>
  );
}
