import HeroFooter from "@/components/hero/hero_footer";
import HeroHeader from "@/components/hero/hero_header";
import HeroMain from "@/components/hero/hero_main";
import HeroMeshImage from "@/components/hero/hero_mesh_image";

export default function Home() {
  return (
    <section className="w-screen h-dvh relative md:px-20 flex flex-col bg-white/90 font-main">
      <HeroMeshImage />
      <HeroHeader />
      <HeroMain />
    </section>
  );
}
