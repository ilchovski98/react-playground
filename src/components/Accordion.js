import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index) => {
    // Version for when state is changing very fast (with js) and state variables become stale
    // This tells react to use the most up to date state variable. React batching problem
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === index) {
        return -1;
      } else {
        return index;
      }
    })

    // Normal version
    // if (expandedIndex === index) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(index);
    // }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)} className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })
  return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion;
