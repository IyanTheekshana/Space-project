<template>
  <div class="container">
    <div class="row col-reverse">
      <div class="col col-text">
        <div class="card">
          <div>
            <h4 class="dark-text">Commander</h4>
            <h3>Douglas Hurley</h3>
            <p class="text">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div>
            <crew-nav></crew-nav>
          </div>
        </div>
      </div>
      <div class="col col-img">
        <div class="img-crew">
          <img src="../../assets/crew/image-douglas-hurley.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CrewNav from "../Crew/CrewNav.vue";
export default {
  components: {
    CrewNav,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 130px;
}
.card p {
  width: 444px;
}
.card h3 {
  padding-block: 14px 22px;
}

.col-text {
  padding-bottom: 70px;
}
/* .col-img {
  position: relative;
}

.img-crew {
  width: 70%;
  display: flex;
  justify-content: center;
  /* margin-bottom: -20px; */
/* position: absolute;
  bottom: 0;
  left: 0;
} */
/* img {
  width: 100%;
} */
.container {
  --my: 0px;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
}
@media only screen and (max-width: 375px) {
  .col-reverse {
    flex-direction: column-reverse;
  }
  .col-img {
    width: 327px;
    height: 223px;
    border-bottom: 0.5px solid var(--light-blue);
  }
  img {
    width: 100%;
    height: 223px;
    object-fit: contain;
  }
}
</style>
