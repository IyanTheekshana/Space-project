<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="img-box center">
          <img src="../../assets/destination/image-moon.png" alt="" />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <destination-nav></destination-nav>
          <h2>Moon</h2>
          <p class="text">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr />
          <div class="flex">
            <div class="col">
              <p class="subhead-two">AVG. DISTANCE</p>
              <h4>384,400 km</h4>
            </div>
            <div class="col">
              <p class="subhead-two">Est. travel time</p>
              <h4>3 days</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DestinationNav from "../Destination/DestinationNav.vue";

export default {
  components: {
    DestinationNav,
  },
};
</script>

<style scoped>
.card,
img {
  width: 445px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 45px;
}
.subhead-two {
  margin-bottom: 14px;
}

hr {
  border-color: #383b4b;
}
@media only screen and (min-width: 375px) and (max-width: 768px) {
  .card {
    width: 573px;
  }
  img {
    width: 300px;
  }
}
@media only screen and (max-width: 375px) {
  .card {
    max-width: 327px;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 170px;
  }

  hr {
    width: 90%;
  }
}
</style>
