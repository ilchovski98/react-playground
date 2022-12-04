import { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

import { searchImages } from "./api";

function App() {
  const [imageList, setImageList] = useState([]);

  const handleSubmit = async (term) => {
    const imageList = await searchImages(term);
    setImageList(imageList);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList imageList={imageList} />
    </div>
  );
}

export default App;
