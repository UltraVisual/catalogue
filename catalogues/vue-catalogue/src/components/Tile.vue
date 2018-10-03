<template>
  <li>
    <h2>{{ title }}</h2>
    <router-link :to="link">
      <img :alt="title" :src="image" />
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
