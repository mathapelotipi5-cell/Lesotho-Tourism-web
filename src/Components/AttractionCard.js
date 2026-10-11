function AttractionCard({
  name,
  location,
  category,
  description,
  activities,
  cost,
  image,
  onSelect,
}) {
  return (
    <article className="attraction-card">
      <button className={`card-visual card-visual-${category.toLowerCase()}`} type="button" onClick={onSelect} aria-label={`View ${name} details`}>
        <img src={image} alt={`${name} in Lesotho`} />
        <span className="card-category">{category}</span>
      </button>
      <div className="attraction-content">
        <p className="location">{location}</p>
        <h3>{name}</h3><p className="card-description">{description}</p>
        <div className="card-meta"><span>{activities[0]}</span><span>{cost}</span></div>
      </div>
    </article>
  );
}

export default AttractionCard;