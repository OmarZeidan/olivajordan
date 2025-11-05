import SectionGallery from "@/components/section-gallery";
import SectionHero from "@/components/section-hero";
import SectionHint from "@/components/section-hint";
import SectionOurKitchen from "@/components/section-our-kitchen";
import SectionStory from "@/components/section-story";
import SectionThePlace from "@/components/section-the-place";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionStory />

      <SectionThePlace />
      <SectionOurKitchen />
      <SectionGallery />

      <SectionHint />
    </>
  );
}
