import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Aside = () => {
  return (
    <aside className="fixed bottom-6 left-6 space-y-3">
      <Link
        target="_blank"
        href={'https://twitter.com/senior1ntern/'}
        className="grid size-10 place-items-center rounded-full bg-white shadow"
      >
        <Twitter className="size-4" />
      </Link>

      <Link
        target="_blank"
        href={'https://github.com/seniorIntern'}
        className="grid size-10 place-items-center rounded-full bg-white shadow"
      >
        <Github />
      </Link>

      <Link
        target="_blank"
        href={'https://www.linkedin.com/in/nikhildotjs/'}
        className="grid size-10 place-items-center rounded-full bg-white shadow"
      >
        <Linkedin />
      </Link>
    </aside>
  );
};

export default Aside;
