<script setup lang="ts">
const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="resume-page">
    <header class="page-header">
      <div class="resume-intro">
        <p class="intro">
          Hello! I'm <strong>Noah Haskell</strong>, an Electrical Engineering undergraduate student at the University of Michigan, Ann Arbor.
        </p>
      </div>
      <div class="resume-photo">
        <img :src="BASE + 'images/Myself.png'" alt="Noah Haskell" />
      </div>
    </header>

    <h2 text-align="center">Skills</h2>
    <div id="resume-content" class="resume-grid">
      <section class="resume-section">
        <h4>Circuit Prototyping and Programming</h4>
        <p>
          Can prototype practical systems, using tools ranging from the breadboard, jumper wires and a DC power supply
          to KiCad, Arduino and PlatformIO software (C++ & Python), soldering iron, and Git.
        </p>
      </section>

      <section class="resume-section">
        <h4>Full Stack Web Development</h4>
        <p>
          Work experience in improving applications using Vue.js, PHP (CakePHP), Docker Desktop,
          and competency in project management tools such as Slack, Github Projects, and Azure Boards.
        </p>
      </section>

      <section class="resume-section">
        <h4>Onshape and 3D Printing</h4>
        <p>
          Experience with Onshape from robotics, trebuchets, capstone, and personal projects,
          with skills in part and assembly design, and design for 3D printing.
        </p>
      </section>
    </div>

    <br>
    <h2>Work Experience</h2>
    <div id="resume-content" class="resume-grid">
      <section class="resume-section resume-section-wide">
        <div class="experience-item">
          <div>
            <h3>Software Developer Intern - HydraCor, LLC</h3>
            <p class="muted">- Identified and removed 8 obsolete application plugins by tracing references across a production codebase and resolving broken or dangling integrations.
              Verified changes through systematic testing to maintain functionality.</p>
            <p class="muted">- Refactored Vue and CakePHP pages and modals to improve interface and code structure consistency and UX.</p>
            <p class="muted">- Restored Storybook frontend testing, added 100+ component stories, and added Docker commands to validate frontend components in a container.</p>
          </div>
          <p>Summers 2025 and 2026</p>
        </div>
        <div class="experience-item">
          <div>
            <h3>Research Assistant - Stapleton Research Group, UMass Lowell</h3>
            <p class="muted">- Collaborated in the research group to conduct friction and mechanical tests of fabric tows, documented test procedures,
              and organized and graphed experimental data in Excel.</p>
            <p class="muted">- Improved a C# analysis tool for filtering noise and visualizing tensile stress-strain data by adding graph extrapolation and increasing code robustness.
              Separately used GOM Correlate to support experimental analysis.</p>
          </div>
          <p>Summer 2026</p>
        </div>
        <div class="experience-item">
          <div>
            <h3>Teaching Assistant - Windham High School</h3>
            <p class="muted">- Tutored students in Honors Precalculus and French II through individualized problem-solving guidance and review sessions.</p>
          </div>
          <p>Fall 2024 - 2025</p>
        </div>
      </section>
    </div>

    <br>
    <h2>Education</h2>
    <div id="resume-content" class="resume-grid">
      <section class="resume-section resume-section-wide">
        <div class="experience-item">
          <div>
            <h3>B.S.E in Electrical Engineering - University of Michigan, Ann Arbor</h3>
            <p class="muted">Pursuing an electrical engineering degree at the University of Michigan.
              Courses include Introductory Programming & Data Structures (EECS 280), Intro to Solar Power and Wireless Systems (Engineering 100), Multivariable Calculus
            </p>
          </div>
          <p>Fall 2026 - Present</p>
        </div>
        <div class="experience-item">
          <div>
            <h3>Valedictorian - Windham High School</h3>
            <p class="muted">- National Merit Scholarship</p>
            <p class="muted">- U.S. Marine Corps Scholastic Excellence Award</p>
            <p class="muted">- John Philip Sousa Band Award</p>
            <p class="muted">- Tri State Math League Scholarship</p>
            <p class="muted">Courses include AP Physics C (Mechanics and Electricity & Magnetism), Honors Engineering Capstone, AP Calculus</p>
          </div>
          <p>Fall 2022 - 2026</p>
        </div>
      </section>
    </div>

    <br>
    <h2>Extracurriculars</h2>
    <div id="resume-content" class="resume-grid">
      <section class="resume-section resume-section-wide">
        <div class="experience-item">
          <div>
            <h3>Software Co-Lead - Windham Windup, Team 3467</h3>
            <p class="muted">- Planned programming work, reviewed code, and tracked tasks in GitHub Projects to catch bugs earlier,
              coordinate development, and support team efforts as a whole.</p>
            <p class="muted">- Developed, tested, and debugged autonomous and robot control software; tuned motors, subsystems,
              and PID control parameters using CAN-connected motor controllers and standard FRC software interfaces.</p>
            <p class="muted">- Used an I/O abstraction layer to simulate subsystem behavior before physical construction,
              enabling earlier control logic testing and smoother hardware integration.</p>
            <p class="muted">- Communicated autonomous software design to judges, contributing to the team earning two 2024 Autonomous Awards;
              team qualified for the FIRST World Championship 4 times since 2023.</p>
          </div>
          <p>Fall 2022 - 2026</p>
        </div>
        <div class="experience-item">
          <div>
            <h3>President and Saxophone Section Leader - Windham High School Bands</h3>
            <p class="muted">- Led officer meetings, coordinated events and communications, and taught saxophone sectional rehearsals, mentoring younger musicians.</p>
          </div>
          <p>Fall 2022 - 2026</p>
        </div>
        <div class="experience-item">
          <div>
            <h3>President (grade 12), Vice President (grade 11) - WHS Mu Alpha Theta</h3>
            <p class="muted">- Orchestrated meetings and local tutoring efforts. Led post-competition review. Re-established annual Pi Day celebration, and initiated an elementary school tutoring program.</p>
          </div>
          <p>Fall 2024 - 2026</p>
        </div>
        <div class="experience-item">
          <div>
            <h3>Varsity Mathlete - Windham High School Math Team</h3>
            <p class="muted">- Top league scorer in grades 11-12, led Windham to four 1st place finishes in the Tri-State Mathematics League, and captained the New Hampshire Naturals at ARML 2025.</p>
          </div>
          <p>Fall 2022 - 2026</p>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.resume-page {
  width: min(100%, var(--content-width));
  margin: 0 auto;
  padding: 3.5rem var(--content-gutter) var(--section-gap);
}

