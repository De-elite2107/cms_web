import React from "react";
import ABanner from "../components/ABanner";
import Locations from "./Locations";

export default function page() {
  return (
    <>
      <main className="">
        {<ABanner caption="CONTACT" />}
        <Locations />
        House Fellowship
        <div>
          <h1> Home Fellowship </h1>
        </div>
      </main>
    </>
  );
}
