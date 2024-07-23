import Link from 'next/link';

const GoToControls = () => {
  return (
    <aside className="fixed bottom-1/2 right-6 flex flex-col gap-1 space-y-3">
      <Link
        href={'/'}
        className="inline-block size-2 rounded-full bg-gray-400"
      ></Link>
      <Link
        href={'#about'}
        className="inline-block size-2 rounded-full bg-gray-400"
      ></Link>
      <Link
        href={'#projects'}
        className="inline-block size-2 rounded-full bg-gray-400"
      ></Link>
      <Link
        href={'#skills'}
        className="inline-block size-2 rounded-full bg-gray-400"
      ></Link>
    </aside>
  );
};

export default GoToControls;
