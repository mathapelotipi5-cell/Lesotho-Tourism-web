import { useMemo, useState } from "react";
import AttractionCard from "../Components/AttractionCard";
import AttractionDetails from "../Components/AttractionDetails";
import EnquiryForm from "../Components/EnquiryForm";
import SearchFilter from "../Components/SearchFilter";
import attractionsData from "../Data/Attraction";

const featuredActivityNames = [
  "Pony Trekking",
  "Hiking",
  "Skiing",
  "Guided Heritage Tours",
];

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const visibleAttractions = useMemo(
    () => {
      const searchTerm = search.trim().toLowerCase();
      return attractionsData.filter((attraction) => {
        const matchesSearch =
          attraction.name.toLowerCase().includes(searchTerm) ||
          attraction.location.toLowerCase().includes(searchTerm) ||
          attraction.activities.some((activity) =>
            activity.toLowerCase().includes(searchTerm)
          );
        const matchesCategory =
          category === "All" || attraction.category === category;

        return matchesSearch && matchesCategory;
      });
    },
    [search, category]
  );

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">THE KINGDOM IN THE SKY</p>
          <h1>
            Find your own<br />
            <em>high ground.</em>
          </h1>
          <p className="hero-copy">
            Mountain mornings, winding passes and a warmth that stays with you. Welcome to Lesotho.
          </p>
          <a className="button button-light" href="#destinations">
            Explore the kingdom <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="hero-caption">
          <span>29° 36' S, 28° 14' E</span>
          <span>THABA BOSIU · LESOTHO</span>
        </div>
      </section>

      <section className="intro section-wrap" id="about">
        <p className="eyebrow">A COUNTRY ABOVE THE CLOUDS</p>
        <div className="intro-grid">
          <h2>
            Small in size.<br />
            <em>Endless in spirit.</em>
          </h2>
          <div className="intro-copy">
            <p>
              Completely surrounded by South Africa, Lesotho is the only country in the world that lies entirely above 1,000 metres. Its highlands are made for slow journeys: meet Basotho horsemen, follow the water to a hidden valley, and take the long way over the pass.
            </p>
            <a className="text-link" href="#destinations">
              Meet the places <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="fact-strip">
          <div>
            <strong>3,482 m</strong>
            <span>Highest peak · Thabana Ntlenyana</span>
          </div>
          <div>
            <strong>2.1 million</strong>
            <span>People who call it home</span>
          </div>
          <div>
            <strong>All year</strong>
            <span>A reason to take the high road</span>
          </div>
        </div>
      </section>

      <section className="popular-activities section-wrap" aria-labelledby="activities-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MAKE IT YOURS</p>
            <h2 id="activities-title">Find your kind of adventure.</h2>
          </div>
          <p>Choose an experience to see the destinations where you can enjoy it.</p>
        </div>
        <div className="activity-grid">
          {featuredActivityNames.map((name) => {
            const destinationCount = attractionsData.filter((attraction) =>
              attraction.activities.includes(name)
            ).length;

            return (
              <button
                className="activity-card"
                type="button"
                key={name}
                aria-label={`Explore ${name} destinations`}
                onClick={() => {
                  setSearch(name);
                  setCategory("All");
                  document.getElementById("destinations")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="activity-name">{name}</span>
                <span className="activity-count">
                  {destinationCount} {destinationCount === 1 ? "destination" : "destinations"}
                  <span aria-hidden="true"> ↗</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="destinations section-wrap" id="destinations">
        <div className="section-heading">
          <div>
            <p className="eyebrow">GO A LITTLE FURTHER</p>
            <h2>Places with a pulse.</h2>
          </div>
          <div className="destination-heading-actions">
            <p>
              From ancient rock shelters to snow-dusted summits, find the Lesotho that calls to you.
            </p>
          </div>
        </div>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <p className="results-count" aria-live="polite">
          {visibleAttractions.length}{" "}
          {visibleAttractions.length === 1 ? "place" : "places"} to explore
        </p>

        {visibleAttractions.length ? (
          <div className="attraction-grid">
            {visibleAttractions.map((attraction) => (
              <AttractionCard
                key={attraction.id}
                {...attraction}
                onSelect={() => setSelectedAttraction(attraction)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No places found</h3>
            <p>Try another name or choose a different category.</p>
          </div>
        )}
      </section>

      <section className="experience-band">
        <div className="experience-copy">
          <p className="eyebrow">TAKE THE SCENIC ROUTE</p>
          <h2>
            Some journeys<br />
            stay with you.
          </h2>
          <p>
            Ride a Basotho pony along a ridge. Share a meal in a village. Watch the clouds roll over the roof of Africa.
          </p>
          <a className="button button-dark" href="#enquiry">
            Plan your visit <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="enquiry-section section-wrap" id="enquiry">
        <div className="enquiry-intro">
          <p className="eyebrow">LET'S GET YOU THERE</p>
          <h2>
            Your highland<br />
            <em>story starts here.</em>
          </h2>
          <p>
            Tell us what you have in mind. Our local team can help you find your way.
          </p>
          <div className="contact-note">
            <span>VISITOR INFORMATION</span>
            <a href="mailto:info@lesothotourism.ls">info@lesothotourism.ls</a>
            <a href="tel:+26650556445">+266 5055 6445</a>
          </div>
        </div>
        <EnquiryForm attractions={attractionsData} />
      </section>

      <AttractionDetails
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
      />
    </>
  );
}

export default Home;