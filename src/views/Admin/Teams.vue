<template>
  <div class="grid grid-rows-[auto,1fr] grid-cols-[auto,1fr] h-screen font-primary">
    <AdminNavBar></AdminNavBar>
    <Header></Header>
    <div class="relative flex flex-1">
      <div class="relative flex flex-1 rounded-bl-3xl bg-white mt-4">
        <div class="flex flex-col gap-8 flex-1 items-center">
          <h1 class="font-kronaOne">Teams</h1>
          <div class="grid lg:grid-cols-3 gap-6 mx-6 md:grid-cols-2 sm:grid-cols-1">
            <TeamView
              v-for="team in teams"
              :key="team.id"
              :team="team"
            ></TeamView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import AdminNavBar from "../../components/AdminNavBar.vue";
import Header from "../../components/Header.vue";
import TeamView from "../../components/TeamView.vue";

// Reactive variables
const teams = ref([]);

// Fetch teams from the API when the component is mounted
onMounted(async () => {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get("http://localhost:8000/teams/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    teams.value = response.data;
  } catch (error) {
    console.error("Error fetching teams:", error);
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>