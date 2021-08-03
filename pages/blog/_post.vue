<template>
  <div class="container mx-auto pt-6">
    <nuxt-content :document="posts[0]" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log(params)
    const posts = await $content('blog', params.post).fetch()

    console.log(posts);
    return {
      posts
    }
  }
}
</script>

<style>
  .nuxt-content h1 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>
