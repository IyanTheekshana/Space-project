<template>
  <div class="crew-nav">
    <ul class="flex gap">
      <a href="" class="active"></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
    </ul>
  </div>
</template>

<style scoped>
.crew-nav {
  display: flex;
}
a {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.active {
  background-color: var(--white);
}
.gap {
  gap: 1.5rem;
}
@media only screen and (max-width: 375px) {
  .crew-nav {
    justify-content: center;
  }

  .flex {
    flex-direction: row;
  }
}
</style>
