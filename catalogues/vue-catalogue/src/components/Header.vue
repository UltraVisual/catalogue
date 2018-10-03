<template>
  <header className="header">
    <h1 className="title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Your Mum'
    }
  }
}
</script>
