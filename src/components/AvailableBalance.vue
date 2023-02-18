<template>
  <div class="container">
    <header>Available Balance</header>
    <div class="values">
      <p>PHP 2000</p>
      <button type="button">+ CASH IN</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--primary-dark-color);
  border-radius: 0.5rem;
  padding: 1rem;
}
header {
  color: var(--primary-color);
  text-transform: uppercase;
  font-size: 0.7rem;
}
.values {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
p {
  font-size: 2rem;
  margin: 0;
}
button {
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  background-color: #fff;
  color: var(--primary-color);
  font-weight: 600;
  border: 0;
}
</style>
