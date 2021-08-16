<template>
  <div>
    <!-- render blog posts -->
    <h1>{{project.fields.title}}</h1>
    <p>{{project.fields.intro}}</p>
    <img :src="project.fields.image.fields.file.url" alt="test">
  </div>
</template>

<script>
  const contentful = require('contentful')

  const config = {
    space: 'sa97anny452q',
    accessToken: 'LA9etq8ahCr7Fnlc7Lcabd8SjFDPmEHTAwkEwwdelLI'
  }

  const client = contentful.createClient(config)


  export default {
    async asyncData({params}) {
      const projects = await client.getEntries({
        'fields.slug': params.slug,
        'content_type': 'project'
      });

      return {
        project: projects.items[0]
      }
    }
  }
</script>
