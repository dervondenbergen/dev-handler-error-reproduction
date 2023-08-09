<template>
  <div>
    <h1>Nuxt Style</h1>
    <ul>
      <li><a href="/route1/defined">→ /route1/defined</a> <span>Working</span></li>
      <li><a href="/route2/as/many/parts/as/one/wants">→ /route2/[...parts]</a> <span>Working</span></li>
      <li><a href="/devRoute1/defined">→ /devRoute1/defined</a> <span>Working <i>in Dev mode</i></span></li>
      <li><a href="/devRoute2/custom">→ /devRoute2/[singlepart]</a> <mark>Not Working</mark></li>
      <li><a href="/devRoute4/as/many/parts/as/one/wants">→ /devRoute4/[...parts]</a> <mark>Not Working</mark></li>
    </ul>
    <h1>Vue Router Style</h1>
    <ul>
      <li><a href="/devRoute3/customvue">→ /devRoute3/:singlepart</a> <mark>Not Working</mark></li>
      <li><a href="/devRoute5/as/many/parts/as/one/wants">→ /devRoute5/:parts(.*)*</a> <mark>Not Working</mark></li>
    </ul>
  </div>
</template>
