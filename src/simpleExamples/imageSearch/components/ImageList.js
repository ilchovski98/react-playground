import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ imageList }) {
  return (
    <div className="image-list">
      {imageList.map((el, index) => {
        return (
          <ImageShow
            src={el.urls.full}
            alt={el.alt_description}
            key={el.id + "-" + index}
          />
        );
      })}
    </div>
  );
}

export default ImageList;
