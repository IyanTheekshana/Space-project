<template>
  <main class="home">
    <main-nav></main-nav>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <P class="text"
              >Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!</P
            >
          </div>
        </div>
        <div class="col col-2">
          <button>EXPLORE</button>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="css" scoped>
.home {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("../assets/home/background-home-desktop.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: 100%;
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.col-2 {
  display: flex;
  justify-content: end;
  margin-left: auto;
  align-items: center;
}

.container {
  --my: 9rem;
}

button {
  background-color: var(--white);
  color: var(--black);
  font-family: var(--title-font);
  border: none;
  width: 274px;
  height: 274px;
  border-radius: 50%;
  font-size: 32px;
  letter-spacing: 2px;
  transition: all 0.3s ease-out;
}

button:hover {
  outline: 75px solid rgba(255, 255, 255, 0.1);
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  .home {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      url("../assets/home/background-home-tablet.jpg");
    justify-content: center;
  }

  .col-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    align-self: center;
  }
  .col-1 {
    max-width: 450px;
    text-align: center;
    margin: 0 auto;
  }
  button {
    width: 242px;
    height: 242px;
    text-align: center;
    font-size: 32px;
    margin-top: 5rem;
  }

  button:hover {
    outline: 40px solid rgba(255, 255, 255, 0.1);
  }
}
@media only screen and (max-width: 375px) {
  .home {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      url("../assets/home/background-home-tablet.jpg");
    background-position: bottom;
    justify-content: start;
  }

  button {
    width: 150px;
    height: 150px;
    text-align: center;
    font-size: 20px;
  }

  button:hover {
    outline: 40px solid rgba(255, 255, 255, 0.1);
  }

  .col-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    align-self: center;
  }
  .col-1 {
    max-width: 327px;
  }
}
</style>
