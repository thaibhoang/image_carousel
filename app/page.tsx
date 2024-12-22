import ImageCarousel from "./components/ImagesCarousel/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full bg-black">
      <ImageCarousel />
    </div>
  );
}
