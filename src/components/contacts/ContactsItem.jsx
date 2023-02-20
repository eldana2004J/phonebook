import React from "react";
export default function ContactsItem({ number, name, id, onClickDelete }) {
  return (
    <div>
      <li>
        <p className="text">
          {name}:{number}
          <button
            className="delete"
            onClick={() => {
              onClickDelete(id);
              console.log(id);
            }}
          >
            delete
          </button>
        </p>
      </li>
    </div>
  );
}
