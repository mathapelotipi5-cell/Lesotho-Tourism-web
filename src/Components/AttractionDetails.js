import { useEffect } from "react";

function AttractionDetails({ attraction, onClose }) {
    useEffect(() => {
        if (!attraction) return undefined;
        const handleKeyDown = (event) => { if (event.key === "Escape") onClose(); };
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => { document.removeEventListener("keydown", handleKeyDown); document.body.style.overflow = ""; };
    }, [attraction, onClose]);

    if (!attraction) return null;
    return (
        <div className="details-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
            <section className="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-title">
                <button className="close-btn" type="button" onClick={onClose} aria-label="Close details">×</button>
                <img className="details-image" src={attraction.image} alt={`${attraction.name} in Lesotho`} />
                <div className="details-content"><p className="eyebrow">{attraction.category} · {attraction.location}</p><h2 id="details-title">{attraction.name}</h2><p>{attraction.description}</p><h3>Make a day of it</h3><ul className="activity-list">{attraction.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul><p className="details-cost"><strong>Estimated visit</strong><span>{attraction.cost}</span></p><a className="button button-dark" href="#enquiry" onClick={onClose}>Ask about this place <span aria-hidden="true">↗</span></a></div>
            </section>
        </div>
    );
}

export default AttractionDetails;