<template>
  <main class="crew">
    <main-nav></main-nav>
    <div class="container header-title">
      <h5><span class="dark-text">03</span> SPACE LAUNCH 101</h5>
    </div>
    <tech-details></tech-details>
  </main>
</template>

<script>
import TechDetails from "../components/Technology/TechDetails.vue";
export default {
  components: {
    TechDetails,
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