.page-header {
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
}

.resume-intro {
  flex: 1;
}

.resume-photo {
  flex: 0 0 auto;
}

.resume-photo img {
  border: 1px solid var(--color-border);
  border-radius: 50%;
  display: block;
  height: 9rem;
  object-fit: cover;
  width: 9rem;
}

.intro {
  color: var(--color-text-light);
  font-size: 1.15rem;
  max-width: 42rem;
}

.resume-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.resume-section {
  border-top: 4px solid var(--color-primary);
  background: var(--color-background-soft);
  padding: 1.5rem;
}

.resume-section-wide {
  grid-column: 1 / -1;
}

h2 {
  color: var(--color-heading);
  font-size: 1.45rem;
  margin-bottom: 1rem;
}

h3 {
  color: var(--color-heading);
  font-size: 1.1rem;
}

.experience-item {
  align-items: center;
  border-top: 1px solid var(--color-border);
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 1rem 0;
}

.experience-item > div {
  min-width: 0;
}

.experience-item > p {
  flex: 0 0 13rem;
  margin: 0;
  min-width: 13rem;
  text-align: right;
}

.experience-item:first-of-type {
  border-top: 0;
}

.muted {
  color: var(--color-text-light);
  margin-top: 0.25rem;
}

@media (min-width: 1024px) {
  .resume-section-wide {
    padding: 2rem;
  }
}

@media (max-width: 700px) {
  .page-header,
  .experience-item {
    align-items: flex-start;
    flex-direction: column;
  }

  .resume-photo {
    align-self: flex-end;
  }

  .experience-item > p {
    flex: 0 1 auto;
    min-width: 0;
    text-align: left;
    width: 100%;
  }

  .resume-grid {
    grid-template-columns: 1fr;
  }
}
</style>
