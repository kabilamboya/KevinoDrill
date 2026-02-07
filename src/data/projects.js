import s1 from "@/assets/images/service1.jpg"
import s2 from "@/assets/images/service3.jpg"
import s3 from "@/assets/images/service4.jpg"
import s4 from "@/assets/images/service5.jpg"
import s5 from "@/assets/images/service6.jpeg"
import s6 from "@/assets/images/service7.jpeg"
import s7 from "@/assets/images/service2.jpg"

const projects = [
  {
    id: 1,
    slug: "steel-tank",
    title: "Steel Tank Fabrication",
    location: "Turkana",
    description: "Custom-designed steel water storage tank fabricated and installed.",
    testimonial: "Strong, durable, and professionally executed.",
    client: "Hydraelmat Ventures",
    image: s1,
    timeline: "6 weeks",
    team: ["Project manager", "Fabrication lead", "Welding crew", "Site technician"],
    challenges: [
      "Remote site logistics and material handling",
      "High ambient temperatures during installation",
    ],
    achievements: [
      "On-time delivery with zero safety incidents",
      "Improved storage capacity and uptime",
    ],
  },
  {
    id: 2,
    slug: "solar-pump",
    title: "Solar Water Pump Installation",
    location: "Homabay County",
    description: "Energy-efficient solar-powered pumping system.",
    testimonial: "Transformed our water accessibility.",
    client: "Pekas Ltd",
    image: s3,
    timeline: "4 weeks",
    team: ["Solar technician", "Electrical engineer", "Site supervisor"],
    challenges: [
      "Optimizing panel placement for maximum yield",
      "Coordinating commissioning with community access",
    ],
    achievements: [
      "Reduced operating costs and improved reliability",
      "Stable flow rate achieved after tuning",
    ],
  },
  {
    id: 3,
    slug: "borehole-casing",
    title: "Borehole Drilling and Casing",
    location: "Kajiado",
    description: "Reinforced casing for long-term structural integrity.",
    testimonial: "Reliable workmanship and attention to detail.",
    client: "Maji Safi Ltd",
    image: s4,
    timeline: "5 weeks",
    team: ["Drilling supervisor", "Geologist", "Rig crew"],
    challenges: [
      "Hard rock formations requiring specialized tooling",
      "Water table variability",
    ],
    achievements: [
      "Stable borehole yield achieved",
      "Casing integrity verified post-installation",
    ],
  },
  {
    id: 4,
    slug: "rainwater-harvesting",
    title: "Rainwater Harvesting System",
    location: "Kitui",
    description: "Capture and store seasonal rainwater.",
    testimonial: "Our community benefits greatly during dry seasons.",
    client: "GreenTech Africa",
    image: s6,
    timeline: "3 weeks",
    team: ["Civil works lead", "Installation team"],
    challenges: [
      "Limited site access during rains",
      "Integrating storage with existing structures",
    ],
    achievements: [
      "Increased storage resilience for dry months",
      "Community training completed",
    ],
  },
  {
    id: 5,
    slug: "water-kiosk",
    title: "Water Kiosk Setup",
    location: "Machakos",
    description: "Affordable, clean water for the community.",
    testimonial: "Improved daily life for hundreds of families.",
    client: "County Water Board",
    image: s5,
    timeline: "4 weeks",
    team: ["Site supervisor", "Plumbing lead", "Community liaison"],
    challenges: [
      "High foot traffic during install",
      "Coordinating kiosk access points",
    ],
    achievements: [
      "Consistent water availability",
      "Reduced queue times after layout optimization",
    ],
  },
  {
    id: 6,
    slug: "pump-maintenance",
    title: "Pump Maintenance and Upgrade",
    location: "Narok",
    description: "Preventive maintenance and pump upgrades.",
    testimonial: "Upgraded pumps run smoothly and reliably.",
    client: "Narok Farmers Union",
    image: s7,
    timeline: "2 weeks",
    team: ["Mechanical technician", "Maintenance crew"],
    challenges: [
      "Minimizing downtime during upgrades",
      "Sourcing compatible components",
    ],
    achievements: [
      "Reduced breakdown frequency",
      "Improved efficiency after upgrades",
    ],
  },
]

export const featuredProject = {
  title: "Hydrological Survey and Drilling",
  location: "Siaya-Uyoma",
  description:
    "Comprehensive hydrological survey followed by precision drilling to provide reliable groundwater access.",
  testimonial: "Kevino Drilling delivered beyond expectations, ensuring clean and consistent water flow.",
  client: "Joash Otieno",
  image: s2,
}

export default projects
