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
                <h4>July 2021 - Present &middot; 2 yrs 4 months</h4>
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
                  <h4>July 2021 - Present &middot; 2 yrs 4 months</h4>
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

            {/* <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Full Stack Developer & User Experience Designer</h3>
                  <h4>Feb 2020 - Nov 2021 · 1 yrs 10 mos</h4>
                </span>
                <p>
                  As the lead full stack developer I am responsible for all
                  software development, CI/CD, and QA. This is for the front
                  end, APIs, and the back end. Additionally I was tasked with
                  identifying and analyzing weak points in the customer journey
                  and employee workflows. Each project had to be estimated and
                  prioritized based on its workload and immediate impact to
                  efficiency or revenue. Some of these projects have been so
                  successful internally that we have planned refactoring for
                  commercialization.
                </p>
                <p>Some key projects complete during this time 👇</p>
                <ul className={career.list}>
                  <li>
                    Product attribute and settings automated testing
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Eradicated critical
                      data input errors
                    </span>
                  </li>
                  <li>
                    Inventory management reporting and automation
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Decreased
                      purchasing labour by ~80%
                    </span>
                  </li>
                  <li>
                    Sales management plugin with AJAX shopping cart integration
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Increased AOV by
                      8.3%
                    </span>
                  </li>
                  <li>
                    Bespoke ID verification software and WooCommerce integration
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Decreased Credit
                      Card fraud by 98%
                    </span>
                  </li>
                </ul>
                <Badges
                  list={fullStack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Front End Developer & User Interface Designer</h3>
                  <h4>Apr 2019 - Feb 2020 · 11 mos</h4>
                </span>
                <p>
                  I was brought on to help fill multiple creative rolls in a
                  small start-up environment. Working with the marketing team to
                  create the brand and logos — designing and developing a new
                  front end for the website — and improving the users experience
                  and store KPIs through design and merchandising optimizations.
                </p>
                <p>Some key projects completed during this time 👇</p>
                <ul className={career.list}>
                  <li>
                    Full functionality interactive shopping cart to replace cart
                    page
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Increased
                      conversions by 0.7%
                    </span>
                  </li>
                  <li>
                    Complex multi-state animated menus represented in an elegant
                    UI
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Strong brand
                      confidence booster with state of the art menu
                    </span>
                  </li>
                  <li>
                    Design and development of the site and merchandising
                    strategy optimized for market
                    <span className={career.subList}>
                      <span className={career.bullet}></span>7.1% overall
                      conversion rate{" "}
                    </span>
                  </li>
                </ul>
                <Badges
                  list={stack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div> */}
          </article>

          {/* <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Another Creative Ltd.</h3>
                <h4>Contract Part-time</h4>
                <h4>Jun 2016 - Present · 6 yrs 8 mos</h4>
                <h5>Vancouver, British Columbia, Canada</h5>
              </span>
              <p>
                Another Creative is a full stack agency that helps deliver
                exceptional digital experiences to small and medium businesses.
                Branding, Marketing, and Web/Software Development.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article> */}

          {/* <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>West Coast Electronics</h3>
                <h4>Permanent Full-time</h4>
                <h4>Jan 2006 - Nov 2011 · 5 yrs 11 mos</h4>
                <h5>Vancouver, British Columbia, Canada</h5>
              </span>
              <p>I was the Electronics Wizard 🧙‍♂️</p>
              <p>
                West Coast Electronics was a repair shop that fixed computers,
                consoles, and cell phones.
              </p>
            </div>
            <div className={career.companyAlt}></div>
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

const stack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];
