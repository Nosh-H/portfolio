type Project = {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  tech: string[]
  link?: string
  repoLink?: string
  image?: string
  date: string
  status: 'completed' | 'in-progress' | 'archived'
}

const projects: Project[] = [
  {
    id: 'p1',
    slug: 'advanced-design-challenge',
    title: 'Advanced Design Challenge',
    description: 'Designed and fabricated a payload analyzer, drone manipulator, and stand.',
    longDescription: `My partner and I designed and fabricated a payload color analyzer, manipulator, and physical platforms. We iterated multiple CAD designs, conducted field tests of 3D prints and the integrated electronics with LEDs and a buzzer. We featured the lightest mechanical setup, second-lowest electronics cost, and were a finalist in the double-elimination tournament.`,
    tech: ['Electrical Engineering', 'Arduino', 'CAD', '3D Printing'],
    repoLink: 'https://github.com/Nosh-H/Advanced-Design-Challenge',
    image: 'images/ADC.jpg',
    date: '2025-12.5',
    status: 'completed',
  },
  {
    id: 'p2',
    slug: 'floating-arm-trebuchet',
    title: 'Floating Arm Trebuchet',
    description:
      'Design, construction, and tuning of an advanced trebuchet build for Trebuchet Day in 2025.',
    longDescription: `Building on lessons learned from previous designs, our team 'Family Guys' created a floating arm trebuchet. This design proved more efficient than traditional trebuchets, requiring less counterweight while maintaining excellent consistency. We successfully achieved our target of hitting the physics teacher with water balloons from 35 meters away!`,
    tech: ['Mechanical Engineering', 'Physics', 'CAD', 'Project Planning'],
    repoLink:
      'https://cad.onshape.com/documents/334cb457e4985dfe232d7340/w/29475255ec789c8a0f500c9a/e/424cba40c6f91765a25cacf3',
    image: 'images/LoadIn.jpg',
    date: '2025-11',
    status: 'completed',
  },
  {
    id: 'p3',
    slug: 'gort-baja',
    title: 'Baja and Gort - FRC Robots',
    description: "Software engineering for FRC Team 3467's robots.",
    longDescription: `As a member of the Windham Windup's (Team 3467) software subteam, I contributed key features to our 2025 robots "Gort" and "Baja". Some of my features include sensor fallback systems for robustness, an extended class to add custom functionality in robot control with an xbox controller, and automated pit testing. The robot successfully competed in the 2025 FIRST Robotics Competition season.`,
    tech: ['Software Engineering', 'Java', 'WPILib & External Libraries'],
    repoLink: 'https://github.com/WHS-FRC-3467/Skip-5.15-Baja',
    image: 'images/baja.JPG',
    date: '2025-04',
    status: 'completed',
  },
  {
    id: 'p4',
    slug: 'whipper-trebuchet',
    title: 'Whipper Trebuchet',
    description:
      'A Greek mathematician-themed whipper trebuchet for launching water balloons at Trebuchet Day in 2024.',
    longDescription: `Our team 'The Algebros' designed and built a whipper trebuchet capable of launching water balloons 100-160 feet. The five-foot-tall base and 63-inch arm were optimized for launching at a castle target from 35 meters. While facing some reliability challenges during official launches, the project provided valuable engineering experience and insights for the next trebuchet.`,
    tech: ['Mechanical Engineering', 'Physics', 'CAD', 'Documentation'],
    link: 'https://www.youtube.com/watch?v=R_jejuOjgAE',
    image: 'images/WhipperTrebuchet.jpg',
    date: '2024-11',
    status: 'completed',
  },
  {
    id: 'p5',
    slug: 'w8-lib',
    title: 'W8 Library - pre-2026 season',
    description:
      'Since its inception in 2024, the W8 Library is a robot code template to accelerate our in-season development process, allowing us to focus more on game and robot-specific features.',
    longDescription: `As a member of the Windham Windup (Team 3467) software subteam, I contributed features including automatic robot path generation, servo motor boilerplate code, and unit testing for mechanisms in addition to reviewing other upgrades. W8 has helped prepare us for the 2026 FIRST Robotics Competition season.`,
    tech: ['Java', 'WPILib', 'Github Projects'],
    repoLink: 'https://github.com/WHS-FRC-3467/W8-Library',
    image: 'images/W8.png',
    date: '2025-12.5',
    status: 'completed',
  },
  {
    id: 'p6',
    slug: 'gpa-calculator',
    title: 'GPA Calculator',
    description:
      'A web-based tool for calculating Grade Point Averages. Includes the grade weighting at my school.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://Nosh-H.github.io/N-N-GPA-Calculator/',
    repoLink: 'https://github.com/Nosh-H/N-N-GPA-Calculator',
    image: 'images/GPACalculator.png',
    date: '2025-03',
    status: 'completed',
  },
]

export default projects
