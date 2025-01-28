"use client";

import { send } from "@/utils/events";

export const Share = () => {
  const closeModal = () => {
    send("closeModal");
  };

  return (
    <div className="bg-white p-6 rounded-lg" onClick={closeModal}>
      <h4>Share Component</h4>
    </div>
  );
};
