import HeroDisplay from '@/components/HeroDisplay';
import SpecialityDisplay from '@/components/SpecialityDisplay';

export default function Page() {
  return (
    <section className="space-y-48">
      <HeroDisplay />
      <SpecialityDisplay />
      <footer></footer>
    </section>
  );
}
