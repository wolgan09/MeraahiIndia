import React from "react";
import { useParams } from "react-router";

export default function Places() {
  const { id } = useParams();
  return (
    <div>
      <p className="text-3xl">
        <span className="font-bold text-red-500">Explore</span>{" "}
        <span> {id}</span>
        <div className="p-10">
          <h3>
            <span className="font-bold text-xl"> About {id}</span>
          </h3>
          <p>
            Lonavala is one of the twin hill stations located near to each
            other, the other being Khandala. These hill stations are very
            popular getaway spots for people from Mumbai and Pune, which are
            very well-linked with Lonavala by road and rail. Monsoons are the
            best time to visit Lonavala/Khandala.
          </p>
        </div>
      </p>
    </div>
  );
}
