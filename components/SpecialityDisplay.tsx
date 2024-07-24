'use client';

import BackendImage from '@/public/about/backend.png';
import DevopsImage from '@/public/about/devops.png';
import FrontendImage from '@/public/about/frontend.png';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

const SpecialityDisplay = () => {
  return (
    <section id="about" className="space-y-10">
      <article className="text-center text-5xl font-semibold">
        <h2>
          I Know That <span className="text-blue-800">Development</span>
          <br/>
          Means <span className="text-blue-800">Good Business</span>
        </h2>
      </article>

      <article className="mx-auto grid w-fit grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
        <SpecialityDisplayCard
          image={FrontendImage}
          skill="Frontend Developer"
          skillDescription="I am proficient in designing visually appealing websites."
        />
        <SpecialityDisplayCard
          image={BackendImage}
          skill="Backend Developer"
          skillDescription="
I excel in building robust and scalable server-side applications."
        />
        <SpecialityDisplayCard
          image={DevopsImage}
          skill="DevOps"
          skillDescription="I specialize in managing cloud infra for seamless CI/CD  and ops."
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
          fill
          sizes="20vw"
          src={image}
          alt="skill image"
          className="rounded-md object-cover"
        />
      </div>

      <div className="text-center">
        <p className="font-bold">{skill}</p>
        <p className="text-[0.75rem] text-gray-800">{skillDescription}</p>
      </div>
    </motion.div>
  );
};
