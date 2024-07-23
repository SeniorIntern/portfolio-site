import ProfileImage from '@/public/NikhilProfilePic.png';
import Wavinghand from '@/public/svg/waving-hand.svg';
import NestJsImage from '@/public/technology/nestjs.svg';
import NextJsImage from '@/public/technology/nextjs.svg';
import TsImage from '@/public/technology/ts.svg';
import Image from 'next/image';
import { CSSProperties } from 'react';

const HeroDisplay = () => {
  const ImageGradientBg: CSSProperties = {
    background:
      'rgb(105,24,204) linear-gradient(90deg, rgba(105,24,204,1) 1%, rgba(118,201,252,1) 100%)'
  };

  return (
    <div className="relative mx-auto mt-32 w-fit">
      <div className="relative size-96">
        <Image
          src={ProfileImage}
          alt="Profile image"
          fill
          style={ImageGradientBg}
          className="rounded-full object-cover"
        />
      </div>
      <HeroFloatingSkills />
      <HeroFloatingIntro />
    </div>
  );
};

export default HeroDisplay;

const HeroFloatingSkills = () => {
  return (
    <div className="absolute -right-44 -top-16 flex flex-col gap-20">
      <div className="relative size-24">
        <Image
          src={TsImage}
          alt="Profile image"
          className="size-full rounded-full object-cover"
        />
      </div>
      <div className="relative size-28">
        <Image
          src={NextJsImage}
          alt="Profile image"
          className="size-full rounded-full object-cover"
        />
      </div>
      <div className="relative size-20">
        <Image
          src={NestJsImage}
          alt="Profile image"
          className="size-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

const HeroFloatingIntro = () => {
  return (
    <div className="absolute -bottom-24 -left-[70%] space-y-4">
      <div className="flex items-center gap-6 rounded-md px-4 py-5 shadow">
        <div className="relative size-12">
          <Image
            src={Wavinghand}
            alt="Profile image"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-gray-400">Hello, I am</p>
          <p className="text-2xl font-extrabold">Nikhil Thapa</p>
        </div>
      </div>

      <div className="w-fit rounded-md px-4 py-5 shadow">
        <p className="text-sm">Student</p>
        <p className="text-sm">FullStack Developer</p>
      </div>
    </div>
  );
};
