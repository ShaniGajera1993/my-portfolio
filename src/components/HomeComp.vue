<template>
  <section id="home">
    <div
      class="res bg-slate-100 bg-gradient-to-b from-slate-100 via-slate-400 to-slate-900 mt-10 sm:w-full md:w-full lg:w-full group"
    >
      <div class="res-flex flex justify-center items-center px-4 mx-auto mt-10">
        <div class="flex flex-col justify-center items-start">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-slate-900"
          >
            Hello, I'm <span class="text-slate-900 group-hover:text-black">Shani</span>
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-800"
          >
            I'm a full stack developer who specializes in web development.
          </p>
        </div>
        <div class="flex items-center px-2 py-2">
          <img
            class="group-hover:scale-105 transition-all px-2 py-2 duration-500 cursor-pointer rounded"
            src="../assets/mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </div>
    <div class="absolute left-0 bottom-0 w-full hidden md:block">
      <svg x="0px" y="0px" viewBox="0 198.5 1920 300" fill="rgb(241 245 249)">
        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300"></polygon>
      </svg>
    </div>
  </section>
</template>
<style scoped>
@media screen and (max-width: 375px) {
  .res {
    max-width: 375px;
    min-width: 375px;
  }
}
</style>
