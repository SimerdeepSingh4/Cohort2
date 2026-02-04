import React, { useMemo } from "react";

const Card = ({ elem, idx, deleteHandler }) => {
  const bgColor = useMemo(() => {
    const r = Math.floor(Math.random() * 100) + 155;
    const g = Math.floor(Math.random() * 100) + 155;
    const b = Math.floor(Math.random() * 100) + 155;
    return `rgb(${r}, ${g}, ${b})`;
  }, []);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="h-[320px] w-[300px] rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* User Info */}
      <div className="text-center">
        <h1 className="text-xl font-bold capitalize">{elem.name}</h1>
        <p className="text-sm text-gray-700">@{elem.username}</p>
      </div>

      {/* Contact */}
      <div className="text-sm text-gray-800 space-y-1">
        <p className="text-blue-600 font-medium truncate">{elem.email}</p>
        <p>{elem.phone}</p>
        <p className="text-gray-600">{elem.website}</p>
      </div>

      {/* Address */}
      <div className="text-xs text-gray-700 leading-snug">
        <p>
          {elem.address.suite}, {elem.address.street}
        </p>
        <p>
          {elem.address.city} – {elem.address.zipcode}
        </p>
      </div>

      {/* Company */}
      <div className="text-xs text-gray-600 italic">
        <p className="font-semibold not-italic">{elem.company.name}</p>
        <p className="truncate">{elem.company.catchPhrase}</p>
      </div>

      {/* Action */}
      <button
        onClick={() => deleteHandler(idx)}
        className="mt-3 bg-red-500 text-white text-xs font-semibold py-2 rounded-lg hover:bg-red-600 active:scale-95 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
