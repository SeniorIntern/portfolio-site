import HeroDisplay from '@/components/HeroDisplay';
import ProjectsDisplay from '@/components/ProjectsDisplay';
import SkillsDisplay from '@/components/SkillsDisplay';
import SpecialityDisplay from '@/components/SpecialityDisplay';

export default function Page() {
  return (
    <section className="space-y-48">
      <HeroDisplay />
      <SpecialityDisplay />
      <ProjectsDisplay />
      <SkillsDisplay />
      <footer></footer>
    </section>
  );
}
