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
      className="absolute -right-10 top-[32rem] flex gap-14 md:gap-20 lg:-right-48 lg:-top-14 lg:flex-col"
    >
      <div className="grid size-24 place-items-center rounded-full bg-white">
        <Image
          src={TsImage}
          alt="Profile image"
          className="size-14 rounded-md"
        />
      </div>

      <div className="grid size-36 place-items-center rounded-full bg-white">
        <Image
          src={NextJsImage}
          alt="Profile image"
          className="size-24 rounded-md"
        />
      </div>

      <div className="grid size-24 place-items-center rounded-full bg-white">
        <Image
          src={NestJsImage}
          alt="Profile image"
          className="size-16 rounded-md"
        />
      </div>
    </motion.div>
  );
};

export default HeroFloatingSkills;
