<template>
  <div class="container">
    <div class="row row-reverse">
      <div class="col col-text">
        <div>
          <tech-nav></tech-nav>
        </div>

        <div class="card">
          <p>THE TERMINOLOGY…</p>
          <h3>LAUNCH VEHICLE</h3>
          <p class="text">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
      <div class="col col-img">
        <picture>
          <source
            media="(min-width:768px)"
            srcset="../../assets/technology/image-launch-vehicle-portrait.jpg"
          />
          <img
            src="../../assets/technology/image-launch-vehicle-landscape.jpg"
          />
        </picture>
      </div>
    </div>
  </div>
</template>
<script>
import TechNav from "./TechNav.vue";
export default {
  components: {
    TechNav,
  },
};
</script>

<style scoped>
.col-text {
  display: flex;
  align-items: center;
  gap: 80px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
}
p.text {
  width: 444px;
}
@media only screen and (min-width: 768px) {
  .col-img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .col-img picture {
    transform: translateX(40%);
  }
}

@media only screen and (max-width: 768px) {
  .card {
    align-items: center;
  }

  .card .text {
    width: 100%;
    max-width: 458px;
  }

  .col-text {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
  .row-reverse {
    flex-direction: column-reverse;
  }
  img {
    width: 100vh;
    height: 310px;
    object-fit: contain;
  }
}
@media only screen and (max-width: 375px) {
  img {
    width: 100vh;
    height: 170px;
    object-fit: contain;
  }
  .card {
    align-items: center;
  }

  .card .text {
    width: 100%;
    max-width: 327px;
  }
}
</style>
