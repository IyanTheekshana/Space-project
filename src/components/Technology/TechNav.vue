<template>
  <div class="nav-tech">
    <a href="">1</a>
    <a href="">2</a>
    <a href="">3</a>
  </div>
</template>

<style scoped>
.nav-tech {
  display: block;
}

a {
  color: var(--white);
  font-family: var(--title-font);
  border: 1px solid white;
  text-decoration: none;
  text-align: center;
  font-size: 32px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

a:hover {
  background-color: white;
  color: var(--black);
}

a:not(:last-child) {
  margin-bottom: 1.5rem;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  .nav-tech {
    display: flex;
    gap: 2rem;
  }

  a {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
}
@media only screen and (max-width: 375px) {
  .nav-tech {
    display: flex;
    gap: 2rem;
  }

  a {
    width: 40px;
    height: 40px;

    font-size: 16px;
  }
}
</style>
