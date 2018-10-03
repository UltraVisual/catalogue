<template>
  <ul>
    <tile v-for="item in content"
      :key="item.title"
      :title="item.title"
      :image="item.image"
      :link="item.link"
      />
  </ul>
</template>

<script>
import Tile from '@/components/Tile'

export default {
  name: 'Tiles',
  props: {
    content: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    Tile
  }
}
</script>

<style>
 ul {
   list-style: none;
 }
</style>
