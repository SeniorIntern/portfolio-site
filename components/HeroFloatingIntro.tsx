import Wavinghand from '@/public/svg/waving-hand.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroFloatingIntro = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="relative -top-[32rem] mt-3 ml-3 sm:-left-32 md:-left-40 md:mt-8 lg:-left-72 lg:-top-16"
    >
      <div className="space-y-4">
        <div className="flex w-fit items-center gap-6 rounded-md px-4 py-5 shadow-lg">
          <div className="relative size-12">
            <Image
              fill
              src={Wavinghand}
              alt="Profile image"
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-fit">
            <span className="inline-block text-sm text-gray-400">
              Hello, I am
            </span>
            <h1 className="space-x-1 text-2xl font-extrabold">Nikhil Thapa</h1>
          </div>
        </div>

        <div className="w-fit rounded-md px-4 py-5 shadow-lg">
          <p className="text-sm">Student</p>
          <p className="text-sm">FullStack Developer</p>
        </div>
      </div>
    </motion.div>
  );
};
export default HeroFloatingIntro;
