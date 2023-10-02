<template>
  <v-app>
    <header>
      <v-app-bar color="primary">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <v-icon>mdi-shopping</v-icon>
        <v-app-bar-title class="font-weight-bold">Shopping planner</v-app-bar-title>
        <v-spacer></v-spacer>

        <template v-slot:append>
          <router-link to="/profile" style="text-decoration: none; color: inherit">
            <span>Hi {{ userStore.name }}!</span>
          </router-link>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list color="transparent">
          <router-link to="/" style="text-decoration: none; color: inherit">
            <v-list-item prepend-icon="mdi-shopping" title="Home"></v-list-item>
          </router-link>
          <router-link to="/about" style="text-decoration: none; color: inherit">
            <v-list-item prepend-icon="mdi-information" title="About"></v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </header>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'
import { useUserStore } from './stores/user'

const drawer = ref(false)
const userStore = useUserStore()
</script>

<style>
#app,
body {
  background-color: white;
}
</style>
