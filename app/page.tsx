import HeroDisplay from '@/components/HeroDisplay';
import ProjectsDisplay from '@/components/ProjectsDisplay';
import SpecialityDisplay from '@/components/SpecialityDisplay';

export default function Page() {
  return (
    <section className="space-y-48">
      <HeroDisplay />
      <SpecialityDisplay />
      <ProjectsDisplay />
      <footer></footer>
    </section>
  );
}
