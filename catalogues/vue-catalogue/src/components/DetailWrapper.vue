<template>
  <detail :title="content.title" :image="content.image"/>
</template>

<script>
import contentService from '@/services/contentService'
import Detail from '@/components/Detail'

export default {
  name: 'DetailWrapper',
  props: {
    name: {
      type: String,
      default: ''
    },
    content: {
      type: Object,
      default: () => ({
        title: '',
        image: ''
      })
    }
  },
  mounted () {
    const { title, image } = contentService.getSingleData(this.name)

    this.content.title = title
    this.content.image = image
  },
  components: {
    Detail
  }
}

</script>
