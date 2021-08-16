<template>
  <section class="container px-6 py-4 mx-auto">
    <div class="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">
      <!-- Card 1 -->
      <div v-for="project in projects" :key="project.id" class="flex p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
        <NuxtLink :to="'/projects/' + project.fields.slug">
          <img alt="mountain" class="w-45 rounded-md border-2 border-gray-300" :src="project.fields.image.fields.file.url" />
          <div id="body" class="flex flex-col ml-5 pt-5">
              <h4 id="name" class="text-xl font-semibold mb-2">{{ project.fields.title }}</h4>
              <p id="job" class="text-gray-800 mt-2">{{ project.fields.intro }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script>
  const contentful = require('contentful')

  const config = {
    space: 'sa97anny452q',
    accessToken: 'LA9etq8ahCr7Fnlc7Lcabd8SjFDPmEHTAwkEwwdelLI'
  }

  const client = contentful.createClient(config)


  export default {
    // `env` is available in the context object
    async asyncData () {
      const projects = await client.getEntries();

      return {
        projects: projects.items
      }
    }
  }
</script>
