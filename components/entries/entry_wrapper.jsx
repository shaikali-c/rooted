"use client";
import Entry from "./entry";
import { useState } from "react";

export default function Entries({ secrets }) {
  const [activeEnt, setActiveEnt] = useState(0);
  return (
    <div className="flex flex-col gap-8">
      {secrets.map((elem, index) => (
        <Entry
          data={elem}
          key={elem.uid}
          id={elem.uid}
          active={key === activeEnt}
          setActiveEnt={setActiveEnt}
        />
      ))}
    </div>
  );
}
