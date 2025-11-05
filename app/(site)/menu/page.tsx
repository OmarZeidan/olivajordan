import { Metadata } from "next";
import SectionOlivaMenu from "./_components/section-oliva-menu.client";

export const metadata: Metadata = {
  title: "Our Menu – Oliva Italian Restaurant",
  description:
    "Explore Oliva’s menu — clay-oven pizzas, fresh pasta, and authentic Italian flavors served in Jabal Al Lweibdeh, Amman.",
  openGraph: {
    title: "Our Menu – Oliva Italian Restaurant",
    description:
      "Discover Oliva’s menu of pizza, pasta, and seasonal salads — crafted with care in Amman since 2011.",
  },
};

export default function OlivaMenu() {
  return <SectionOlivaMenu />;
}
