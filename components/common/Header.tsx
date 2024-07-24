import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const navOptions = [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'about',
      href: '#about'
    },
    {
      label: 'projects',
      href: '#projects'
    },
    {
      label: 'skills',
      href: '#skills'
    }
  ];

  return (
    <header className="flex items-center justify-between bg-[#F2F6F9] px-4 py-4 shadow-black drop-shadow-md">
      <span className="space-x-1">
        <span className="rounded-md border-4 border-blue-800 p-2 text-xl font-extrabold text-blue-800">
          Nikhil
        </span>
        <span className="text-xl font-extrabold">Thapa</span>
      </span>

      <nav className="hidden space-x-6 lg:flex">
        {navOptions.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="border-blue-800 text-[0.8rem] text-gray-500 hover:border-t-2 hover:text-blue-800"
          >
            {item.label.toUpperCase()}
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger
          aria-label="open navbar"
          className="block rounded-full bg-blue-800 p-1 lg:hidden"
        >
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent className="">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <nav className="my-8 flex flex-col gap-4">
            {navOptions.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="font-[400] text-gray-500 hover:text-blue-800"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <span className="hidden lg:inline"></span>
    </header>
  );
};

export default Header;
