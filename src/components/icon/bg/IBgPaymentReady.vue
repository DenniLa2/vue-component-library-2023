<template>
  <svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      class="bg-fill"
      y="4"
      width="96"
      height="96"
      rx="20"
      fill="#F6F7F8"
    />

    <path
      class="icon-stroke"
      d="M56 50V42C56 39.7909 54.2091 38 52 38H36C33.7909 38 32 39.7909 32 42V60C32 63.3137 34.6863 66 38 66H60"
      stroke="#39465B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      class="icon-stroke"
      d="M56 50H65.6863C65.8595 50 66 50.1405 66 50.3137V61C66 63.7614 63.7614 66 61 66V66C58.2386 66 56 63.7614 56 61V50Z"
      stroke="#39465B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      class="icon-stroke"
      d="M38 46H50"
      stroke="#39465B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      class="icon-stroke"
      d="M38 54H50"
      stroke="#39465B"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <circle
      class="badge-circle"
      cx="79.9994"
      cy="20"
      r="16.6667"
      fill="#9AC777"
      stroke="white"
      stroke-width="6.66667"
    />

    <path
      class="chevron-fill"
      d="M77.3327 27.2267L70.666 20.56L72.546 18.68L77.3327 23.4533L87.4527 13.3333L89.3327 15.2267L77.3327 27.2267Z"
      fill="white"
    />
  </svg>
</template>


<style scoped lang="scss">

.bg-fill {
  fill: var(--ui-selected);
}

.icon-stroke {
  stroke: var(--icon-primary);
}

.badge-circle {
  stroke: var(--icon-contrast);
  fill: var(--ui-success);
}

.chevron-fill {
  fill: var(--icon-contrast)
}

</style>
