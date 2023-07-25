import React from "react";

interface exerciseIT {
  name: string;
  linkImage: string;
}
interface mainIT {
  exerciseItem: exerciseIT;
  typeClass: string;
}

export const ItemImage = (props: mainIT) => {
  const { exerciseItem, typeClass } = props;
  return (
    <div
      className={`${typeClass}__image`}
      onClick={() => window.open(exerciseItem.linkImage)}
    >
      <img src={exerciseItem.linkImage} alt={exerciseItem.name} />
    </div>
  );
};
