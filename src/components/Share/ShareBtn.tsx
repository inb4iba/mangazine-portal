"use client";

import { send } from "@/utils/events";

export const ShareBtn = () => {
  const sendEvent = () => {
    send("openShareModal");
  };

  return (
    <>
      <button
        className="bg-violet-500 text-white w-full text-center py-2 rounded-md"
        onClick={sendEvent}>
        Compartilhar post
      </button>
    </>
  );
};
