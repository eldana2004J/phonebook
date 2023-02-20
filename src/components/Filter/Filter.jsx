import React from "react";

export default function Filter({ value, onChange }) {
  return (
    <>
      <input
        className="filter"
        placeholder="Filter"
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
