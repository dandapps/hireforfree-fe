// CardComponent.tsx
import React from 'react';
import './user-type-card.styles.scss';

interface CardProps {
  title: string;
  onClick: () => void;
}

const CardComponent: React.FC<CardProps> = ({ title, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default CardComponent;
