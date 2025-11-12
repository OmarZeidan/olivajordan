import SectionGallery from "@/components/section-gallery";
import SectionHero from "@/components/section-hero";
import SectionHint from "@/components/section-hint";
import SectionOurKitchen from "@/components/section-our-kitchen";
import SectionStory from "@/components/section-story";
import SectionThePlace from "@/components/section-the-place";

import { get } from "@vercel/edge-config";

export default async function Home() {
  const hero = (await get<{ title: string }>("hero")) ?? {
    title: "Default Title",
  };

  return (
    <>
      <SectionHero />
      <SectionStory />

      <p> {hero?.title} is here </p>
      <SectionThePlace />
      <SectionOurKitchen />
      <SectionGallery />

      <SectionHint />
    </>
  );
}
