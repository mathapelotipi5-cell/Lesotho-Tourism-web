import React, { useState } from "react";
import AttractionCard from "../Components/AttractionCard";
import AttractionDetails from "../Components/AttractionDetails";
import SearchFilter from "../Components/SearchFilter";
import EnquiryForm from "../Components/EnquiryForm";
import attractionsData from "../Data/Attraction";

function Attractions() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const filteredAttractions = attractionsData.filter((attraction) => {
    const searchTerm = search.trim().toLowerCase();
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

  return (
    <div className="attractions-page">
      <section className="attractions-header">
        <h1>Explore Attractions</h1>
        <p>
          Browse destinations across Lesotho and choose an experience that interests you.
        </p>
      </section>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <section className="attractions-grid">
        {filteredAttractions.length > 0 ? (
          filteredAttractions.map((attraction, index) => (
            <AttractionCard
              key={attraction.id}
              {...attraction}
              index={index}
              onSelect={() => setSelectedAttraction(attraction)}
            />
          ))
        ) : (
          <p className="no-results">
            No attractions were found. Try a different search term or category filter.
          </p>
        )}
      </section>

      {/* Enquiry Form Section */}
      <section className="enquiry-section section-wrap" id="enquiry">
        <div className="enquiry-intro">
          <p className="eyebrow">LET'S GET YOU THERE</p>
          <h2>Your highland<br />
            <em>story starts here.</em>
          </h2>
          <p>Tell us what you have in mind. Our local team can help you find your way.
          </p>
        </div>
        <EnquiryForm attractions={attractionsData} />
      </section>

      <AttractionDetails
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
      />
    </div>
  );
}

export default Attractions;