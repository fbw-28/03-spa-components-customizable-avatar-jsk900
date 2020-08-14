import React from 'react';

//Deconstruct Props and give them default values
const Card = ({
  size = 'M',
  width = '60',
  height = '60',
  radius = '0',
  image = 'forest.jpg',
  type = 'square',
}) => {
  //Determine card size dependent on image height
  let boxHeight;
  switch (size) {
    case 'S':
      boxHeight = '120';
      break;
    case 'M':
      boxHeight = '150';
      break;
    case 'L':
      boxHeight = '210';
      break;
    case 'XL':
      boxHeight = '290';
      break;
    default:
  }

  return (
    <section style={{ height: `${boxHeight}px` }}>
      <img
        style={{ borderRadius: `${radius}` }}
        src={require(`../assets/${image}`)}
        alt={image}
        width={`${width}px`}
        height={`${height}px`}
      />
      <p>
        Size {size} with {width} X {height}
      </p>
      <p>
        Type <span>{type}</span>
      </p>
    </section>
  );
};

export default Card;
