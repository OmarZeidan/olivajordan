import { Metadata } from "next";
import SectionOlivaMenu from "./_components/section-oliva-menu.client";
import { getSections } from "./_utils";

export const metadata: Metadata = {
  title: "Our Menu – Oliva Italian Restaurant",
  description:
    "Explore Oliva Pizza and Pasta’s menu — clay-oven pizzas, fresh pasta, and seasonal salads crafted with care in Jabal Al-Lweibdeh and Shmeisani, Amman. Authentic Italian flavors, made fresh since 2011.",
  openGraph: {
    title: "Our Menu – Oliva Italian Restaurant",
    description:
      "Discover the menu of Oliva Pizza and Pasta — thin-crust pizzas, handmade pasta, and fresh seasonal salads inspired by Italian tradition and local rhythm. Serving Amman since 2011, in Jabal Al-Lweibdeh and Shmeisani.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Oliva Italian Restaurant Menu – Jabal Al-Lweibdeh and Shmeisani, Amman",
      },
    ],
  },
};

export default async function Page() {
  const { sections, fetchedAt } = await getSections();

  return <SectionOlivaMenu sections={sections} fetchedAt={fetchedAt} />;
}
