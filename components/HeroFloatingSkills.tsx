import NestJsImage from '@/public/technology/nestjs.svg';
import NextJsImage from '@/public/technology/nextjs.svg';
import TsImage from '@/public/technology/ts.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroFloatingSkills = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="absolute -right-44 -top-16 flex flex-col gap-20"
    >
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
    </motion.div>
  );
};

export default HeroFloatingSkills;
