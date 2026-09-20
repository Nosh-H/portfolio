export type Project = {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  skills: string[]
  link?: string
  repoLink?: string
  image?: string
  date: string
  status: 'completed' | 'in-progress' | 'archived'
}

const projects: Project[] = [
  {
    id: 'p1',
    slug: 'platypus',
    title: 'Perry and Platypus - FRC Robot Code',
    description:
      "Software engineering for Team 3467's robots: award-winning 'Perry', and undefeated 'Platypus' (FIRST Robotics Competition).",
    longDescription: `As a leader of the Windham Windup software subteam, I spearheaded features including no-vision fallback shot setpoints (including initial intake code and hub-shot agitation testing), dashboard-adjustable autonomous mode delay to outsmart opponent robots, fuel-in-hopper simulation, the HubState utility class to determine when to shoot or feed balls, and unit testing for mechanisms in addition to reviewing other upgrades. This codebase was built upon our open source W8-Library, which has helped prepare us for the 2026 FIRST Robotics Competition season.`,
    skills: ['Java', 'WPILib', 'Github Projects'],
    repoLink: 'https://github.com/WHS-FRC-3467/Skip-5.16-Perry',
    image: 'images/Perry.png',
    date: '2026-5',
    status: 'completed',
  },
  {
    id: 'p2',
    slug: 'flippy-music',
    title: 'Flippy Music',
    description:
      "Music-stand mounted page turner to automate the flipping of sheet music.",
    longDescription: `I co-developed and presented the concept at a “Shark Tank”-style pitch and Q&A, securing $100 in prototype funding and completing the project on budget using two 3.7V batteries for independent power.
      We designed and prototyped a music-stand mounted mechanical page turner using an Arduino Uno R3, motor shield, salvaged printer motor and axle, and a friction-based flexible turning surface.
      Flippy Music's page-turn consistency was nearly 90% in forward and reverse operation.
    `,
    skills: ['Entrepreneurship', 'PlatformIO', 'Mechanical engineering'],
    repoLink: 'https://github.com/Nosh-H/Flippy-Music',
    image: 'images/Flippy-Music.jpg',
    date: '2026-6',
    status: 'completed',
  },
  {
    id: 'p3',
    slug: 'the-headset',
    title: 'The Headset',
    description:
      "Automated cold compresses to relieve seasonal allergy pain.",
    longDescription: `As a personal project, I'm working on a wearable, button- and remote-controlled prototype that positions and maintains a cold pack compress over either or both eyes, using temperature sensing and motor-driven actuation to address allergy eye pain.
      I made custom 3D printed frame and gearbox components in Onshape and am working on a KiCad PCB shield for an Arduino UNO Q, integrating DRV8874 motor driver carriers, DS18B20 temperature sensors, and screw-terminal connections. The electrcal design was proven to function as intended on a breadboard.
      I developed an onboard web interface for easier user control and temperature/status feedback over a local network. The web interface/control, custom shield, and mechanical design are major upgrades from the 2025 prototype.
    `,
    skills: ['KiCad', 'Motor Drivers', 'C++', 'Gearbox Design'],
    repoLink: 'https://github.com/Nosh-H/uno-q-headset',
    image: 'images/Headset.png',
    date: '2026-9',
    status: 'in-progress',
  },
  {
    id: 'p4',
    slug: 'advanced-design-challenge',
    title: 'Advanced Design Challenge',
    description: 'Designed and fabricated a payload analyzer, drone manipulator, and stand.',
    longDescription: `My partner and I designed and fabricated a payload color analyzer, manipulator, and physical platforms. We iterated multiple CAD designs, conducted field tests of 3D prints and the integrated electronics with LEDs and a buzzer. We featured the lightest mechanical setup, second-lowest electronics cost, and were a finalist in the double-elimination tournament.`,
    skills: ['Electrical Engineering', 'Arduino', 'CAD', '3D Printing'],
    repoLink: 'https://github.com/Nosh-H/Advanced-Design-Challenge',
    image: 'images/ADC.jpg',
    date: '2025-12.5',
    status: 'completed',
  },
  {
    id: 'p5',
    slug: 'floating-arm-trebuchet',
    title: 'Floating Arm Trebuchet',
    description:
      'Design, construction, and tuning of an advanced trebuchet build for Trebuchet Day in 2025.',
    longDescription: `Building on lessons learned from previous designs, our team 'Family Guys' created a floating arm trebuchet. This design proved more efficient than traditional trebuchets, requiring less counterweight (38 lbs) while maintaining excellent consistency. We successfully achieved our target of hitting the physics teacher with water balloons from 35 meters away!`,
    skills: ['Mechanical Engineering', 'Physics', 'CAD', 'Project Planning'],
    repoLink:
      'https://cad.onshape.com/documents/334cb457e4985dfe232d7340/w/29475255ec789c8a0f500c9a/e/424cba40c6f91765a25cacf3',
    image: 'images/LoadIn.jpg',
    date: '2025-11',
    status: 'completed',
  },
  {
    id: 'p6',
    slug: 'gort-baja',
    title: 'Baja and Gort - FRC Robot Code',
    description: "Software engineering for Team 3467's 2025 season robots (FIRST Robotics Competition).",
    longDescription: `As a leader of the Windham Windup's (Team 3467) software subteam, I contributed key features to our 2025 robots "Gort" and "Baja", including sensor fallback systems for robustness, an extended class to add custom functionality in robot control with an xbox controller, and automated pit testing. The robot successfully competed in the 2025 FIRST Robotics Competition season.`,
    skills: ['Software Engineering', 'Java', 'WPILib & External Libraries'],
    repoLink: 'https://github.com/WHS-FRC-3467/Skip-5.15-Baja',
    image: 'images/baja.JPG',
    date: '2025-04',
    status: 'completed',
  },
  {
    id: 'p7',
    slug: 'whipper-trebuchet',
    title: 'Whipper Trebuchet',
    description:
      'A Greek mathematician-themed whipper trebuchet for launching water balloons at Trebuchet Day in 2024.',
    longDescription: `Our team 'The Algebros' designed and built a whipper trebuchet capable of launching water balloons 100-160 feet. The five-foot-tall base and 63-inch arm were optimized for launching at a castle target from 35 meters. While facing some reliability challenges during official launches, the project provided valuable engineering experience and insights for the next trebuchet.`,
    skills: ['Mechanical Engineering', 'Physics', 'CAD', 'Documentation'],
    link: 'https://www.youtube.com/watch?v=R_jejuOjgAE',
    image: 'images/WhipperTrebuchet.jpg',
    date: '2024-11',
    status: 'completed',
  },
]

export default projects
