<template>
  <nav class="bg-slate-100 border-gray-200 px-2 sm:px-4 py-2.5 mt-10 sm:w-1/3 lg:w-full">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      </a>
      <div class="flex md:order-2">
        <a
          href="#"
          @click.prevent="scrollTo('home')"
          class="bg-indigo-700 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded"
        >
          Home
        </a>
        <a
          href="#"
          @click.prevent="scrollTo('education')"
          class="bg-indigo-700 hover:bg-indigo-950 text-white font-bold py-2 px-4 ml-2 rounded"
        >
          Education
        </a>
        <a
          href="#"
          @click.prevent="scrollTo('experience')"
          class="bg-indigo-700 hover:bg-indigo-950 text-white font-bold py-2 px-4 ml-2 rounded"
        >
          Experience
        </a>
        <a
          href="#"
          @click.prevent="scrollTo('projects')"
          class="bg-indigo-700 hover:bg-indigo-950 text-white font-bold py-2 px-4 ml-2 rounded"
        >
          Projects
        </a>
        <a
          href="#"
          @click.prevent="scrollTo('contact')"
          class="bg-indigo-700 hover:bg-indigo-950 text-white font-bold py-2 px-4 ml-2 rounded"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>

  <Home ref="home" />
  <Education ref="education" />
  <Experience ref="experience" />
</template>

<script setup>
import { ref } from 'vue'
import Home from './HomeComp.vue'
import Education from './EducationComp.vue'
import Experience from './ExperienceComp.vue'

const home = ref(null)
const education = ref(null)
const experience = ref(null)

const scrollTo = (section) => {
  const sectionRef = { home, education, experience }[section]
  if (sectionRef.value) {
    sectionRef.value.$el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
