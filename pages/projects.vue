<script setup lang="ts">
const { $trpc } = useNuxtApp()

const projects = await $trpc.project.list.query()
</script>

<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <NuxtLink :to="`/projects/${project.id}`">
          {{ project.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
