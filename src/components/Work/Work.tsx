import { useSeasonColors } from '../../contexts/SeasonColorsContext';
import { StickyScroll } from '../Motions/StickyScrollReveal';

function Work() {
  const { background, text } = useSeasonColors();

  const content = [
    {
      title: 'Site vitrine 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Naturopathe
        </div>
      ),
    },
    {
      title: 'Site vitrine 2',
      description:
        'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="/Flower.png"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-xl"
            alt="Flower"
          />
        </div>
      ),
    },
    {
      title: 'Version control',
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
  ];

  return (
    <section className={`Work p-10 ${background} ${text}`}>
      <h2 className="text-4xl uppercase font-semibold mb-5 text-center ">
        Projets
      </h2>
      <StickyScroll content={content} />
    </section>
  );
}

export default Work;
