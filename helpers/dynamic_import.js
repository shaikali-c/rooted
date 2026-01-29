import dynamic from "next/dynamic";

export function dynamicImportComponent(path) {
  return dynamic(() => import(path), {
    ssr: false,
  });
}
