import React from 'react';
import UserCard from './UserCard';

const Slider = ({ cards, currentIndex }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${(100 / 3) * currentIndex}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[1000px] px-2 flex flex-row"
            style={{
              flex: '0 0 300px',
            }}
          >
            <UserCard
              logo={card.logo}
              title={card.title}
              description={card.description}
              user={card.user}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;