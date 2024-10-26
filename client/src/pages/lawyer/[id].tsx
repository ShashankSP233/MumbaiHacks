// /pages/lawyer/[id].tsx
import { useRouter } from "next/router";
import React from "react";
import lawyers from "@/data/lawyers.json";

const LawyerProfile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const lawyer = lawyers.detail.find((lawyer) => lawyer.id === parseInt(id as string));

  if (!lawyer) return <div>Lawyer not found</div>;

  return (
    <div className="lawyer-profile">
      <h1>{lawyer.name}</h1>
      <p><strong>Domain:</strong> {lawyer.specialization}</p>
      <p><strong>Experience:</strong> {lawyer.experience}</p>
    </div>
  );
};

export default LawyerProfile;
