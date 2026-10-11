
function Footer({ onNavigate }) {
  const handleNavigation = (event, target) => {
    event.preventDefault();
    onNavigate(target);
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-section"><a className="brand brand-footer" href="/#home" onClick={(event) => handleNavigation(event, "/#home")}><span className="brand-mark">L</span><span>LESOTHO <small>KINGDOM IN THE SKY</small></span></a><p>Go where the mountains lead.</p></div>
        <div className="footer-section">
          <h4>Find your way</h4><a href="/#about" onClick={(event) => handleNavigation(event, "/#about")}>The Kingdom</a><a href="/#destinations" onClick={(event) => handleNavigation(event, "/#destinations")}>Places to go</a><a href="/attractions" onClick={(event) => handleNavigation(event, "/attractions")}>Attractions</a><a href="/#enquiry" onClick={(event) => handleNavigation(event, "/#enquiry")}>Plan a visit</a>
        </div>
        <div className="footer-section">
          <h4>Say hello</h4><a href="tel:+26650556445">+266 5055 6445</a><a href="mailto:info@lesothotourism.ls">info@lesothotourism.ls</a>
        </div>

      </div>

      <div className="footer-bottom"><span>© {new Date().getFullYear()} Lesotho Tourism Explorer</span><a href="/#home" onClick={(event) => handleNavigation(event, "/#home")}>Back to top ↑</a></div>
    </footer>
  );
}

export default Footer;