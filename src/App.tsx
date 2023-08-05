import React, { useState } from "react";
import mockItem from "./mock.json";
import ReviewList from "./ReviewList";

function App() {
  const [item, setItem] = useState(mockItem);
  return (
    <div>
      <ReviewList items={item} />
    </div>
  );
}

export default App;
