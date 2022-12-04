import { useState } from "react";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = { bird, cat, dog, cow, gator, heart, horse };

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  return (
    <div onClick={() => setClicks(clicks + 1)}>
      <img src={svgMap[type]} alt="animal" />
      <img src={heart} alt="heart" style={{ width: 10 + 10 * clicks + "px" }} />
    </div>
  );
}

export default AnimalShow;
