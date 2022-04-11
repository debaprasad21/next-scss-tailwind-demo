import Image from 'next/image';
import car from '../assets/733911.jpg';

const Banner = () => {
  return (
    <div className="w-full relative mt-16 image-container">
      <div className="relative w-full h-96">
        <Image
          alt="Mountains"
          src={car}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full relative block car-image"
        />
      </div>

      <div className="relative lg:absolute lg:bottom-negative48 lg:left-1/4 lg:right-1/4 bg-primary-white w-50 z-10 text-center shadow-lg p-8 rounded-sm">
        <p className="heading-1 mb-8">Welcome</p>
        <p className="text-primary-black head-1 mb-6">A Demo App in NextJS</p>
        <p className="text-primary-black head-1">NextJS Material UI Tailwind</p>
      </div>
    </div>
  );
};

export default Banner;
