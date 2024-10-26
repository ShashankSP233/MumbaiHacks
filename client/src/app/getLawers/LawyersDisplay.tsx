"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  contact: string;
}

const data: Lawyer[] = [
  { id: 1, name: "John Doe", specialization: "Criminal Law", experience: 10, contact: "john@example.com" },
  { id: 2, name: "Jane Smith", specialization: "Family Law", experience: 8, contact: "jane@example.com" },
  { id: 3, name: "Robert Brown", specialization: "Corporate Law", experience: 12, contact: "robert@example.com" },
  { id: 4, name: "Emily Davis", specialization: "Environmental Law", experience: 5, contact: "emily@example.com" },
  { id: 5, name: "Michael Wilson", specialization: "Intellectual Property Law", experience: 7, contact: "michael@example.com" },
  { id: 6, name: "Sarah Johnson", specialization: "Labor Law", experience: 9, contact: "sarah@example.com" },
  { id: 7, name: "David Lee", specialization: "Tax Law", experience: 11, contact: "david@example.com" },
  { id: 8, name: "Laura Martinez", specialization: "Immigration Law", experience: 6, contact: "laura@example.com" },
  // Add more sample data as needed
];

export default function ChatInterface() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 z-[6000] overflow-y-auto max-h-[60vh]">
              {data.map((lawyer) => (
                <div key={lawyer.id} className="p-4 border rounded-lg shadow-sm bg-white">
                  <h2 className="text-lg font-bold">{lawyer.name}</h2>
                  <p className="text-sm text-gray-600">Specialization: {lawyer.specialization}</p>
                  <p className="text-sm text-gray-600">Experience: {lawyer.experience} years</p>
                  <p className="text-sm text-gray-600">Contact: {lawyer.contact}</p>
                </div>
              ))}
            </div>
    </div>
  );
}
