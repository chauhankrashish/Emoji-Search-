import React, { useEffect, useState } from "react";
import emojiData from "./emojiData.json";
import "./App.css";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>🦁Emoji Search😺</h1>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <hr/>
      </div>

      <div className="emoji-div">
        {data.map((emoji) => (
          <h2 key={emoji.title}>
            {emoji.symbol}<br /> {emoji.title}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default App;
