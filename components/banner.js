import Image from "next/image";
import car from "../assets/733911.jpg";

const Banner = () => {
  return (
    <div className="w-full relative h-96 mt-16">
      <Image
        alt="Mountains"
        src={car}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default Banner;
