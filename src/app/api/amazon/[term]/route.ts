import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ term: string }> }
) {
  const { term } = await params;

  try {
    const items = await getDeals(term);

    return NextResponse.json({
      data: items,
    });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({
        code: 400,
        message: error.message,
      });

    return NextResponse.json({
      code: 500,
      message: "Internal Error!",
    });
  }
}

const getDeals = async (s: string) => {
  const url = `https://www.amazon.com.br/s?k=${s}`;
  const items: {
    img: string;
    title: string;
    price: string;
    fullPrice?: string;
  }[] = [];

  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);
    const itemsWithOffer = $(
      "[role='listitem'] .a-section.a-spacing-base"
    ).filter((idx, el) => {
      const item = $(el);
      const hasOffer =
        item.find("[data-a-strike='true'].a-price.a-text-price").length > 0;
      return hasOffer;
    });
    itemsWithOffer.each((idx, el) => {
      const item = $(el);
      const img = item.find("img.s-image").attr("src");
      const title = item.find("[data-cy='title-recipe'] h2 span").text();
      const priceDiv = item.find(".a-price").first().parent();
      const priceEls = priceDiv.find(".a-price");
      console.log(priceEls.length);
      const price = `${$(priceEls.first()).find(".a-price-whole").text()}${$(priceEls.first()).find(".a-price-fraction").text()}`;
      const fullPrice = `${$(priceEls.last()).find("[aria-hidden='true']").text()}`;
      if (img) items.push({ img, title, price, fullPrice });
    });

    return items;
  } catch (err) {
    throw new Error("Couldn't get Amazon response!");
  }
};
