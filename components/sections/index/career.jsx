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
          subTitle="I am currently a Application Development Engineer, developing a customer portal for American Family Insurance."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>American Family Insurance</h3>
                <h4>Full-time</h4>
                <h4>July 2021 - Present &middot; 2 yrs 5 months</h4>
                <h5>Madison, Wisconsin (Remote)</h5>
              </span>
              <p>
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
                <span className={career.positionHeader}>
                  <h3>Application Development Engineer</h3>
                  <h4>July 2021 - Present &middot; 2 yrs 5 months</h4>
                </span>
                <div>
                  <p>
                    <ul className="bullet-points">
                      <li>
                        - Develop features/fix bugs for MyAccount, a web
                        application utilized by 5,000,000+ customers to manage
                        policies, payments, file claims, access insurance
                        card/information, etc. – Angular, TypeScript, AWS
                        <ul>
                          <li>
                            - Took ownership of creating an accessible and
                            user-friendly live version of the Proof of Insurance
                            card by removing extra system dependencies to
                            improve availability and allowing customers to
                            access policy information
                          </li>
                          <li>
                            - Worked on a Context API to upsell customers on new
                            policies provided by Recommendation Systems
                            resulting in achieving upsell goals 5 months in
                            advance – Nest.js, NodeJS, AWS
                          </li>
                          <li>
                            - Implemented Caching for API responses resulting in
                            a reduced amount of API calls and AWS cost – AWS
                            Lambda
                          </li>
                          <li>
                            - Implemented Adobe Analytics and conducted
                            end-to-end / unit code testing by creating Cypress &
                            Jest tests to ensure application stability and a
                            user-friendly experience
                          </li>
                        </ul>
                      </li>
                      <br />
                      <li>
                        - Design and develop a dashboard used by 100+ Enterprise
                        Project Managers and Product Owners to help identify
                        where the Enterprise can prioritize new work, improve
                        sales and IVANS (Independent Agent Profile) downloads –
                        React.JS, Material UI, MobX, AWS, Figma
                      </li>
                      <li>
                        - Implement a Terraform Module template for all tech
                        types to push/pull packages to/from Enterprise
                        Artifactory for all Enterprise developers to utilize –
                        Terraform JFrog, NodeJS, Maven, PIP, AWS, Octopus Deploy
                      </li>
                      <li>
                        - Write Confluence documentation for end users to
                        maximize efficient application usage to derive desired
                        results
                      </li>
                      <li>
                        - Work in an Agile framework and take on leadership
                        responsibilities by creating new stories/tasks,
                        maintaining backlog health and delegating tasks from
                        Jira board
                      </li>
                    </ul>
                  </p>
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
          {/* <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Bloom Media</h3>
                <h4>April 2020 - Present &middot; 3 yrs 10 months</h4>
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
                  <h4>April 2020 - Present &middot; 3 yrs 10 months</h4>
                </span>
                <div>
                  <p>
                    <ul className="bullet-points">
                      <li>
                        - Oversaw all aspects of the business, including
                        marketing, customer relations, inquiries, and finances,
                        ensuring exceptional customer satisfaction and achieving
                        significant growth in revenue.
                      </li>
                      <li>
                        - Created and streamlined business automation flows,
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
          </article> */}
        </section>
      </Container>
    </Section>
  );
}

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
