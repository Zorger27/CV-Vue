<template>
  <a class="block" :href="sert.image" title="Certificate..." target="_blank">
    <h3>{{ sert.id }}. {{ sert.title }}</h3>
    <div>Number: <strong>{{ sert.regnumber }}</strong></div>
    <div>Grade: <strong>{{ sert.grade }}</strong></div>
    <div>Exam date: {{ sert.examdate }}</div>
  </a>
</template>

<script>
export default {
  name: "certificate"
}
</script>

<style scoped>

</style>