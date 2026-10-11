function SearchFilter({ search, setSearch, category, setCategory }) {
    return (
        <div className="search-filter" role="search">
            <label className="search-field"><span aria-hidden="true">⌕</span><span className="sr-only">Search destinations</span><input type="search" placeholder="Search a place..." value={search} onChange={(event) => setSearch(event.target.value)} /></label>
            <label className="category-field"><span className="sr-only">Filter by category</span><select value={category} onChange={(event) => setCategory(event.target.value)}><option value="All">All experiences</option><option value="Nature">Nature</option><option value="Culture">Culture</option><option value="Adventure">Adventure</option><option value="Historical">History</option></select></label>
        </div>
    );
}

export default SearchFilter;