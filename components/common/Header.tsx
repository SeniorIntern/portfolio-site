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
    <header className="flex items-center justify-between bg-[#F2F6F9] px-4 py-4">
      <span className="space-x-1">
        <span className="rounded-md border-4 border-blue-800 p-2 text-xl font-extrabold text-blue-800">
          Nikhil
        </span>
        <span className="text-xl font-extrabold">Thapa</span>
      </span>

      <nav className="flex gap-6">
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
      <span></span>
    </header>
  );
};

export default Header;
