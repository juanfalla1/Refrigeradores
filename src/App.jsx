import { useEffect, useState } from "react";

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookie-choice");
    if (!choice) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-choice", "accepted");
    setVisible(false);
  };

  const close = () => {
    localStorage.setItem("cookie-choice", "dismissed");
    setVisible(false);
  };

  const saveCustom = () => {
    localStorage.setItem("cookie-choice", "custom");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-overlay" role="dialog" aria-modal="true" aria-label="Cookie preferences">
      <div className="cookie-modal">
        <button className="cookie-close" onClick={close} aria-label="Close cookie notice">
          x
        </button>

        <p>
          We and selected third parties use cookies or similar technologies for technical purposes and,
          with your consent, for <strong>functionality, experience, measurement</strong> and
          <strong> "marketing (personalized ads)"</strong> as specified in the cookie policy.
        </p>
        <p>
          You can freely give, deny, or withdraw your consent at any time by accessing the preferences
          panel. Denying consent may make related features unavailable.
        </p>
        <p>Use the "Accept" button to consent. Close this notice to continue without accepting.</p>

        {customizeOpen ? (
          <div className="cookie-customize">
            <label>
              <input type="checkbox" defaultChecked /> Functional cookies
            </label>
            <label>
              <input type="checkbox" defaultChecked /> Experience cookies
            </label>
            <label>
              <input type="checkbox" /> Marketing cookies
            </label>
          </div>
        ) : null}

        <div className="cookie-actions">
          <button className="btn btn-primary" onClick={accept}>
            Accept
          </button>

          {customizeOpen ? (
            <button className="btn btn-dark" onClick={saveCustom}>
              Save preferences
            </button>
          ) : (
            <button className="btn btn-dark" onClick={() => setCustomizeOpen(true)}>
              Learn more and customize
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <header className="header">
        <div className="container nav nav-primary">
          <a href="#home" className="brand">
            <span className="brand-mark">GC</span>
            <span>
              <strong>Garcia Clima Service</strong>
              <small>Installazione Condizionatore</small>
            </span>
          </a>

          <nav>
            <ul className="menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#chi-siamo">Chi Siamo</a></li>
              <li className="dropdown">
                <a href="#climatizzatori">Climatizzatori</a>
                <ul className="submenu">
                  <li><a href="#installazione-professionale">Installazione Professionale del Climatizzatore</a></li>
                  <li><a href="#climatizzatore-canalizzato">Installazione Climatizzatore Canalizzato</a></li>
                  <li><a href="#climatizzatore-idronico">Installazione Climatizzatore Idronico</a></li>
                  <li><a href="#climatizzatore-ibrido">Installazione Climatizzatore Ibrido o Pompa di Calore</a></li>
                  <li><a href="#impianto-full-electric">Installazione Impianto Full Electric</a></li>
                  <li><a href="#raffrescamento-battiscopa">Raffrescamento a Battiscopa</a></li>
                </ul>
              </li>
              <li><a href="#assistenza">Assistenza</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>
        </div>

        <div className="container nav nav-secondary">
          <a className="search-link" href="#contatti" aria-label="Vai ai contatti">
            <span className="search-icon" aria-hidden="true" />
          </a>
          <nav>
            <ul className="menu menu-secondary">
              <li><a href="#lavora-con-noi">Lavora con Noi</a></li>
              <li><a href="#contatti">Contatti</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Landing pronta per React + Vercel</p>
            <h1>Installazione professionale di climatizzatori in stile moderno e chiaro</h1>
            <p>
              Pagina con struttura completa, menu con dropdown, blocchi servizi, call to action e popup
              cookie come riferimento che mi hai mostrato.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contatti">Richiedi Preventivo</a>
              <a className="btn btn-outline" href="#assistenza">Contattaci</a>
            </div>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="hero-logo">GC</div>
            <p>Design focalizzato al brand</p>
          </div>
        </section>

        <section id="chi-siamo" className="container section">
          <h2>Chi Siamo</h2>
          <p>
            Team specializzato in installazione, manutenzione e assistenza. Soluzioni su misura per casa,
            ufficio e negozi con tempi rapidi e supporto continuo.
          </p>
        </section>

        <section id="climatizzatori" className="container section grid-3">
          <article id="installazione-professionale" className="card">
            <h3>Installazione Professionale del Climatizzatore</h3>
            <p>Soluzione completa con sopralluogo tecnico e installazione certificata.</p>
          </article>
          <article id="climatizzatore-canalizzato" className="card">
            <h3>Installazione Climatizzatore Canalizzato</h3>
            <p>Comfort uniforme in tutti gli ambienti con impianto integrato.</p>
          </article>
          <article id="climatizzatore-idronico" className="card">
            <h3>Installazione Climatizzatore Idronico</h3>
            <p>Efficienza energetica elevata e controllo termico stabile.</p>
          </article>
          <article id="climatizzatore-ibrido" className="card">
            <h3>Installazione Climatizzatore Ibrido o Pompa di Calore</h3>
            <p>Sistema combinato per riscaldamento e raffrescamento intelligente.</p>
          </article>
          <article id="impianto-full-electric" className="card">
            <h3>Installazione Impianto Full Electric</h3>
            <p>Impianto moderno per ridurre consumi e migliorare le prestazioni.</p>
          </article>
          <article id="raffrescamento-battiscopa" className="card">
            <h3>Raffrescamento a Battiscopa</h3>
            <p>Alternativa discreta e performante per il comfort quotidiano.</p>
          </article>
        </section>

        <section id="assistenza" className="container section grid-3">
          <article className="card">
            <h3>Consulenza</h3>
            <p>Sopralluogo tecnico e proposta trasparente.</p>
          </article>
          <article className="card">
            <h3>Installazione</h3>
            <p>Montaggio pulito con collaudo finale.</p>
          </article>
          <article className="card">
            <h3>Assistenza</h3>
            <p>Manutenzione programmata e interventi rapidi.</p>
          </article>
        </section>

        <section id="contatti" className="container section cta-box">
          <h2>Comfort tutto l'anno</h2>
          <p>Richiedi una consulenza gratuita e ricevi un preventivo su misura.</p>
          <a className="btn btn-primary" href="#">Richiedi Preventivo Ora</a>
        </section>

        <section id="blog" className="container section">
          <h2>Blog</h2>
          <p>Guide, consigli pratici e aggiornamenti su climatizzazione ed efficienza energetica.</p>
        </section>

        <section id="lavora-con-noi" className="container section">
          <h2>Lavora con Noi</h2>
          <p>Sei un tecnico frigorista o installatore? Inviaci la tua candidatura.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© Garcia Clima Service - Tutti i diritti riservati</p>
        </div>
      </footer>

      <CookieBanner />
    </>
  );
}

export default App;
