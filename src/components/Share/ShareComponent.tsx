"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { Copy, X } from "lucide-react";

import twitterIcon from "@/socials/X Logo.svg";
import whatsappIcon from "@/socials/whatsapp.png";
import telegramIcon from "@/socials/telegrama.png";
import linkIcon from "@/socials/link.jpg";
import { send } from "@/utils/events";

export const ShareComponent = () => {
  const [isLinkVisible, setLinkVisible] = useState(false);
  const inputLinkRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = () => {
    const inputLink = inputLinkRef.current;
    if (inputLink) {
      inputLink.select();
      inputLink.setSelectionRange(0, inputLink.value.length);

      if (navigator.clipboard && navigator.clipboard.writeText)
        navigator.clipboard.writeText(inputLink.value);
      else document.execCommand("copy");
    }
  };

  return (
    <div
      className="bg-white rounded-lg flex flex-col p-2"
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <div className="flex w-full justify-end">
        <button onClick={() => send("closeModal")}>
          <X />
        </button>
      </div>
      <div className="flex flex-col pb-3 px-3 gap-3">
        <div className="flex flex-col text-center font-semibold text-xl">
          <span>Qual forma você</span>
          <span>gostaria de compartilhar?</span>
        </div>
        <div className="flex gap-4 justify-center">
          <Link href={getWhatsappUrl()} target="_blank">
            <Image
              src={whatsappIcon}
              alt="Logo do Whatsapp"
              width={32}
              height={32}
            />
          </Link>
          <Link href={getTelegramUrl()} target="_blank">
            <Image
              src={telegramIcon}
              alt="Logo do Telegram"
              width={32}
              height={32}
            />
          </Link>
          <Link href={getTwitterUrl()} target="_blank">
            <Image src={twitterIcon} alt="Logo do X" width={32} height={32} />
          </Link>
          <button onClick={() => setLinkVisible(true)}>
            <Image
              src={linkIcon}
              alt="Ícone de copiar url"
              width={32}
              height={32}
            />
          </button>
        </div>
        {isLinkVisible && (
          <div className="flex gap-2">
            <input
              type="text"
              name="shareableUrl"
              id="shareableUrl"
              className="flex-1 p-2 border border-zinc-300 rounded-md"
              value={getShareUrl()}
              ref={inputLinkRef}
              readOnly
              onClick={copyToClipboard}
            />
            <button onClick={copyToClipboard}>
              <Copy width={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const getShareUrl = () => {
  return document.URL;
};

const getWhatsappUrl = () => {
  const text = `Você também curte mangás? Descubra algo novo aqui: ${document.URL}`;
  const url = `https://api.whatsapp.com/send?text=${text}`;
  return url;
};

const getTwitterUrl = () => {
  const text = `Você também curte mangás? Descubra algo novo aqui:`;
  const url = `https://x.com/intent/post?text=${text}&url=${document.URL}`;
  return url;
};

const getTelegramUrl = () => {
  const text = `Você também curte mangás? Descubra algo novo aqui:`;
  const url = `https://telegram.me/share/url?url=${document.URL}&text=${text}`;
  return url;
};
