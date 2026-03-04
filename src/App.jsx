import { useState } from "react";
import "./index.css";

const TABS = ["about", "resume", "portfolio", "articles", "contact"];

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="page">
      
      <aside className="sidebar">
        <div className="avatar-block">
          <div className="avatar-frame">
            <div className="avatar-inner">
              
              <img src="\razane.jpeg" alt="Razan Marref" />
            </div>
            <div className="badge-availability">Available for hire</div>
          </div>
        </div>

        <div className="sidebar-name">
          <h1>Razan Marref</h1>
          <p>Machine Learning Engineer &amp; AI for Healthcare</p>
        </div>

        <div className="sidebar-info">
          <InfoRow
            label="Email"
            value="razan.marref07@gmail.com"
            icon="email"
            href="mailto:razan.marref07@gmail.com"
          />
          <InfoRow
            label="Location"
            value="Algiers, Algeria"
            icon="location"
          />

          <InfoRow
            label="LinkedIn"
            value="Razane Marref"
            icon="linkedin"
            href="https://www.linkedin.com/in/razanemarref/"
          />

          <InfoRow
            label="GitHub"
            value="Razane Marref"
            icon="github"
            href="https://github.com/MarRazane"
          />
        </div>
      </aside>

      {/* ===== MAIN PANEL ===== */}
      <main className="main">
        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`tab ${activeTab === "resume" ? "active" : ""}`}
            onClick={() => setActiveTab("resume")}
          >
            Resume
          </button>
          <button
            className={`tab ${activeTab === "portfolio" ? "active" : ""}`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
          <button
            className={`tab ${activeTab === "articles" ? "active" : ""}`}
            onClick={() => setActiveTab("articles")}
          >
            Articles
          </button>
          <button
            className={`tab ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </div>

        {/* Sections */}
        {activeTab === "about" && <AboutSection />}
        {activeTab === "resume" && <ResumeSection />}
        {activeTab === "portfolio" && <PortfolioSection />}
        {activeTab === "articles" && <ArticlesSection />}
        {activeTab === "contact" && <ContactSection />}
      </main>
    </div>
  );
}

/* ===== SMALL COMPONENTS ===== */

function InfoRow({ label, value, icon, href }) {
  return (
    <div className="info-row">
      <div className="info-icon">{getIcon(icon)}</div>
      <div>
        <div className="info-label">{label}</div>
        <div className="info-value">
          {href ? (
            <a href={href} target="_blank" rel="noreferrer">
              {value}
            </a>
          ) : (
            value
          )}
        </div>
      </div>
    </div>
  );
}

function getIcon(type) {
  switch (type) {
    case "email":
      return (
        <svg width="18" height="18" fill="#d99cff" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
                   2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                   4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    case "location":
      return (
        <svg width="18" height="18" fill="#d99cff" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 
                   9c0 5.25 7 13 7 13s7-7.75 
                   7-13c0-3.87-3.13-7-7-7zm0 
                   9.5c-1.38 0-2.5-1.12-2.5-2.5
                   s1.12-2.5 2.5-2.5 2.5 1.12 
                   2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="18" height="18" fill="#d99cff" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5C0 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.16h.05c.53-1 1.82-2.16 3.74-2.16 4 0 4.74 2.63 4.74 6V24h-4v-7.9c0-1.88 0-4.1-2.5-4.1s-2.9 1.94-2.9 3.96V24h-4V8z" />
        </svg>
      );
    case "github":
      return (
        <svg width="18" height="18" fill="#d99cff" viewBox="0 0 24 24">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.69-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.2 11.2 0 0 1 2.9-.39c.99.01 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.75.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.07.8 2.17 0 1.57-.02 2.84-.02 3.23 0 .31.21.68.8.56C20.21 21.43 23.5 17.1 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ===== SECTIONS ===== */

function AboutSection() {
  return (
    <section className="section active">
      <h2 className="section-title">About Me</h2>
      <div className="section-underline" />

      <p className="paragraph">
        I am a <strong>Machine Learning Engineer</strong> with a Master’s degree
        in Artificial Intelligence &amp; Multimedia. My main interests are{" "}
        <strong>AI for healthcare</strong>, computer vision, and real-time
        intelligent systems.
      </p>
      <p className="paragraph">
        I have worked on chest X-ray classification, clinical data analysis,{" "}
        <strong>LLM benchmarks for Parkinson’s disease</strong>, and several{" "}
        <strong>personalized federated learning algorithms</strong>. My goal is
        to build reliable and explainable models that genuinely support
        clinicians in their decisions.
      </p>
      <p className="paragraph">
        I enjoy end-to-end work: data collection and preprocessing, model design
        and experimentation, evaluation, and finally{" "}
        <strong>integration into real applications</strong> such as APIs,
        interfaces, or real-time systems.
      </p>

      <h3 className="subheading">Skills</h3>
      <div className="skills-grid">
        <SkillCard
          icon="🧠"
          title="Machine Learning & Deep Learning"
          subtitle="Modeling & experimentation"
          body="CNNs, LSTMs, Transformers, YOLO, model evaluation, hyperparameter tuning,
                experiment tracking and deployment readiness."
        />
        <SkillCard
          icon="💊"
          title="AI for Healthcare"
          subtitle="Clinical data & imaging"
          body="Chest X-ray classification, MEDRA dataset reliability framework,
                Parkinson’s LLM QA evaluation, explainability and safety considerations."
        />
        <SkillCard
          icon="🔎"
          title="NLP & Vector Search"
          subtitle="LLMs & embeddings"
          body="DistilBERT embeddings, RAG, semantic search with Typesense, content
                generation and classification for large website collections."
        />
        <SkillCard
          icon="📷"
          title="Computer Vision"
          subtitle="Detection & segmentation"
          body="YOLOv8/YOLOv12, ExDark night-scene detection, wall segmentation and
                recoloring, custom preprocessing and augmentation."
        />
        <SkillCard
          icon="⚙️"
          title="Python & Tools"
          subtitle="End-to-end pipelines"
          body="Python, PyTorch, TensorFlow, scikit-learn, NumPy, Pandas, Docker,
                Git, Firebase, Typesense, basics of Kafka/Spark."
        />
        <SkillCard
          icon="📚"
          title="Teaching & Communication"
          subtitle="Mentoring & pedagogy"
          body="Teaching Python and ML, preparing material, guiding students and
                non-technical stakeholders through complex AI concepts."
        />
      </div>
    </section>
  );
}

function SkillCard({ icon, title, subtitle, body }) {
  return (
    <article className="skill-card">
      <div className="skill-icon">{icon}</div>
      <div className="skill-title">{title}</div>
      <div className="skill-sub">{subtitle}</div>
      <p className="skill-body">{body}</p>
    </article>
  );
}

function ResumeSection() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="section active">
      <h2 className="section-title">Resume</h2>
      <div className="section-underline" />

      <h3 className="subheading">Professional Experience</h3>
      <div className="timeline">
        <TimelineItem
          role="Machine Learning Engineer"
          place="Teddra Inc. · Remote"
          date="Jun 2024 – May 2025"
          desc="Developed ML models and NLP pipelines, integrated embeddings and semantic
                search, and collaborated with engineers and domain experts on generative AI."
        />
        <TimelineItem
          role="Data Scientist Instructor"
          place="GoMyCode"
          date="May 2024 – Aug 2024"
          desc="Led hands-on courses in Python and data science, mentored students on
                projects and career paths, and updated curriculum content."
        />
        <TimelineItem
          role="ML Engineer – Freelancer"
          place="Independent"
          date="Nov 2023 – May 2024"
          desc="Built custom ML solutions for clients across predictive analytics, NLP
                and computer vision; handled full pipeline from data to deployment."
        />
        <TimelineItem
          role="Data Analytics Intern"
          place="Algérie Télécom"
          date="Feb 2023 – Mar 2023"
          desc="Maintained large datasets, performed descriptive analyses and contributed
                to reporting to support business decisions."
        />
      </div>

      <h3 className="subheading">Education</h3>
      <div className="timeline">
        <TimelineItem
          role="Master’s Degree in Artificial Intelligence"
          place="University of Batna 2, Algeria"
          date="2021 – 2023"
          desc="Focused on deep learning, computer vision, NLP and applied AI projects."
        />
        <TimelineItem
          role="Bachelor’s Degree in Computer Science"
          place="University of Batna 2, Algeria"
          date="2018 – 2021"
          desc="Foundations in algorithms, data structures, databases and software engineering."
        />
      </div>

      <h3 className="subheading">Certificates</h3>
      <div className="cert-list">
        <CertItem
          name="TensorFlow Developer Certificate"
          org="TensorFlow – Google"
          meta="Issued: Feb 2022"
          file="/certificates/tensorflow.pdf"
          onOpen={setActiveCert}
        />
        <CertItem
          name="Google Data Analytics Professional Certificate"
          org="Google / Coursera"
          meta="Issued: Apr 2022"
          file="/certificates/google-data-analytics.pdf"
          onOpen={setActiveCert}
        />
        <CertItem
          name="AI for Medicine Specialization"
          org="Stanford – Coursera"
          meta="Issued: Mar 2023"
          file="/certificates/ai-for-medicine.pdf"
          onOpen={setActiveCert}
        />
      </div>
      
      {activeCert && (
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}



function TimelineItem({ role, place, date, desc }) {
  return (
    <div className="timeline-item">
      <div className="timeline-role">{role}</div>
      <div className="timeline-place">{place}</div>
      <div className="timeline-date">{date}</div>
      <p className="timeline-desc">{desc}</p>
    </div>
  );
}

function CertItem({ name, org, meta, file, onOpen }) {
  return (
    <div className="cert-item">
      <div className="cert-main">
        <div className="cert-name">{name}</div>
        <div className="cert-org">{org}</div>
        <div className="cert-meta">{meta}</div>
      </div>
      <button
        type="button"
        className="cert-link"
        onClick={() => onOpen({ name, file })}
      >
        View
      </button>
    </div>
  );
}

function CertificateModal({ cert, onClose }) {
  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div
        className="cert-modal"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="cert-modal-header">
          <div className="cert-modal-title">{cert.name}</div>
          <button
            type="button"
            className="cert-modal-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="cert-modal-body">
          {/* PDF viewer */}
          <iframe
            title={cert.name}
            src={cert.file}
            className="cert-modal-frame"
          />

          <div className="cert-modal-footer">
            <a href={cert.file} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


function PortfolioSection() {
  return (
    <section className="section active">
      <h2 className="section-title">Portfolio</h2>
      <div className="section-underline" />

      <div className="portfolio-grid">
        <PortfolioCard
          img="/traffic-thumb.png"
          title="Real-Time Traffic Congestion Prediction"
          meta="Streaming . API"
          desc="-"
          date="In progress"
          github="https://github.com/MarRazane/realtime-traffic-detection"  
        />

        <PortfolioCard
          img="public/air-mnist-thumb.png"
          title="Air MNIST – Touchless Gesture-Based Digit Recognition"
          meta="Computer Vision · Hand Tracking · Machine Learning"
          desc="Draw digits in the air using hand gestures. Real-time hand tracking with MediaPipe 
                and Random Forest classifier to recognize air-drawn numbers (0-9) with 85-90% accuracy."
          date="2026"
          github="https://github.com/MarRazane/MNIST-AIR"   
        />

      </div>
    </section>
  );
}
const GitHubIcon = ({ size = 18, color = "#c084fc" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className="portfolio-github-icon"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.5 1.3-3.3-.1-.3-.6-1.5.1-3.1 0 0 1.1-.3 3.4 1.3a11.3 11.3 0 0 1 6.2 0c2.3-1.6 3.4-1.3 3.4-1.3.7 1.6.2 2.8.1 3.1.8.8 1.3 2 1.3 3.3 0 4.5-2.7 5.5-5.2 5.8.4.3.7.9.7 1.8v2.6c0 .3.2.7.8.6A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
  </svg>
);
function PortfolioCard({ img, title, meta, desc, github, date, status }) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-thumb-wrapper">
        <img src={img} className="portfolio-thumb" alt={title} />

        {status && <span className="portfolio-status">{status}</span>}
      </div>

      <div className="portfolio-body">
        <div className="portfolio-title">{title}</div>
        <div className="portfolio-meta">
          {meta} · {date}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="portfolio-github-btn"
            >
              <GitHubIcon size={18} />
            </a>
          )}
        </div>

        

        <p className="portfolio-desc">{desc}</p>
      </div>
    </article>
  );
}



function ArticlesSection() {
  return (
    <section className="section active">
      <h2 className="section-title">Articles</h2>
      <div className="section-underline" />

      <div className="info-box">
        I share technical notes and experiments on Medium. You can find all my
        articles here:{" "}
        <a
          href="https://medium.com/@razane-marref07"
          target="_blank"
          rel="noreferrer"
        >
          medium.com/@razane-marref07
        </a>
      </div>

      <div className="blog-grid">
        <BlogCard
          img="/embeddings-thumb.png"
          title="Understanding Text Embeddings: Concepts"
          meta="Apr 19, 2024 · Machine Learning"
          desc="Discover how text embeddings turn language into numbers, enabling machines
                to work with meaning and semantic similarity."
          link="https://medium.com/@razane-marref07/understanding-text-embeddings-concepts-7503ec12b060"
        />
        <BlogCard
          img="/transformers-thumb.png"
          title="Understanding the Transformers"
          meta="May 16, 2024 · Deep Learning"
          desc="A clear explanation of how Transformer architectures work: self-attention,
                encoder–decoder blocks, and why they power modern LLMs."
          link="https://medium.com/@razane-marref07/the-transformers-d4bc8d0fbc27"
        />
        <BlogCard
          img="/tf-cert-thumb.png"
          title="How did I pass the TensorFlow Developer Certificate exam?"
          meta="Feb 28, 2022 · Certification Journey"
          desc="My preparation plan, learning resources and tips that helped me pass the
                TensorFlow Developer Certificate exam."
          link="https://medium.com/@razane-marref07/how-did-i-pass-the-tensorflow-developer-certificate-exam-4f1dc40f0262"
        />
      </div>
    </section>
  );
}

function BlogCard({ img, title, meta, desc, link }) {
  return (
    <article className="blog-card">
      <div className="blog-thumb">
        <img src={img} alt={title} />
      </div>
      <div className="blog-content">
        <div className="blog-title">{title}</div>
        <div className="blog-meta">{meta}</div>
        <p>{desc}</p>
        <a className="read-more" href={link} target="_blank" rel="noreferrer">
          Read on Medium →
        </a>
      </div>
    </article>
  );
}

function ContactSection() {
  return (
    <section className="section active">
      <h2 className="section-title">Contact</h2>
      <div className="section-underline" />

      <p className="paragraph">
        Interested in collaborating, discussing a research idea, or hiring me
        for a project? Send me a message using this form or reach out by email.
      </p>

      <form
        className="contact-form"
        action="https://formspree.io/f/xjkzqojz"
        method="POST"
      >
        <div>
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" required />
        </div>

        <div>
          <label htmlFor="email-contact">Email</label>
          <input id="email-contact" name="email" type="email" required />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" required />
        </div>
        
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required />
        </div>

        {/* spam protection */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <button type="submit" className="btn-main">
          Send Message
        </button>
      </form>
    </section>
  );
}
export default App;
