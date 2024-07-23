'use client';

import BackendImage from '@/public/about/backend.png';
import DevopsImage from '@/public/about/devops.png';
import FrontendImage from '@/public/about/frontend.png';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

const SpecialityDisplay = () => {
  return (
    <section id="about" className="space-y-10">
      <article className="text-center text-5xl font-semibold">
        <p>
          I Know That <span className="text-blue-800">Development</span>
        </p>

        <p>
          Means <span className="text-blue-800">Good Business</span>
        </p>
      </article>

      <article className="mx-auto grid w-fit grid-cols-3 gap-14">
        <SpecialityDisplayCard
          image={FrontendImage}
          skill="frontend Developer"
          skillDescription="I am proficient in designing visually appealing web websites."
        />
        <SpecialityDisplayCard
          image={BackendImage}
          skill="frontend Developer"
          skillDescription="I am proficient in designing visually appealing web designs that scales."
        />
        <SpecialityDisplayCard
          image={DevopsImage}
          skill="DevOps"
          skillDescription="I am proficient in designing visually appealing web designs that scales."
        />
      </article>
    </section>
  );
};

export default SpecialityDisplay;

type Props = {
  image: StaticImageData;
  skill: string;
  skillDescription: string;
};

const SpecialityDisplayCard = ({ image, skill, skillDescription }: Props) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="h-fit w-52 space-y-4"
    >
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt="skill image"
          fill
          className="rounded-md object-cover"
        />
      </div>

      <p className="text-center font-bold">{skill}</p>

      <p className="text-[0.75rem] text-gray-800">{skillDescription}</p>
    </motion.div>
  );
};
