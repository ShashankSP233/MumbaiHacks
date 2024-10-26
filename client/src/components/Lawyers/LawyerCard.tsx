// /components/LawyerCard.tsx
import React from "react";
import Link from "next/link";

interface LawyerCardProps {
  id: number;
  name: string;
  domain: string;
  experience: string;
  imageUrl: string;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ id, name, domain, experience, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{domain}</p>
      <p>{experience}</p>
      <Link href={`/lawyer/${id}`}>
        View Profile
      </Link>
    </div>
  );
};

export default LawyerCard;
