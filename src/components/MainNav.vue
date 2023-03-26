<template>
  <header class="primary-header">
    <div>
      <img src="../assets/shared/logo.svg" alt="" class="logo" />
    </div>
    <button
      class="mobile-nav-toggle"
      :aria-expanded="isVisible"
      @click="onToggleMenu"
    >
      <span class="sr-only">Menu</span>
    </button>
    <nav>
      <ul
        id="primary-navigation"
        class="primary-navigation flex"
        :class="{ active: isVisible }"
      >
        <li class="active">
          <router-link to="/" class="nav-link">
            <span aria-hidden="true">00</span>Home</router-link
          >
        </li>
        <li>
          <router-link to="/destination" class="nav-link">
            <span aria-hidden="true">01</span>Destination</router-link
          >
        </li>
        <li>
          <router-link to="/crew" class="nav-link">
            <span aria-hidden="true">02</span>Crew</router-link
          >
        </li>
        <li>
          <router-link to="/tech" class="nav-link">
            <span aria-hidden="true">03</span>Tecnology</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    onToggleMenu() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  gap: var(--gap, 3rem);
}

.primary-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 3rem;
  gap: var(--gap, 3rem);
}

.primary-navigation {
  list-style: none;
  padding: 0;
  margin: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1rem);
  padding-block: 2.5rem;
  padding-inline: 11rem;
  /* padding-inline: clamp(3rem, 15rem, 10rem); */
}

/* .router-link-active {
    border-bottom: 4px solid white;
  } */

.nav-link > [aria-hidden="true"] {
  font-weight: 700;
  margin-inline-end: 0.75em;
}

.logo {
  margin: 3rem;
}

.primary-navigation.active {
  transform: translateX(0%);
}

.mobile-nav-toggle {
  display: none;
}

.nav-link {
  display: block;
  font-family: var(--normal-font);
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-size: 16px;
  letter-spacing: 2.7px;
  position: relative;
}

a.nav-link:hover::after,
a.router-link-active::after {
  content: "";
  width: 100%;
  height: 3px;
  background-color: var(--white);
  position: absolute;
  bottom: -42px;
  left: 0;
}

.sr-only {
  overflow: hidden;
  visibility: hidden;
}

.primary-navigation li {
  text-decoration: none;
  color: white;
}

@media only screen and (min-width: 375px) and (max-width: 768px) {
  .nav-link > span[aria-hidden] {
    display: none;
  }

  .primary-navigation {
    list-style: none;
    padding: 0;
    margin: 0;
    background: transparent;
    backdrop-filter: blur(1rem);
    padding-block: 2rem 4rem;
    padding-inline: clamp(2rem, 1vw, 5rem);
  }
  .nav-link {
    font-size: 14px;
    letter-spacing: 2.36px;
  }
}

@media only screen and (max-width: 375px) {
  .primary-header {
    align-items: center;
    justify-content: space-between;
    margin-block: 0;
  }
  .primary-navigation {
    --gap: 2em;
    position: fixed;
    inset: 0 0 0 30%;
    flex-direction: column;
    padding: 10rem 2em;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 350ms ease-in;
  }
  .primary-navigation {
    backdrop-filter: blur(1.5rem);
    align-items: start;
    justify-content: start;
  }

  .mobile-nav-toggle {
    display: block;
    position: absolute;
    background-color: transparent;
    background: url("../assets/shared/icon-hamburger.svg");
    background-repeat: no-repeat;
    background-position: center;
    border: 0;
    width: 2rem;
    aspect-ratio: 1;
    top: 3.5rem;
    right: 2rem;
    z-index: 9999;
  }
  .mobile-nav-toggle[aria-expanded="true"] {
    background: url("../assets/shared/icon-close.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  .nav-link:hover::after,
  .router-link-active:hover::after {
    content: "";
    width: 3px;
    height: 100%;
    background-color: var(--white);
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 100px;
  }
}
</style>
