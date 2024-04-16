"use client"

import { useState } from "react";

export default function NavBar() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    </>
  );
}