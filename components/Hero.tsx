import { CTAButton } from "./CTAButton";
import Section from "./Section";

export default function Hero() {
  return (
    <Section className="relative min-h-svh md:min-h-dvh flex items-center">
      <div className=" z-10 flex flex-col text-center md:text-left items-center md:items-baseline gap-4 md:gap-5 :gap-6 ">
        <h2 className="text-primary-dim">
          Hello, I'm <span className="text-light-blue">Luis Martinez</span>.
        </h2>
        <h1 className="text-primary items-start">
          <span className="inline sm:hidden">Software Engineer</span>
          <span className="hidden sm:inline items-start">
            Front-End Software Engineer
          </span>
        </h1>
        <p className="text-primary/75">
          The stars don't tell the future. They tell stories.
        </p>
        <div className="mt-4">
          <CTAButton href="#work">View Projects</CTAButton>
        </div>
      </div>
    </Section>
  );
}
