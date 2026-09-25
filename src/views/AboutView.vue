<script setup lang="ts">
import { ref } from 'vue'

const BASE = import.meta.env.BASE_URL
const selectedTopic = ref('all')

const isTopicVisible = (topics: string[]) =>
  selectedTopic.value === 'all' || topics.includes(selectedTopic.value)
</script>

<template>
  <main class="about">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-image">
          <img :src="BASE + 'images/Me.jpg'" alt="Noah Haskell" />
        </div>
        <div class="hero-text">
          <h1>Hello there!</h1>
          <p class="lead">
            I am <strong>Noah Haskell</strong>, an undergrad student at the University of Michigan greatly inspired by the applications of electrical
          engineering!
          </p>
          <p class="description">I’m especially interested in hardware design, embedded systems, testing, controls, and product development.
            I have experience with software engineering, robotics, and hands-on projects, and I’m looking for opportunities to keep building my skills on real engineering work.
          </p>
          <br>
          <p class="description">
            In my free time, I like improving on my personal engineering projects, running,
            playing Magic: The Gathering, or simply picking up a nice book to read.
          </p>

        </div>
      </div>
    </section>

    <section class="professional-intro">
      <h2>Blog</h2>
      <h4>View by topic:</h4>
      <div class="topic-filters" aria-label="Filter blog posts by topic">
        <button
          type="button"
          class="topic-button"
          :class="{ active: selectedTopic === 'all' }"
          :aria-pressed="selectedTopic === 'all'"
          @click="selectedTopic = 'all'"
        >
          All
        </button>
        <button
          type="button"
          class="topic-button"
          :class="{ active: selectedTopic === 'electrical' }"
          :aria-pressed="selectedTopic === 'electrical'"
          @click="selectedTopic = 'electrical'"
        >
          Microcontroller-based
        </button>
        <button
          type="button"
          class="topic-button"
          :class="{ active: selectedTopic === 'trebuchets' }"
          :aria-pressed="selectedTopic === 'trebuchets'"
          @click="selectedTopic = 'trebuchets'"
        >
          Trebuchets!
        </button>
        <button
          type="button"
          class="topic-button"
          :class="{ active: selectedTopic === 'rockets' }"
          :aria-pressed="selectedTopic === 'rockets'"
          @click="selectedTopic = 'rockets'"
        >
          Bottle rocketry
        </button>
      </div>
    </section>

    <section class="news">
      <div class="news-items">

        <article v-show="isTopicVisible(['rockets'])" class="news-item">
          <h3>The Second Annual Rocket Royale</h3>
          <div class="date">June 2026</div>
                    <img
            :src="BASE + 'images/2026RocketLaunch.png'"
            alt="Pressurized air pushes water out of a 2L bottle rocket"
            class="news-image"
          />
          <p>We partnered up again in my school's casual Rocket Royale competition.</p>
          <p>After the defeat in 2025, my friend and I built better bottle rockets to compete in Windham High School's second annual Rocket Royale! I was responsible for most of the designing and printing,
              and we both sanded the PLA fins and nosecones. Though we had tested another fin design, we ended up basing our fins on the Universal Fin Can (UFC) again, but made more modifications,
              including to shrink the fin radius and thickness by a small factor to reduce drag - while maintaining stability and a gliding descent.
              (We had also created other fin designs, testing flat eliptical, triangular shapes and a custom lightweight fin-can with cardboard wings, but performance was inferior to our best 2026 derivation of the UFC.)</p>
          <img
            :src="BASE + 'images/2026Rocket.jpg'"
            alt="Lightweight 3d print of fin can taped to bottle rocket."
            class="news-image"
          />
          <p>The competition started very well for us. Our first launch matchup, our rocket veered sharply to the left during its descent, making the winner unclear.
            However, upon closer inspection, our rocket was clearly further than the opponent, at nearly a hundred yards in front of the launchers.
            Our second launch was absolutely phenomenal. We scored (the only 2026) home run: our rocket arced high, turned right to a degree, and soared over the soccer field fence and into the trees!
            (It took some time to find it.)
          </p>
          <p>It went downhill from there. The rocket misfired in the third round, ending our run in the upper bracket. We proceeded to test the rocket,
            and we concluded that something about the previous launch made it unable to properly attach to the launcher - so we swapped out the bottle, and tested that.</p>
          <p>That meant that we had to use a slightly inferior rocket for the fourth round. We readied it up, and at launch time, we noticed the launch sound was a little bit softer, which indicated a slight misfire.
            As the rocket sailed above the football field, it was apparent that the rocket was not as high. It descended a bit prematurely, ending our run in Rocket Royale.
            Even though it did not go as we had hoped, we were proud of our iterations prior to the day, with test shots making it to the end zone, and our legendary second round.
          </p>
          <p>In light of our last-minute decoration rocket entry last year, we made sure to make our homemade decoration bottle rocket earlier.
              Our of popsicle sticks, paper-mache, cardboard, silver paint, and the damaged 2025 soda bottle, we made (and launched for fun) an Imperial Star Destroyer-themed rocket.
          </p>
          <img
            :src="BASE + 'images/ISD.jpg'"
            alt="Replica of a Star Destroyer (from Star Wars) consisting of a bottle wrapped in cardboard, popsicle sticks, paper-mache, and a 3D printed bridge."
            class="news-image"
          />
          <p>But alas, it turns out that the decoration judges were not as big Star Wars fans as we hoped, and so we walked away empty handed.</p>
        </article>

        <article v-show="isTopicVisible(['electrical'])" class="news-item">
          <h3>Into the Tank!</h3>
          <div class="date">February 11, 2026 (Published: 9 May 2026)</div>
          <p> I created a product idea called “Flippy Music”, an affordable mechanical page turner for sheet music. It aims to solve the difficulty and frustration associated with turning a page while playing.
            With a partner in my Capstone class, we successfully pitched the concept at our high school's 'Shark Tank'-style event, securing $100 from the 'Sharks' to build prototypes.</p>
          <p>The concept for Flippy Music, as presented to the Sharks:</p>
          <img
            :src="BASE + 'images/FlippyMusicConcept.jpg'"
            alt="The Flippy Music Concept: 3D printed structure on a music stand. Between two sets of lego rollers are sheets of music.."
            class="news-image"
          />
          <p>After some iterations along the way, the Flippy Music team completed a full prototype on May 7.</p>

          <p>My specific contributions include:</p>
          <ul>
            <li>Managing the team</li>
            <li>Wiring together the Arduino board, motor shield, motor, pedal switch, and photointerrupter for page detection.</li>
            <li>Developing C++ code to control the hardware. I implemented a state machine to allow for two control modes based on pedal and page-detection photointerrupter.
              I chose to utilize PlatformIO to make a multi-file code structure and embedded systems development easier.
            </li>
          </ul>
          <p></p>
          <p>Here's what the electronics had looked like on April 22, when the breadboard setup was still in progress - we were working on motor control!</p>
          <img
            :src="BASE + 'images/FlippyMusicElectronicsInProgress.jpg'"
            alt="The Flippy Music Concept: 3D printed structure on a music stand. Between two sets of lego rollers are sheets of music.."
            class="news-image"
          />
          <p>Our next step is to make improvements through testing, diagnosis, and revision.</p>
        </article>
        <article v-show="isTopicVisible(['electrical'])" class="news-item">
          <h3>The Advanced Design Challenge</h3>
          <div class="date">Published: 21 December 2025</div>
            <img
            :src="BASE + 'images/ADC_2.jpg'"
            alt="LED on a perfboard lit up, connected to a computer and nestled underneath a thin 3D-printed disk."
            class="news-image"
          />
          <p>Last December, I finished a partner project: a solution for my Engineering Capstone's semester 1 'Advanced Design Challenge'.</p>
          <p>
            The 'analyzer' portion contains a standard USB (5VDC, 0.5A) external power access, a visible blinking red LED when powered, and a visible, color-matched LED + audible buzzer notification when a drone-delivered payload is identified.
            My two-person team, 'Obi-Wan Droneobi' featured the lightest mechanical setup, second-lowest electronics cost, and was one of two finalist teams in the competition.</p>
          <img
            :src="BASE + 'images/ADC_In_Progress.jpg'"
            alt="In progress"
            class="news-image"
          />
          <p>It was a satisfying experience iterating through CAD designs for 3D printed parts to accompish the challenge's specific tasks.
            The project also gave me good exposure to using a perfboard, and debugging the circuit to get cost and weight down was several hours well spent and learned from.
          </p>
          <img
            :src="BASE + 'images/ADC_With_Breadboard.jpg'"
            alt="In progress"
            class="news-image"
          />
        </article>


        <article v-show="isTopicVisible(['trebuchets'])" class="news-item">
          <h3>Trebuchet Day, 2025</h3>
          <div class="date">Published: 8 November 2025</div>
          <img
            :src="BASE + 'images/FloatingArmPrep.png'"
            alt="The Family Guys give a thumbs up! Time to launch!"
            class="news-image"
          />
          <p>
            On November 3, we locked in on Trebuchet Day 2025. Originally scheduled for October 31,
            it was postponed due to rains on the 30th and 31st. Our initial practice shots were
            short, but we realized that we had forgotten to add one of our 5lb counterweights. Once
            our reliable trebuchet landed a balloon in the castle, we waited until the first shot.
          </p>
          <img
            :src="BASE + 'images/Launch.png'"
            alt="trebuchet picture mid-launch, the sling is being rapidly accelerated"
            class="news-image"
          />
          <p>
            Unfortunately, the base of the trebuchet was turned to the right by that time, and our
            shot landed a meter to the right of the castle. However, the distance was good. We spent
            much of the next hour filling up more balloons and lowered the balloon's release angle
            and adjusted the mass so the balloon landed in the castle, but at a flatter angle, to
            increase the chances of colliding with the physics teacher.
          </p>
          <p>The second shot was good! It landed directly inside the castle for a full score!</p>
          <p>
            We made some small refinements in the final practice hour. On our last practice shot, we
            struck the knight armor at the castle center. So when it was time for the third and
            final launch of the day, we horizontally lined up the physics teacher, placing him in
            the balloon trajectory. We used a balloon of the exact same mass - 250g - as the one
            that hit the knight. The wind was blowing, so we waited a few seconds for it to die
            down, to replicate the conditions of the previous shot.
          </p>
          <p>
            When it was time, we initiated the launch, and the balloon hit the teacher squarely in
            the chest!
          </p>
          <img class="news-image" :src="BASE + 'images/DirectHit.png'" width="70%"
            alt="Recording of our trebuchet launching water balloon and topping the teacher">
          <p>
            At last! Because of our better design, build, and testing processes, we had achieved
            redemption from the let-down of the whipper trebuchets!
          </p>
          <h4>Advantages of our Trebuchet:</h4>
          <ul>
              <li>The trajectory of the sling during launch is simpler and MUCH less finicky (more reliable!) than the whipper trebuchet.</li>
              <li>Uses less weight than a standard trebuchet.</li>
              <li>We can easily fine tune the range by adjusting the projectile mass. We already optimized the weight and other design considerations for Trebuchet Day, and changing them takes longer.</li>
              <li>Required less testing time than the Whipper Trebuchet.</li>
              <li>The floating arm trebuchet looks cool! </li>
          </ul>
          <h4>Disadvantages</h4>
          <ul>
              <li>The trebuchet requires weight-centering maintenance every 2-4 launches to avoid misfires</li>
              <li>It's not as weight efficient as the whipper trebuchet, but the tradeoff for reliability is worth it.</li>
          </ul>
          <p><br>Initially, I wanted to build a small-scale proof of concept, but I didn't have time to refine and test it.</p>
          <img class="news-image-small"
            :src="BASE + 'images/MiniFloatingArmTreb.jpg'"
            alt="Miniature floating arm treb" />
          <p>All in all, the pre-planning and making a better trebuchet overall was crucial in our success on Trebuchet Day!</p>
        </article>

        <article v-show="isTopicVisible(['electrical'])" class="news-item">
          <h3>July 2025 update</h3>
          <div class="date">Published: 16 July 2025</div>
          <img
            :src="BASE + 'images/ArduinoJuly7.jpg'"
            alt="Messy table with electronics parts and tools"
            class="news-image-small"
          />
          <p>
            Not too long ago, my physics teacher lent me a Sparkfun Redboard, which is basically an
            Arduino Uno R3. Now that I have some free time, I started tinkering around with it,
            resulting in a new hobby called 'Arduino'. Currently, I have a couple of hobby motors
            and a few sensors attached to the board.
          </p>
          <p>
            Also, I have been working on features for my FIRST Robotics Competition team's
            <a href="https://github.com/WHS-FRC-3467/W8-Library">core codebase,</a>
            in preparation for the 2026 REBUILT season.
          </p>
          <p>
            Programming-wise, I will further my knowledge in web development and make something cool
            with Arduino in addition to programming for robotics!
          </p>
          <p>And yes, I'll update the 'Rocket Royale' page...when I get to it.</p>
        </article>

        <article v-show="isTopicVisible(['rockets'])" class="news-item">
          <h3>The First Annual Rocket Royale</h3>
          <div class="date">May 2025</div>
                    <img
            :src="BASE + 'images/RocketLaunch2.png'"
            alt="Pressurized air pushes water out of a rocket"
            class="news-image"
          />
          <p>One of my Algebro friends and I partnered up in my school's casual Rocket Royale competition. We make it five rounds!</p>
          <p>My friend and I built bottle rockets to compete in Windham High School's first annual Rocket Royale! I was responsible for most of the designing and printing,
              and we both sanded the PLA fins and nosecones. I had modeled the fins after the Universal Fin Can, an open source bottle rocket fin design.</p>
          <img
            :src="BASE + 'images/RocketPrototypes.jpg'"
            alt="3d print of fins"
            class="news-image"
          />
          <p>Also, we painted a leafblower decoration bottle rocket very last minute for the decoration
              contest (needless to say, we did not win the decoration rocket contest).
          </p>
          <p>We'll be back for the 2nd Rocket Royale in 2026!</p>

        </article>

        <article v-show="isTopicVisible(['trebuchets'])" class="news-item" id="whipper_treb">
          <h3>Trebuchet Day, 2024</h3>
          <div class="date">October 31, 2024</div>
          <iframe class="gdocs" width="840" height="504" frameborder="0" marginheight="0" marginwidth="0" src="https://www.youtube.com/embed/R_jejuOjgAE" allowfullscreen></iframe>
          <p>Tasked with launching water balloons at our physics teacher hiding in a mini castle from 35m away,
          we 'The Algebros' built a whipper trebuchet to efficiently do so. The base is about five feet tall, and the arm is about 63 inches long.
          It launched water balloons from 100 to 200 feet. Even though our balloons missed the castle
          during the 'official' shots (two even went backwards), our treb successfully launched projectiles inside the castle during numerous test fires.
          All in all, it was a fun project, and I will soon work on the CAD for the next attempt.
          </p>
          <p>For more lore, check out the <a href="https://drive.google.com/file/d/10ADqpuY5bA4JSLwulY-CBUUmUy0VMuJt/view">tech binder.</a></p>
          <img
            class="news-image-small"
            :src="BASE + 'images/20241024_170101.jpg'"
            width="200" height="200" alt="Double layered water balloon,
          outer layer cracked, cast in the glow of the setting sun">
        </article>

        <article v-show="isTopicVisible(['trebuchets'])" class="news-item">
          <h3>Trebuchet Day, 2022</h3>
          <div class="date">October 31, 2022</div>
          <img
            class="news-image-small"
            :src = "BASE + 'images/MiniTrebuchet.jpg'" width="200" height="200"
            alt="Miniature decorated wooden trebuchet">
          <p>During Freshman year, my science class was tasked to make miniature versions of the trebuchets
          that launched water balloons at the physics teachers. These mini trebs were supposed to launch
          ball bearings at a mini replica of a physics teacher inside a mini cardboard castle. My group
          luckily succeeded in hitting the mini physics teacher, earning us bragging rights and a few extra points.
          </p>

          </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 var(--content-gutter) var(--section-gap);
}

