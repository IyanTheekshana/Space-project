<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "space-project",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap");
:root {
  --black: hsl(230, 35%, 7%);
  --light-blue: hsl(231, 77%, 90%);
  --white: hsl(0, 0%, 100%);
  --title-font: "Bellefair", serif;
  --title-font-two: "Barlow Condensed", sans-serif;
  --normal-font: "Barlow", sans-serif;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  font-family: var(--normal-font);
}

h1,
h2,
h3,
h4,
.subhead-one {
  font-family: var(--title-font);
  text-transform: uppercase;
}

h1 {
  font-size: 150px;
}

h2 {
  font-size: 100px;
}

h3 {
  font-size: 56px;
}

h4 {
  font-size: 32px;
}

h5 {
  font-size: 28px;
  letter-spacing: 4.75px;
  font-family: var(--title-font-two);
  font-weight: 100;
  text-transform: uppercase;
}

.subhead-one {
  font-size: 28px;
}

.subhead-two {
  font-size: 14px;
  letter-spacing: 2.35px;
  text-transform: uppercase;
}

.text {
  font-size: 18px;
  font-family: var(--normal-font);
  line-height: 32px;
  color: var(--light-blue);
}

.dark-text {
  color: rgba(255, 255, 255, 0.5);
}

.container {
  --my: 70px;
  width: 80%;
  color: var(--white) !important;
  margin: var(--my) auto;
}

.row {
  display: flex;
}

.container .col {
  flex: 0 1 50%;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  h1 {
    font-size: 150px;
    text-align: center;
  }

  h2 {
    font-size: 100px;
    text-align: center;
  }

  h3 {
    font-size: 40px;
    text-align: center;
  }

  h4 {
    font-size: 32px;
    text-align: center;
  }

  h5 {
    font-size: 20px;
    letter-spacing: 2.7px;
    text-align: center;
  }

  .text {
    font-size: 16px;
    text-align: center;
    line-height: 28px;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3rem;
  }
  .subhead-one {
    font-size: 20px;
    text-align: center;
  }
  .subhead-two {
    text-align: center;
  }
  .container {
    --my: 24px;
  }
  .row .col {
    flex: 0 1 100%;
    justify-content: center;
    align-items: center;
  }

  .header-title {
    position: relative;
  }

  .header-title h5 {
    position: absolute;
    top: -40px;
    left: -10%;
    text-align: left;
  }
}

@media only screen and (max-width: 375px) {
  h1 {
    font-size: 80px;
    text-align: center;
  }

  h2 {
    font-size: 56px;
    text-align: center;
  }

  h3 {
    font-size: 24px;
    text-align: center;
  }

  h4 {
    font-size: 28px;
    text-align: center;
  }

  h5 {
    font-size: 16px;
    letter-spacing: 2.7px;
    text-align: center;
  }

  .row {
    flex-direction: column;
    gap: 3rem;
    margin-top: -10px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .subhead-one {
    font-size: 16px;
    text-align: center;
  }
  .subhead-two {
    text-align: center;
  }
  .text {
    font-size: 15px;
    text-align: center;
    line-height: 25px;
  }
  .container {
    --my: 24px;
  }
  .row .col {
    flex: 0 1 100%;
    justify-content: center;
    align-items: center;
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
}
</style>
