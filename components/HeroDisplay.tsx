'use client';

import ProfileImage from '@/public/NikhilProfilePic.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CSSProperties } from 'react';
import HeroFloatingIntro from './HeroFloatingIntro';
import HeroFloatingSkills from './HeroFloatingSkills';

const HeroDisplay = () => {
  const ImageGradientBg: CSSProperties = {
    background:
      'rgb(105,24,204) linear-gradient(90deg, rgba(105,24,204,1) 1%, rgba(118,201,252,1) 100%)'
  };

  return (
    <section className="relative mx-auto mt-32 w-fit">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.3 }}
        className="relative top-20 size-96 lg:top-0"
      >
        <Image
          src={ProfileImage}
          priority={true}
          alt="Profile image"
          fill
          sizes="30vw"
          style={ImageGradientBg}
          className="rounded-full object-cover"
        />
      </motion.div>
      <HeroFloatingSkills />
      <HeroFloatingIntro />
    </section>
  );
};

export default HeroDisplay;
