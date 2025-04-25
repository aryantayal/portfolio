// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="I'm a multidisciplinary digital creative with a background in Full Stack Development, UI/UX Design, Branding, and Visual Storytelling. I thrive at the intersection of design, technology, and strategy."
        />

        <section className={about.content}>
          <div className={about.image}>
            <Image
              src="/img/profile-picture.jpg"
              alt="Aryan Tayal"
              width={500}
              height={500}
            />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Soft Skills That Drive Results"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="Beyond the code and creative tools, I bring strong leadership, time management, and multitasking skills—refined through running my own business and consistently pushing myself as a lifelong learner. When I'm not working, you'll find me exploring new coffee shops with friends, filming content, playing golf, managing my business and reading books. I am confident in my ability to bring passion and diverse value to any project."
            />

            <BadgesBlock
              title="Research & Vision Execution"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="One of the most fulfilling parts of my creative process is transforming ideas into tangible results. I love diving deep into a vision, crafting a plan, and bringing it to life with strategy, intention, and heart."
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "User Research", type: "fad" },
  { key: "qrcode", name: "Digital Strategy", type: "fad" },
  { key: "window", name: "Design Systems", type: "fad" },
  { key: "cubes", name: "Product Strategy", type: "far" },
  { key: "layer-plus", name: "Brand Strategy", type: "fad" },
  { key: "solar-system", name: "Operations", type: "fad" },
];