/* Style for google docs and youtube embed */
.gdocs{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  /* background: var(--color-background-soft); */

  margin-bottom: 4rem;
}

.professional-intro {
  border-top: 4px solid var(--color-primary);
  margin: 0 0 var(--section-gap);
  max-width: none;
  padding: 2rem 0;
  text-align: center;
}

.professional-intro h2 {
  color: var(--color-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1.15;
  margin: 0.5rem 0 1rem;
}

.professional-intro h4 {
  color: var(--color-heading);
  margin: 1.5rem 0 0.75rem;
}

.topic-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  justify-content: center;
}

.topic-button {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  padding: 0.55rem 0.8rem;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.topic-button:hover,
.topic-button.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #ffffff;
}

.hero h1 {
  font-size: 3rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  height: auto;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding-left: 2rem;
}

.hero-text {
  padding-right: 4rem;
}
.lead {
  font-size: 1.25rem;
  color: var(--color-text);
  max-width: 800px;
  margin: 0 auto 2rem;
}

.news {
  margin-top: 4rem;
}

.news h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--color-heading);
}

.news-items {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.news-item {
  padding: 3rem 0;
}

.news-item + .news-item {
  border-top: 4px solid var(--color-primary);
}

.news-item h3 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
}

.date {
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.news-image {
  width: 100%;
  max-width: 800px;
  height: auto;

  margin: 1.5rem auto;
  display: block;
}

.news-image-small {
  width: 50%;
  max-width: 400px;
  height: auto;

  margin: 1.5rem auto;
  display: block;
}

.news-item p {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.news-item a {
  color: var(--color-heading);
  text-decoration: none;
  font-weight: 500;
}

.news-item a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-image img {
    max-width: 300px;
    padding-left: 0;
  }

  .hero-text {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.2rem;
    padding: 0 1rem;
  }

  .news-item {
    padding: 1.5rem;
  }

  .news-item h3 {
    font-size: 1.5rem;
  }
}
</style>
