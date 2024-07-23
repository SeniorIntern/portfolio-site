import Wavinghand from '@/public/svg/waving-hand.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroFloatingIntro = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};
export default HeroFloatingIntro;
