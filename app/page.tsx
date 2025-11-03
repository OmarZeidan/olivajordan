import SectionHero from "@/components/section-hero";
import SectionStory from "@/components/section-story";
import SectionTheFood from "@/components/section-the-food";
import SectionThePlace from "@/components/section-the-place";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionStory />

      <SectionThePlace />
      <SectionTheFood />
    </>
  );
}
