import { useEffect, useRef, useState } from "react";
import headerLogoImg from "../logo4.png";
import footerLogoImg from "../logo.png";
import heroLeft from "../imagen del header.png";
import heroRight from "../imagen 2.png";
import faqBanner from "../Climafresco _ Installazione Condizionatore_files/Screenshot-2024-03-04-154334.png";

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
          Noi e partner selezionati utilizziamo cookie o tecnologie simili per finalita tecniche e,
          con il tuo consenso, per <strong>funzionalita, esperienza e misurazione</strong> e
          <strong> "marketing (annunci personalizzati)"</strong> come indicato nella cookie policy.
        </p>
        <p>
          Puoi accettare, rifiutare o revocare il consenso in qualsiasi momento dal pannello preferenze.
          Il rifiuto potrebbe limitare alcune funzionalita del sito.
        </p>
        <p>Usa il pulsante "Accetta" per dare il consenso oppure chiudi questo avviso per continuare.</p>

        {customizeOpen ? (
          <div className="cookie-customize">
            <label>
              <input type="checkbox" defaultChecked /> Cookie funzionali
            </label>
            <label>
              <input type="checkbox" defaultChecked /> Cookie esperienza
            </label>
            <label>
              <input type="checkbox" /> Cookie marketing
            </label>
          </div>
        ) : null}

        <div className="cookie-actions">
          <button className="btn btn-primary" onClick={accept}>
            Accetta
          </button>

          {customizeOpen ? (
            <button className="btn btn-dark" onClick={saveCustom}>
              Salva preferenze
            </button>
          ) : (
            <button className="btn btn-dark" onClick={() => setCustomizeOpen(true)}>
              Scopri e personalizza
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <>
      <header className="header">
        <div className="container nav nav-primary nav-main-row">
          <a href="#home" className="brand">
            <img src={headerLogoImg} alt="Garcia Clima Servizi" className="brand-logo" />
          </a>

          <a className="search-link" href="#contatti" aria-label="Vai ai contatti">
            <span className="search-icon" aria-hidden="true" />
          </a>

          <nav className="header-inline-nav">
            <ul className="menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#chi-siamo">Chi Siamo</a></li>
              <li className={`dropdown ${menuOpen ? "open" : ""}`} ref={dropdownRef}>
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  aria-expanded={menuOpen}
                  aria-controls="clima-submenu"
                >
                  Climatizzatori
                </button>
                <ul className="submenu" id="clima-submenu">
                  <li><a href="#installazione-professionale" onClick={() => setMenuOpen(false)}>Installazione Professionale del Climatizzatore</a></li>
                  <li><a href="#climatizzatore-canalizzato" onClick={() => setMenuOpen(false)}>Installazione Climatizzatore Canalizzato</a></li>
                  <li><a href="#climatizzatore-idronico" onClick={() => setMenuOpen(false)}>Installazione Climatizzatore Idronico</a></li>
                  <li><a href="#climatizzatore-ibrido" onClick={() => setMenuOpen(false)}>Installazione Climatizzatore Ibrido o Pompa di Calore</a></li>
                  <li><a href="#impianto-full-electric" onClick={() => setMenuOpen(false)}>Installazione Impianto Full Electric</a></li>
                  <li><a href="#raffrescamento-battiscopa" onClick={() => setMenuOpen(false)}>Raffrescamento a Battiscopa</a></li>
                </ul>
              </li>
              <li><a href="#assistenza">Assistenza</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#lavora-con-noi">Lavora con Noi</a></li>
              <li><a href="#contatti">Contatti</a></li>
            </ul>
          </nav>

          <a href="#contatti" className="btn btn-orange header-cta">Richiedi un preventivo gratuito</a>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Soluzioni professionali per casa e impresa</p>
            <h1>Installazione e assistenza climatizzatori con risultati garantiti</h1>
            <p>
              Preventivo rapido, sopralluogo tecnico, installazione certificata e supporto post-vendita.
              Struttura completa come la pagina originale, con design piu pulito e chiaro.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contatti">Richiedi Preventivo</a>
              <a className="btn btn-outline" href="#assistenza">Contattaci</a>
            </div>
          </div>

          <div className="hero-media" aria-label="Immagine principale header">
            <img src={heroLeft} alt="Presentazione climatizzatori" className="hero-img" />
          </div>
        </section>

        <section className="container section section-image-split" aria-label="Seconda immagine promozionale">
          <img src={heroRight} alt="Promozione servizi Garcia Clima" className="hero-img hero-img-secondary" />
        </section>

        <section className="container section quick-actions">
          <a href="#climatizzatori" className="quick-link">Le nostre soluzioni</a>
          <a href="#auto-prenotazione" className="quick-link">Prenota sopralluogo</a>
          <a href="#auto-preventivo" className="quick-link">Preventivo online</a>
          <a href="#video-sopralluogo" className="quick-link">Videochiamata</a>
        </section>

        <section id="chi-siamo" className="container section">
          <h2>Chi Siamo</h2>
          <p>
            Team specializzato in installazione, manutenzione e assistenza. Soluzioni su misura per casa,
            ufficio e negozi con tempi rapidi, materiali certificati e supporto continuo.
          </p>
        </section>

        <section id="climatizzatori" className="container section grid-3">
          <article className="card">
            <h3>Installazione Professionale del Climatizzatore</h3>
            <p>Soluzione completa con sopralluogo tecnico e installazione certificata.</p>
          </article>
          <article className="card">
            <h3>Installazione Climatizzatore Canalizzato</h3>
            <p>Comfort uniforme in tutti gli ambienti con impianto integrato.</p>
          </article>
          <article className="card">
            <h3>Installazione Climatizzatore Idronico</h3>
            <p>Efficienza energetica elevata e controllo termico stabile.</p>
          </article>
          <article className="card">
            <h3>Installazione Climatizzatore Ibrido o Pompa di Calore</h3>
            <p>Sistema combinato per riscaldamento e raffrescamento intelligente.</p>
          </article>
          <article className="card">
            <h3>Installazione Impianto Full Electric</h3>
            <p>Impianto moderno per ridurre consumi e migliorare le prestazioni.</p>
          </article>
          <article className="card">
            <h3>Raffrescamento a Battiscopa</h3>
            <p>Alternativa discreta e performante per il comfort quotidiano.</p>
          </article>
        </section>

        <section className="container section detail-sections">
          <article id="installazione-professionale" className="detail-card">
            <h3>Installazione Professionale del Climatizzatore</h3>
            <p>Analisi tecnica, scelta macchina, installazione e collaudo finale con team certificato.</p>
          </article>

          <article id="climatizzatore-canalizzato" className="detail-card">
            <h3>Installazione Climatizzatore Canalizzato</h3>
            <p>Soluzioni per distribuzione uniforme dell'aria con impatto estetico minimo.</p>
          </article>

          <article id="climatizzatore-idronico" className="detail-card">
            <h3>Installazione Climatizzatore Idronico</h3>
            <p>Comfort termico evoluto e consumi ottimizzati grazie alla tecnologia idronica.</p>
          </article>

          <article id="climatizzatore-ibrido" className="detail-card">
            <h3>Installazione Climatizzatore Ibrido o Pompa di Calore</h3>
            <p>Gestione intelligente caldo/freddo per ridurre costi energetici durante tutto l'anno.</p>
          </article>

          <article id="impianto-full-electric" className="detail-card">
            <h3>Installazione Impianto Full Electric</h3>
            <p>Progettazione completa orientata all'elettrificazione domestica con alta efficienza.</p>
          </article>

          <article id="raffrescamento-battiscopa" className="detail-card">
            <h3>Raffrescamento a Battiscopa</h3>
            <p>Sistema discreto e performante per raffrescare gli ambienti con tecnologia a basso impatto.</p>
          </article>
        </section>

        <section className="container section action-stack">
          <a className="pill-cta pill-orange" href="#contatti">VOGLIO AFFIDARMI A CLIMAFRESCO!</a>
          <a className="pill-cta pill-green" href="#auto-prenotazione">ACCEDI AL SERVIZIO DI AUTO-PRENOTAZIONE SOPRALLUOGO</a>
          <a className="pill-cta pill-coral" href="#auto-preventivo">UTILIZZA IL SERVIZIO DI AUTO PREVENTIVAZIONE</a>
          <a className="pill-cta pill-blue" href="#video-sopralluogo">ESEGUI IL SOPRALLUOGO IN VIDEOCHIAMATA!</a>
        </section>

        <section id="auto-prenotazione" className="container section info-block">
          <h2>PRENOTA ORA E IN AUTONOMIA IL TUO SOPRALLUOGO TECNICO GRATUITO</h2>
          <p>
            Abbiamo attivato per te un comodo sistema di Auto-Prenotazione tramite Google,
            pensato per semplificarti la vita. Potrai visualizzare in tempo reale il calendario
            delle nostre disponibilita e scegliere in autonomia data e orario dell'appuntamento.
          </p>
          <h3>Come funziona?</h3>
          <ul>
            <li>Seleziona il giorno e l'orario tra quelli disponibili.</li>
            <li>Inserisci i tuoi dati per permetterci di contattarti.</li>
            <li>Invia la richiesta di appuntamento per il sopralluogo.</li>
          </ul>
          <p>
            Con il servizio di Auto-Prenotazione puoi prenotare anche fuori orario d'ufficio,
            inclusi weekend, 24 ore su 24.
          </p>
          <div className="warning-box">
            ATTENZIONE: il servizio e riservato alla prenotazione del sopralluogo tecnico gratuito.
            I nostri incaricati ti contatteranno solo per confermare l'appuntamento.
            Non sono autorizzati a dare prezzi al telefono.
          </div>
        </section>

        <section id="auto-preventivo" className="container section info-block">
          <h2>GESTISCI IL TUO PREVENTIVO IN AUTONOMIA</h2>
          <p>
            I primi in Italia a permetterti di scoprire i costi in autonomia.
            Rispondendo a semplici domande, il nostro configuratore fornisce una stima rapida,
            che puo essere confermata in videochiamata con un nostro incaricato.
          </p>
          <h3>Numerosi vantaggi</h3>
          <ul>
            <li>Prezzo orientativo immediato senza attese telefoniche.</li>
            <li>Processo guidato online, semplice e veloce.</li>
            <li>Possibilita di verifica tecnica in videochiamata.</li>
          </ul>
          <p>
            I nostri preventivi sono trasparenti e completi: installazione certificata,
            accessori necessari, garanzie estese e supporto post-vendita.
          </p>
        </section>

        <section id="video-sopralluogo" className="container section info-block">
          <h2>PRENOTA IL TUO VIDEO SOPRALLUOGO</h2>
          <p>
            Prenoti una videochiamata, mostri direttamente al tecnico la situazione e ricevi
            una valutazione precisa che si trasforma in un preventivo personalizzato,
            senza visite in casa e senza perdite di tempo.
          </p>
          <h3>Come funziona?</h3>
          <ul>
            <li>Prenoti l'appuntamento nel calendario dedicato.</li>
            <li>Mostri ambiente e impianto durante la videochiamata.</li>
            <li>Ricevi preventivo gratuito e senza impegno.</li>
          </ul>
        </section>

        <section className="container section faq-rich">
          <h2>F.A.Q. Le Nostre Domande Piu Richieste</h2>
          <details>
            <summary>Bello, ma quanto costa?</summary>
            <p>
              Il prezzo dipende dalla situazione specifica. Puoi usare auto-preventivazione per una stima rapida
              oppure richiedere un confronto diretto con un esperto.
            </p>
          </details>
          <details>
            <summary>Cosa sono i servizi di auto-preventivazione e auto-sopralluogo?</summary>
            <p>
              Sono servizi pensati per semplificare e velocizzare il processo: stima online in pochi minuti
              e verifica in videochiamata con tecnico.
            </p>
          </details>
          <details>
            <summary>Che climatizzatori montate?</summary>
            <p>
              Siamo installatori multimarca: proponiamo la soluzione piu adatta in base a casa,
              obiettivi e budget.
            </p>
          </details>
          <details>
            <summary>Come funziona la garanzia "No Brutte Sorprese"?</summary>
            <p>
              Una volta definito il preventivo, il prezzo viene bloccato.
              Eventuali costi imprevisti non visibili prima restano a nostro carico.
            </p>
          </details>
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

        <section className="container section">
          <h2>Perche scegliere noi</h2>
          <div className="grid-3">
            <article className="card">
              <h3>+2000 clienti/anno</h3>
              <p>Esperienza operativa consolidata in installazioni residenziali e commerciali.</p>
            </article>
            <article className="card">
              <h3>Garanzia no sorprese</h3>
              <p>Preventivo chiaro e conferma tecnica prima dell'intervento.</p>
            </article>
            <article className="card">
              <h3>Tecnici certificati</h3>
              <p>Installatori abilitati con procedure di collaudo e verifica finale.</p>
            </article>
          </div>
        </section>

        <section id="contatti" className="container section cta-box">
          <h2>Comfort tutto l'anno</h2>
          <p>Richiedi una consulenza gratuita e ricevi un preventivo su misura.</p>
          <a className="btn btn-primary" href="#contatti">Richiedi Preventivo Ora</a>
        </section>

        <section className="container section contact-split">
          <div className="contact-left">
            <h2>Vuoi Cambiare Il Vecchio Climatizzatore Di Casa Tua?</h2>
            <h3>Contattaci</h3>
            <p>
              Compila il modulo e verrai ricontattato velocemente e senza impegno,
              oppure chiamaci al <strong>392 827 9407</strong>.
            </p>

            <div className="phase-list">
              <article>
                <h4>PRIMA FASE: CONSULENZA TELEFONICA</h4>
                <p>Siamo pronti a dissipare ogni tuo dubbio.</p>
              </article>
              <article>
                <h4>SECONDA FASE: SOPRALLUOGO</h4>
                <p>Per un progetto su misura delle tue esigenze.</p>
              </article>
              <article>
                <h4>TERZA FASE: INSTALLAZIONE GENERATORE</h4>
                <p>Facile, veloce, pulita e senza stress.</p>
              </article>
              <article>
                <h4>ULTIMA FASE: COMPLETAMENTO LAVORI</h4>
                <p>Goditi un impianto sicuro e collaudato.</p>
              </article>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form">
              <input type="text" placeholder="Nome*" required />
              <input type="text" placeholder="Cognome*" required />
              <input type="email" placeholder="Email*" required />
              <input type="tel" placeholder="Telefono*" required />
              <textarea placeholder="Raccontaci di cosa hai bisogno" rows="4" />
              <label><input type="checkbox" defaultChecked /> Dichiaro di aver letto la Privacy Policy.</label>
              <label><input type="checkbox" defaultChecked /> Autorizzo al trattamento dei dati personali.</label>
              <button type="submit" className="btn btn-orange">INVIA</button>
            </form>
          </div>
        </section>

        <section className="container section action-stack">
          <a className="pill-cta pill-orange" href="#contatti">CONTATTACI</a>
          <a className="pill-cta pill-green" href="#auto-prenotazione">ACCEDI AL SERVIZIO DI AUTO-PRENOTAZIONE SOPRALLUOGO</a>
          <a className="pill-cta pill-coral" href="#auto-preventivo">UTILIZZA IL SERVIZIO DI AUTO PREVENTIVAZIONE</a>
          <a className="pill-cta pill-blue" href="#video-sopralluogo">ESEGUI IL SOPRALLUOGO IN VIDEOCHIAMATA!</a>
        </section>

        <section className="container section faq-banner-wrap">
          <img src={faqBanner} alt="FAQ Hai delle domande" className="faq-banner" />
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

      <a
        className="whatsapp-float"
        href="https://wa.me/393928279407?text=Ciao%2C%20vorrei%20un%20preventivo%20gratuito."
        target="_blank"
        rel="noreferrer"
        aria-label="Contattaci su WhatsApp"
      >
        Scrivici su WhatsApp
      </a>

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-logo-box">
            <img src={footerLogoImg} alt="Garcia Clima Servizi" className="footer-logo" />
          </div>

          <div>
            <h4>Dove siamo</h4>
            <p>Via Guglielmo Marconi, 33<br />20812 - Limbiate (MB)</p>
            <h4>E-mail</h4>
            <p>info@installazionecondizionatore.com</p>
            <h4>Telefono</h4>
            <p>392 827 9407</p>
          </div>

          <div>
            <h4>Seguici sui social</h4>
            <div className="social-grid">
              <a href="https://www.facebook.com/ClimaFrescoMilano" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/climafresco_/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
              <a href="https://www.youtube.com/@idroclimaservicemilano" target="_blank" rel="noreferrer" aria-label="YouTube">yt</a>
              <a href="https://www.tiktok.com/@idroclimaservice" target="_blank" rel="noreferrer" aria-label="TikTok">tt</a>
              <a href="https://it.linkedin.com/company/idroclima-service-milano" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2026 | By Idroclima Service Srl | P.Iva: 10242540960</p>
        </div>
      </footer>

      <CookieBanner />
    </>
  );
}

export default App;
