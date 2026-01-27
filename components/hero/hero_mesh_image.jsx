import Image from "next/image";

export default function HeroMeshImage() {
  return (
    <Image
      src={"/assets/mesh.jpg"}
      fill
      alt="Mesh Gradient Image"
      className="opacity-75 z-1 object-cover"
    />
  );
}
