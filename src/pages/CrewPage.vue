<template>
  <main class="crew">
    <main-nav></main-nav>
    <div class="container header-title">
      <h5><span class="dark-text">02</span> Meet your crew</h5>
    </div>
    <crew-details></crew-details>
  </main>
</template>

<script>
import CrewDetails from "../components/Crew/CrewDetails.vue";
export default {
  components: {
    CrewDetails,
  },
};
</script>

<style scoped>
.crew {
  background-image: url("../assets/crew/background-crew-desktop.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  .crew {
    background-image: url("../assets/crew/background-crew-tablet.jpg");
    justify-content: start;
  }
}
@media only screen and (max-width: 375px) {
  .crew {
    background-image: url("../assets/crew/background-crew-mobile.jpg");
    background-position: bottom;
    justify-content: start;
    gap: 70px;
  }
}
</style>
