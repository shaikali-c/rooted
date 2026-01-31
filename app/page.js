import HeroHeader from "@/components/page_hero/hero_header";
import HeroMain from "@/components/page_hero/hero_main";
import HeroMeshImage from "@/components/page_hero/hero_mesh_image";

export default function Home() {
  return (
    <section className="w-screen h-dvh overflow-hidden relative md:px-20 flex flex-col bg-white font-main">
      <HeroHeader />
      <HeroMain />
    </section>
  );
}
