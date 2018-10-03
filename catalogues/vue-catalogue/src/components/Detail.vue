<template>
  <div>
    <h2>Detail: {{ title }}</h2>
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>
