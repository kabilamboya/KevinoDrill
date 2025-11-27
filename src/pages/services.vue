<template>
  <section class="services">
    <h2 class="section-title">Our Services</h2>

    <!-- Alternating service sections -->
    <div
      v-for="(service, index) in services"
      :key="service.id"
      class="service-section"
      :class="{ reverse: index % 2 !== 0 }"
    >
      <!-- Image side -->
      <div class="service-image">
        <img :src="service.image" :alt="service.title" />
      </div>

      <!-- Text side -->
      <div class="service-content">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>

    <!-- Why Choose Us -->
    <section class="why-choose-us">
          <h2>Why choose us</h2>
      <ul>
        <li v-for="reason in reasons" :key="reason.id">
          <h3>{{ reason.title }}</h3>
          <p>{{ reason.description }}</p>
        </li>
      </ul>
    </section>

    <!-- Estimate -->
    <section class="estimate">
      <h2>Talk to us anytime</h2>
      <button @click="openWhatsApp">Through WhatsApp</button>
    </section>
  </section>
</template>

<script>
import project1 from "@/assets/images/project1.jpg"
import project2 from "@/assets/images/project2.jpg"
import project4 from "@/assets/images/project4.jpg"
import project6 from "@/assets/images/project6.jpg"

export default {
  name: "ServicesView",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Drilling Services",
          description:
            "Kevino Drilling specializes in borehole drilling, utilizing advanced equipment and expertise to access underground water sources.
            Kevino Drilling specializes in borehole drilling, utilizing advanced equipment and expertise to access underground water sources. Whether for residential, commercial, or agricultural purposes, our borehole drilling services ensure reliable access to clean water, tailored to meet the specific needs of our clients.",
          image: project2
        },
        {
          id: 2,
          title: "Hydrological Survey",
          description:
            "Explore the depth of our expertise through hydrological survey services, revealing invaluable insights for your projects.
            Explore the depth of our expertise through Kevino Drilling’s hydrological survey services. We utilize advanced techniques to reveal invaluable insights, providing precise solutions for your water-related projects.",
          image: project4
        },
        {
          id: 3,
          title: "Fabrication of Water Tower Steel Tank",
          description:
            "Our water tower tanks provide robust and reliable storage solutions for communities and industries.
            Our water tower tanks provide robust and reliable storage solutions for communities, industries, and agricultural operations. They are designed and built to withstand environmental factors and ensure efficient water distribution, contributing to sustainable water management practices.",
          image: project6
        },
        {
          id: 4,
          title: "Installation of Solar Pump",
          description:
            "We specialize in solar water pump installation, harnessing renewable energy for sustainable solutions.
            At Kevino Drilling, we also specialize in solar water pump installation, harnessing renewable energy to provide sustainable and efficient water solutions for your projects.",
          image: project1
        }
      ],
      reasons: [
        {
          id: 1,
          title: "Qualified Experts",
          description: "Our team brings extensive experience to every project."
        },
        {
          id: 2,
          title: "Quality Workmanship",
          description: "We ensure every project reflects the highest standards."
        },
        {
          id: 3,
          title: "Quality Professionals",
          description:
            "Dedicated professionals passionate about delivering expertise."
        }
      ]
    };
  },
  methods: {
    learnMore() {
      alert("Redirecting to detailed services page...");
    },
    getEstimate() {
      alert("Opening free estimate form...");
    },
    openWhatsApp() {
      window.open("https://wa.me/254722146077", "_blank");
    }
  }
};
</script>

<style scoped>
.services {
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
}

/* Alternating service layout */
.service-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem 0;
  padding-top: 30px;
}

.service-section.reverse {
  flex-direction: row-reverse;
}

.service-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;            /* uniform height for all items */
  overflow: hidden;         /* hide cropped parts */
  border-radius: 10px;
}

.service-image img {
  width: 100%;
  height: 100%;             /* fill the container */
  object-fit: cover;        /* crop while preserving aspect ratio */
  object-position: center;  /* change to top / bottom / 20% 30% to control crop */
  transition: transform 0.3s ease;
  display: block;
}

.service-image img:hover {
  transform: scale(1.05);
}

.service-content {
  flex: 1;
}
.service-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}
.service-content p {
  line-height: 1.5;
  color: #555;
}

/* Mobile stacking */
@media (max-width: 768px) {
  .service-section,
  .service-section.reverse {
    flex-direction: column;
    text-align: center;
  }
  .service-image,
  .service-content {
    width: 100%;
  }
}

.learn-more,
.estimate {
  text-align: center;
  margin-top: 2rem;
}

button {
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #0077cc;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #005fa3;
}
</style>
