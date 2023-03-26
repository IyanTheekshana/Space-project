<template>
  <main class="destination">
    <main-nav></main-nav>
    <div class="container header-title">
      <h5><span class="dark-text">01</span> Pick your destination</h5>
    </div>
    <destination-details></destination-details>
  </main>
</template>

<script>
import DestinationDetails from "../components/Destination/DestinationDetails.vue";
export default {
  components: {
    DestinationDetails,
  },
};
</script>

<style scoped>
.destination {
  background-image: url("../assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  .destination {
    background-image: url("../assets/destination/background-destination-tablet.jpg");
  }
}
@media only screen and (max-width: 375px) {
  .destination {
    background-image: url("../assets/destination/background-destination-mobile.jpg");
    background-position: bottom;
  }
}
</style>
