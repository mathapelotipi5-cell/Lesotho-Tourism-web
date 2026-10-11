function Hero({ onNavigate }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("/attractions");
    } else {
      window.location.hash = "#destinations";
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Experience Lesotho your way</h2>
        <p>
          Find remarkable places, cultural experiences, and unforgettable
          adventures across the Mountain Kingdom.
        </p>
        <a href="/attractions" onClick={handleClick} className="button button-light">
          View Attractions
        </a>
      </div>
    </section>
  );
}

export default Hero;