<template>
  <section class="projects">
    <h2 class="section-title">Featured Projects</h2>

    <!-- Featured Project -->
    <div class="featured-project">
      <img :src="featured.image" alt="Featured project image" class="featured-image" />
      <div class="featured-text">
        <h4>{{ featured.title }}</h4>
        <h3 class="location">{{ featured.location }}</h3>
        <p>{{ featured.description }}</p>
        <blockquote>
          "{{ featured.testimonial }}"
          <footer>- {{ featured.client }}</footer>
        </blockquote>
      </div>
    </div>

     <h3>Completed Projects</h3>

    <!-- Recent Projects Grid -->
    <div class="project-grid">
      <div v-for="project in recentProjects" :key="project.id" class="project-card">
        <img :src="project.image" alt="Project image" class="project-image" />
        <div class="project-text">
          <h3>{{ project.title }}</h3>
          <h4 class="location">{{ project.location }}</h4>
          <p>{{ project.description }}</p>
          <blockquote v-if="project.testimonial">
            "{{ project.testimonial }}"
            <footer>- {{ project.client }}</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

//Updated Script with Image URLs
<script>
import project1 from "@/assets/images/project1.jpg"
import project2 from "@/assets/images/project2.jpg"
import project3 from "@/assets/images/project3.jpg"
import project4 from "@/assets/images/project4.jpg"
import project5 from "@/assets/images/project5.jpg"
import project6 from "@/assets/images/project6.jpg"

export default {
  name: "ProjectsView",
  data() {
    return {
      featured: {
        title: "Hydrological survey and drilling",
        location: "Siaya-Uyoma",
        description: "Comprehensive hydrological survey followed by precision drilling to provide reliable groundwater access. The project ensured sustainable water supply for the community while adhering to environmental best practices.",
        testimonial: "Kevino Drilling delivered beyond expectations, ensuring clean and consistent water flow.",
        client: "Joash Otieno",
        image: project1
      },
      recentProjects: [
        {
          id: 1,
          title: "Steel tank fabrication",
          location: "Turkana",
          description: "Custom-designed steel water storage tank fabricated and installed to withstand harsh climatic conditions. The tank supports large-scale water distribution for rural communities.",
          testimonial: "Strong, durable, and professionally executed — a true asset for our operations.",
          client: "Hydraelmat Ventures",
          image: project2
        },
        {
          id: 2,
          title: "Solar water pump installation",
          location: "Commissioned by Pekas Ltd",
          description: "Deployment of an energy-efficient solar-powered water pumping system. This project reduced operational costs while ensuring continuous water supply in off-grid areas.",
          testimonial: "The solar solution has transformed our water accessibility and lowered energy expenses.",
          client: "Pekas Ltd",
          image: project3
        },
        {
          id: 3,
          title: "Borehole drilling and casing",
          location: "Kajiado",
          description: "Executed borehole drilling with reinforced casing to guarantee long-term structural integrity. The project provided safe and dependable water access for both domestic and agricultural use.",
          testimonial: "Reliable workmanship and attention to detail — we now have a lasting water source.",
          client: "Maji Safi Ltd",
          image: project4
        },
        {
          id: 4,
          title: "Rainwater harvesting system",
          location: "Kitui",
          description: "Designed and installed a rainwater harvesting system with storage tanks and filtration units. The solution maximized seasonal rainfall capture and reduced reliance on external water sources.",
          testimonial: "Innovative and sustainable — our community benefits greatly during dry seasons.",
          client: "GreenTech Africa",
          image: project5
        },
        {
          id: 5,
          title: "Water kiosk setup",
          location: "Machakos",
          description: "Constructed and equipped a modern water kiosk to serve local residents. The kiosk provides affordable, clean water while promoting community health and accessibility.",
          testimonial: "Kevino Drilling’s kiosk setup has improved daily life for hundreds of families.",
          client: "County Water Board",
          image: project5
        },
        {
          id: 6,
          title: "Pump maintenance and upgrade",
          location: "Narok",
          description: "Performed preventive maintenance and upgraded pumping systems to enhance efficiency and extend lifespan. The project ensured uninterrupted water supply for local farmers.",
          testimonial: "Our upgraded pumps run smoothly and reliably thanks to Kevino Drilling’s expertise.",
          client: "Narok Farmers Union",
          image: project6
        }
      ]
    }
  }
}
</script>

//Updated CSS for Fixed Image + Text Layout
<style>
.projects {
  padding: 2rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
}

/* Featured Project */
.featured-project {
  display: flex;
  flex-direction: row;
  background: #eef6ff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.featured-image {
  width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 1.5rem;
}

.featured-text {
  flex: 1;
}

.featured-text h3 {
  margin-bottom: 0.5rem;
  color: #004080;
}

.featured-text h4 {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

/* Project Grid */
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-grid h4 {
  margin-bottom: 0.5rem;
  color: #004080;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-text {
  padding: 1rem;
}

.project-text h4 {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #222;
}

.location {
  font-style: italic;
  color: #555;
  margin-bottom: 0.5rem;
}

blockquote {
  margin-top: 1rem;
  font-style: italic;
  color: #333;
  background: #f0f0f0;
  padding: 0.75rem;
  border-left: 4px solid #004080;
  border-radius: 4px;
}

blockquote footer {
  display: inline-block; /* Shrinks background to fit text */
  background-color: #004080; /* Blue background */
  color: #fded08; /* Mustard yellow text */
  padding: 0.25rem 0.5rem; /* Tight padding */
  border-radius: 4px;
  margin-top: 0.5rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .featured-project {
    flex-direction: column;
  }

  .featured-image {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>