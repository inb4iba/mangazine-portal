"use client";

import { subscribe, unsubscribe } from "@/utils/events";
import { useEffect, useState } from "react";
import { Share } from "../Share/ShareComponent";

type ChildrenComponents = "SHARE";

export const Modal = () => {
  const [isModalActive, setModalActive] = useState(false);
  const [childrenComponentName, setChildrenComponentName] =
    useState<ChildrenComponents>();

  useEffect(() => {
    subscribe("openShareModal", () => {
      setModalActive(true);
      setChildrenComponentName("SHARE");
    });
    subscribe("closeModal", () => setModalActive(false));

    return () => {
      unsubscribe("openShareModal", () => {
        setModalActive(false);
        setChildrenComponentName(undefined);
      });
      unsubscribe("closeModal", () => setModalActive(true));
    };
  }, []);

  return (
    <>
      {isModalActive && childrenComponentName === "SHARE" && (
        <div
          className="fixed h-screen w-screen top-0 left-0 bg-black/50 z-[100] flex justify-center items-center"
          onClick={() => setModalActive(false)}>
          <Share />
        </div>
      )}
    </>
  );
};
