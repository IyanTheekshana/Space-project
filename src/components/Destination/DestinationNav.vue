<template>
  <nav class="destination-nav">
    <ul>
      <li>
        <router-link to="/">moon</router-link>
      </li>
      <li>
        <router-link to="/">mars</router-link>
      </li>
      <li>
        <router-link to="/">europa</router-link>
      </li>
      <li>
        <router-link to="/">titan</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.destination-nav ul {
  display: flex;
  gap: 2rem;
}

.destination-nav ul li {
  display: block;
}

a {
  text-transform: uppercase;
  text-decoration: none;
  color: var(--light-blue);
  position: relative;
}
a:hover,
a.router-link-active {
  color: var(--white);
}

a:hover::after,
a.router-link-active::after {
  content: "";
  width: 100%;
  height: 3px;
  background-color: var(--white);
  position: absolute;
  bottom: -12px;
  left: 0;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  .destination-nav ul {
    justify-content: center;
  }
}
@media only screen and (max-width: 375px) {
}
</style>
