// File: pages/residences/kalpataru-azuro.js
import RequestPreviewSection from "@/components/RequestPreviewSection";
import SignatureResidencesSection from "@/components/SignatureResidencesSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export default function KalpataruAzuro() {
  return (
    <>
      <RequestPreviewSection />
      <SignatureResidencesSection />
      <Breadcrumbs />
      <Footer />
    </>
  );
}

// File: components/RequestPreviewSection.jsx
export default function RequestPreviewSection() {
  return (
    <section className="requestSec reqNewSec">
      <div className="requestBG">
        <img src="/images/request-previewbg.webp" alt="" className="desktopImg" />
        <img src="/images/request-preview-mobile.webp" alt="" className="mobileImg" />
      </div>
      <div className="requestWrapper requestContent reqNewContent">
        <div className="secHeading newSecHeading">
          <h2 className="section-text-up">
            <div className="trigger">
              <span>
                Request A Private Preview
                <img src="/images/cta-arrow-white.svg" alt="" />
              </span>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
}

// File: components/SignatureResidencesSection.jsx
export default function SignatureResidencesSection() {
  return (
    <section className="signatureSec projectdetBeach">
      <div className="signatureWrapper">
        <div className="secHeading">
          <h2 className="section-text-up">
            <span>
              A home that stands out Both aesthetically And in its experience.
            </span>
          </h2>
        </div>
      </div>
      <div className="signatureImg">
        <div className="Viewimages">
          <img src="/images/project-det-6thfold.png" alt="" />
        </div>
      </div>
    </section>
  );
}

// File: components/Breadcrumbs.jsx
export default function Breadcrumbs() {
  return (
    <section className="breadcrumbSec">
      <div className="breadWrapper">
        <div className="breadcontent">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/residences">Residences</a></li>
            <li><a href="/residences/kalpataru-azuro">Kalpataru Azuro</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// File: components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footerSec signatureFoot">
      <div className="footerImg">
        <img src="/images/signature-residences-footer.webp" alt="" />
      </div>
    </footer>
  );
}

// File: styles/globals.css
/* Add all your global styles here */
.requestSec { /* styles */ }
.signatureSec { /* styles */ }
.breadcrumbSec { /* styles */ }
.footerSec { /* styles */ }

// File: next.config.js
module.exports = {
  reactStrictMode: true,
};
