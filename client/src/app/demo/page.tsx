// /pages/index.tsx
import React from "react";
import LawyerCard from "@/components/Lawyers/LawyerCard";
import lawyers from "@/data/data.js";

// Define an interface for the lawyer object
interface Lawyer {
  id: number;
  name: string;
  domain: string;
  experience: string;
  imageUrl: string;
}

const LawyerList: React.FC = () => {
  return (
    <div className="lawyer-list">
      {lawyers.map((lawyer: Lawyer) => (
        <LawyerCard
          key={lawyer.id}
          id={lawyer.id}
          name={lawyer.name}
          domain={lawyer.domain}
          experience={lawyer.experience}
          imageUrl={lawyer.imageUrl}
        />
      ))}
    </div>
  );
};

export default LawyerList;
