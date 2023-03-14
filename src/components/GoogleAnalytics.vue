<template>
<!--  <div>-->
<!--    &lt;!&ndash; Google tag (gtag.js) &ndash;&gt;-->
<!--    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RZXQRX8XR0"></script>-->
<!--    <script>-->
<!--      window.dataLayer = window.dataLayer || [];-->
<!--      function gtag(){dataLayer.push(arguments);}-->
<!--      gtag('js', new Date());-->

<!--      gtag('config', 'G-RZXQRX8XR0');-->
<!--    </script>-->
<!--  </div>-->
</template>

<script>
// async src="https://www.googletagmanager.com/gtag/js?id=G-RZXQRX8XR0">
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-RZXQRX8XR0');

export default {
  name: "GoogleAnalytics"
}
</script>

<style lang="scss" scoped>

</style>