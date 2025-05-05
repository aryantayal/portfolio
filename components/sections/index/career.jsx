// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="Currently I am a Demo Engineer for Stripe."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <div className={career.companyHeader}>
                <h3>Stripe</h3>
                <h4>Full-time</h4>
                <h4>April 2025 - Present &middot; Current</h4>
                <h5>Chicago, Illinois</h5>
              </div>
              <p className={career.description}>
                Stripe is a technology company that builds economic
                infrastructure for the internet, enabling businesses of all
                sizes to accept payments, send payouts, and manage online
                financial operations. Revolutionizing the online payments
                industry, Stripe processes over $1 trillion in payment volume
                annually, powering global commerce for startups to Fortune 500
                companies.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <div className={career.positionHeader}>
                  <h3>Demo Engineer</h3>
                  <h4>April 2024 - Present &middot; Current</h4>
                </div>
                <div>
                  {/* <ul className={`${career.bulletPoints} bullet-points`}>
                    <li>
                      - Enhance the Discover Mobile App (iOS & Android) used by
                      6M+ daily active users for payments, account info, and
                      rewards management
                    </li>
                  </ul> */}
                  <Badges
                    list={stripeBadges}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
          <article className={career.company}>
            <div className={career.companyContent}>
              <div className={career.companyHeader}>
                <h3>Discover Financial Services</h3>
                <h4>Full-time</h4>
                <h4>April 2024 - April 2025 &middot; 1 yr 1 month</h4>
                <h5>Chicago, Illinois</h5>
              </div>
              <p className={career.description}>
                Discover Financial Services is a leading direct banking and
                payment services company based in Riverwoods, Illinois. As one
                of the largest credit card issuers in the United States,
                Discover operates the Discover Network with millions of
                merchants and cash access locations worldwide. Their diverse
                suite of financial products and services includes credit cards,
                personal and student loans, online banking, and home equity
                loans, catering to both consumer and commercial clients across
                the nation.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <div className={career.positionHeader}>
                  <h3>Senior Associate Application Engineer</h3>
                  <h4>April 2024 - Present &middot; Current</h4>
                </div>
                <div>
                  <ul className={`${career.bulletPoints} bullet-points`}>
                    <li>
                      - Enhance the Discover Mobile App (iOS & Android) used by
                      6M+ daily active users for payments, account info, and
                      rewards management
                    </li>
                    <li>
                      - Built a dashboard to allow users to manage third-party
                      data aggregator access, digital wallet integration, and
                      fraud reporting tools
                    </li>
                    <li>
                      - Implemented automated unit, integration, and E2E testing
                      using Appium, Cucumber, Pact, and Jest
                    </li>
                    <li>
                      - Used Adobe Analytics and DataDog to monitor app
                      performance and ensure reliable user experiences
                    </li>
                  </ul>
                  <Badges
                    list={discoverBadges}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <div className={career.companyHeader}>
                <h3>American Family Insurance</h3>
                <h4>Full-time</h4>
                <h4>July 2021 - Present &middot; 2 yrs 6 months</h4>
                <h5>Madison, Wisconsin (Remote)</h5>
              </div>
              <p className={career.description}>
                Madison, Wisconsin-based, American Family Insurance group is the
                nation&apos;s 13th-largest property/casualty insurance group and
                ranks No. 251 on the Fortune 500 list. American Family sells
                products, including auto, homeowners, life, business, and
                commercial/farm/ranch insurance, primarily through its exclusive
                independent contractor agents in 19 states.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <div className={career.positionHeader}>
                  <h3>Application Development Engineer</h3>
                  <h4>July 2021 - April 2024 &middot; 2 yrs 10 months</h4>
                </div>
                <div>
                  <ul className={`${career.bulletPoints} bullet-points`}>
                    <li>
                      - Built and improved the MyAccount customer portal
                      (Angular), serving 5M+ users for policy management,
                      claims, and insurance access
                    </li>
                    <li>
                      - Developed a Context API that drove upsell opportunities,
                      helping meet policy goals months ahead of schedule
                    </li>
                    <li>
                      - Optimized AWS infrastructure by integrating CI/CD
                      pipelines with cost-saving Lambda caching and secure
                      multi-environment deployments
                    </li>
                    <li>
                      - Led development of a React dashboard used by 100+ PMs
                      and Product Owners to prioritize projects, track sales,
                      and manage IVANS downloads
                    </li>
                  </ul>
                  <Badges
                    list={fullStack}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Bloom Media</h3>
                <h4>April 2020 - Present &middot; 5 yrs</h4>
                <h5>Kansas City Missouri</h5>
              </span>
              <p>
                Kansas City, Missouri based, Bloom Media brings high quality
                photo and video services to the Midwest area. Over the past 3
                years, Bloom Media has serviced 40+ weddings and continuing to
                serve more.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Founder</h3>
                  <h4>April 2020 - Present &middot; 5 years</h4>
                </span>
                <div>
                  <p>
                    <ul className="bullet-points">
                      <li>
                        - Oversee all aspects of the business, including
                        marketing, customer relations, inquiries, and finances,
                        ensuring exceptional customer satisfaction and achieving
                        significant growth in revenue.
                      </li>
                      <li>
                        - Create and streamlined business automation flows,
                        resulting in increased efficiency and productivity.
                      </li>
                      <li>- Maintain all social media platforms to</li>
                    </ul>
                  </p>
                  <Badges
                    list={photo}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
        </section>
      </Container>
    </Section>
  );
}
const stripeBadges = [
  { key: "nextjs-plain", name: "NextJs", type: "devicon" },
  { key: "react-native", name: "React Native", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "amazonwebservices", name: "Amazon Web Services", type: "devicon" },
  { key: "googlecloud-plain", name: "Google Cloud", type: "devicon" },
  { key: "jest", name: "Jest", type: "devicon" },
  { key: "html5", name: "HTML", type: "devicon" },
  { key: "css3", name: "CSS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "terraform", name: "Terraform", type: "devicon" },
  { key: "materialui", name: "Material UI", type: "devicon" },
  { key: "jira", name: "Jira", type: "devicon" },
  { key: "confluence", name: "Confluence", type: "devicon" },
];
const discoverBadges = [
  { key: "react-native", name: "React Native", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "amazonwebservices", name: "Amazon Web Services", type: "devicon" },
  { key: "jest", name: "Jest", type: "devicon" },
  { key: "html5", name: "HTML", type: "devicon" },
  { key: "css3", name: "CSS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "jira", name: "Jira", type: "devicon" },
  { key: "confluence", name: "Confluence", type: "devicon" },
];
const fullStack = [
  { key: "angularjs", name: "Angular", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "amazonwebservices", name: "Amazon Web Services", type: "devicon" },
  { key: "jest", name: "Jest", type: "devicon" },
  { key: "html5", name: "HTML", type: "devicon" },
  { key: "css3", name: "CSS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "terraform", name: "Terraform", type: "devicon" },
  { key: "materialui", name: "Material UI", type: "devicon" },
  { key: "jira", name: "Jira", type: "devicon" },
  { key: "confluence", name: "Confluence", type: "devicon" },
];

const photo = [
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "photoshop", name: "Photoshop", type: "devicon" },
  { key: "illustrator", name: "Illustrator", type: "devicon" },
  { key: "aftereffects", name: "After Effects", type: "devicon" },
  { key: "premierepro", name: "Premiere Pro", type: "devicon" },
];
