'use client';

import FrontendImage from '@/public/about/frontend.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsDisplay = () => {
  return (
    <article id="projects" className="space-y-6">
      <p className="text-center text-5xl font-semibold">
        Have A Look At <span className="text-blue-800">My Projects</span>
      </p>

      <div className="mx-auto grid w-fit grid-cols-3 gap-16">
        {Array.from({ length: 5 }).map((_, idx) => (
          <motion.div
            whileInView={{ y: [40, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            key={idx}
            className="rounded-md bg-white px-2 pt-2"
          >
            <div className="relative h-36 w-64">
              <Image
                src={FrontendImage}
                alt="Project image"
                className="size-full rounded-md object-cover"
              />
            </div>
            <p className="my-2 text-center font-bold">Project Abc</p>
          </motion.div>
        ))}
      </div>
    </article>
  );
};

export default ProjectsDisplay;
