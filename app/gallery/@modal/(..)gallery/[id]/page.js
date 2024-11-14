import Modal from "@/app/components/Modal";
import images from "@/app/gallery/images";
import Image from "next/image";

export default function Idpage({ params }) {
  const { id } = params;
  const photo = images.find((p) => p.id === id);
  return (
    <Modal>
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
    </Modal>
  );
}
