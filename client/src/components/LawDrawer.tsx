"use client";
import * as React from "react";
import Link from "next/link";
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
import lawyers from "@/data/lawyers.json";

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  contact: string;
}

export default function LawDrawer() {
  return (
    <div className="">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Connect Lawyers</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-7xl">
            <DrawerHeader className="sticky top-0 flex-col justify-center text-center bg-white z-10">
              <DrawerTitle>Lawyers</DrawerTitle>
              <DrawerDescription>
                Connect with experienced lawyers.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 z-[6000] overflow-y-auto max-h-[60vh]">
              {lawyers.detail.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="p-4 border rounded-lg shadow-sm bg-white"
                >
                  <h2 className="text-lg font-bold">{lawyer.name}</h2>
                  <p className="text-sm text-gray-600">
                    Specialization: {lawyer.specialization}
                  </p>
                  <p className="text-sm text-gray-600">
                    Experience: {lawyer.experience} years
                  </p>
                  <p className="text-sm text-gray-600">
                    Email: {lawyer.contact}
                  </p>
                  <Link href="http://localhost:3001/">
                    <div className="text-blue-500 hover:underline">Chat</div>
                  </Link>
                </div>
              ))}
            </div>
            <DrawerFooter className="mt-4">
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}