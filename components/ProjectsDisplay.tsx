'use client';

import FrontendImage from '@/public/about/frontend.png';
import EcommerceProjectImage from '@/public/projects/ecommerce.png';
import GameDiscoveryProjectImage from '@/public/projects/game-hub.png';
import IssueTrackerProjectImage from '@/public/projects/issue-tracker.png';
import SocialMediaProjectImage from '@/public/projects/social-media.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const projects = [
  {
    name: 'Game Disovery',
    image: GameDiscoveryProjectImage,
    href: 'https://github.com/SeniorIntern/game-hub-react'
  },
  {
    name: 'TwitMatchPlay',
    image: SocialMediaProjectImage,
    href: 'https://github.com/SeniorIntern/TwitMatchPlay-client'
  },
  {
    name: 'Ecommerce',
    image: EcommerceProjectImage,
    href: 'https://github.com/SeniorIntern/ecommerce-front'
  },
  {
    name: 'Issue Tracker',
    image: IssueTrackerProjectImage,
    href: 'https://github.com/SeniorIntern/issue-tracker'
  },
  {
    name: 'Movie Rental IMS',
    image: FrontendImage,
    href: 'https://github.com/SeniorIntern/movie-store-api'
  }
];

const ProjectsDisplay = () => {
  const router = useRouter();

  return (
    <article id="projects" className="space-y-6">
      <h2 className="text-center text-5xl font-semibold">
        Have A Look At <span className="text-blue-800">My Projects</span>
      </h2>

      <div className="mx-auto grid w-fit grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, idx) => (
          <motion.div
            whileInView={{ y: [40, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            key={idx}
            className="cursor-pointer rounded-md bg-white px-2 pt-2"
            onClick={() => router.push(item.href)}
          >
            <div className="relative h-36 w-64">
              <Image
                sizes="20vw"
                fill
                src={item.image}
                alt="Project image"
                className="size-full rounded-md object-cover"
              />
            </div>
            <p className="my-2 text-center font-bold">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </article>
  );
};

export default ProjectsDisplay;
