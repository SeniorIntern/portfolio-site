'use client';

import AiSaasProjectImage from '@/public/projects/ai-saas.png';
import EcommerceProjectImage from '@/public/projects/ecommerce.png';
import ReservationPlatformProjectImage from '@/public/projects/reservation-platform.png';
import SocialMediaProjectImage from '@/public/projects/social-media.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const projects = [
  {
    name: 'Social Media',
    image: SocialMediaProjectImage,
    href: 'https://github.com/SeniorIntern/Social-Media'
  },
  {
    name: 'Ecommerce',
    image: EcommerceProjectImage,
    href: 'https://github.com/SeniorIntern/ecommerce'
  },
  {
    name: 'Reservation System',
    image: ReservationPlatformProjectImage,
    href: 'https://github.com/SeniorIntern/Reservation-System'
  },
  {
    name: 'SAAS AI',
    image: AiSaasProjectImage,
    href: 'https://github.com/SeniorIntern/SAAS-AI'
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
