<script setup lang="ts">
const BASE = import.meta.env.BASE_URL
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
            I'm Noah Haskell, a high school student greatly inspired by the applications of electrical
            engineering, computer science, and robotics!
          </p>
          <p class="lead">
            In my free time, I like making coding and engineering projects, running,
            playing Magic: The Gathering, or simply picking up a nice book to read.
          </p>

        </div>
      </div>
    </section>

    <section class="news">
      <h2>News</h2>
      <div class="news-items">
        <article class="news-item">
          <h3>Into the Tank!</h3>
          <div class="date">February 11, 2026 (Published: __ May 2026)</div>
          <p> I created a product idea called “Flippy Music”, an affordable mechanical page turner for sheet music. It aims to solve the difficulty and frustration associated with turning a page while playing.
            With a partner in my Capstone class, we successfully pitched the concept at our high school's 'Shark Tank'-style event, securing $100 from the 'Sharks' to build prototypes.</p>
          <p>The concept for Flippy Music, as presented to the Sharks:</p>
          <img
            :src="BASE + 'images/FlippyMusicConcept.jpg'"
            alt="The Flippy Music Concept: 3D printed structure on a music stand. Between two sets of lego rollers are sheets of music.."
            class="news-image"
          />
          <p>After some iterations along the way, the Flippy Music team completed a full prototype on May 7.</p>

          <p4>My specific contributions include:</p4>
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
        <article class="news-item">
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


        <article class="news-item">
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

        <article class="news-item">
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

        <article class="news-item">
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

        <article class="news-item" id="whipper_treb">
          <h3>Trebuchet Day, 2024</h3>
          <div class="date">October 31, 2024</div>
          <iframe class="gdocs" width="840" height="504" frameborder="0" marginheight="0" marginwidth="0" src="https://www.youtube.com/embed/R_jejuOjgAE" allowfullscreen></iframe>
          <p>Tasked with launching water balloons at our physics teacher hiding in a mini castle from 35m away,
          we 'The Algebros' built a whipper trebuchet to efficiently do so. The base is about five feet tall, and the arm is about 63 inches long.
          It launched water balloons from 100 to 200 feet. Even though our balloons missed the castle
          during the 'official' shots (two even went backwards), our treb successfully launched projectiles inside the castle during numerous test fires.
          All in all, it was a fun project, and I will soon work on the CAD for the next attempt.
          </p>
          <p>For more lore, check out the tech binder:</p>
          <iframe class="gdocs" src="https://docs.google.com/document/d/1DbmVeFThQRjT05UuAJeUSKFJ_ctIGrzOztfoiEpfnbs/edit?tab=t.0#heading=h.k2bg0it5mzu7/edit?embedded-true" width="640" height="718" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <img
            class="news-image-small"
            :src="BASE + 'images/20241024_170101.jpg'"
            width="200" height="200" alt="Double layered water balloon,
          outer layer cracked, cast in the glow of the setting sun">
        </article>

        <article class="news-item">
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
          <p>Check out my reflection for more information:</p>
          <iframe class="gdocs" src="https://docs.google.com/document/d/1FAhwGbnmQz2meFrF-oPjRWaIsR3yMb8UiqvvApIrRVk/edit?tab=t.0/edit?embedded-true" width="640" height="718" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

          </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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
  background: var(--color-background-soft);
  border-radius: 5px;
  margin-bottom: 4rem;
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
  border-radius: 8px;
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
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  border-radius: 5px;
  margin: 1.5rem auto;
  display: block;
}

.news-image-small {
  width: 50%;
  max-width: 400px;
  height: auto;
  border-radius: 5px;
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
