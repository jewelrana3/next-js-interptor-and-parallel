import Image from "next/image";
import images from "../images";

export default function Idpage({ params }) {
  const { id } = params;
  const photo = images.find((p) => p.id === id);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          src={photo.src}
          alt={photo.name}
          className="object-cover aspect-square w-full"
        />
      </div>
    </div>
  );
}
