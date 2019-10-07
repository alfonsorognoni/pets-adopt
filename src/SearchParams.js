import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  return (
    <div className="search-params">
      <form>
        <label>
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
