import HeroHeader from "@/components/page_hero/hero_header";
import HeroMain from "@/components/page_hero/hero_main";
import HeroMeshImage from "@/components/page_hero/hero_mesh_image";

export default function Home() {
  return (
    <section className="w-screen h-dvh relative md:px-20 flex flex-col bg-white bg-[radial-gradient(#f2f2f2_1px,transparent_1px)] bg-size-[16px_16px] font-main">
      <HeroHeader />
      <HeroMain />
    </section>
  );
}
