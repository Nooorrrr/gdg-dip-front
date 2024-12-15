<template>
  <div class="grid grid-rows-[auto,1fr] grid-cols-[auto,1fr] h-screen font-primary">
    <AdminNavBar></AdminNavBar>
    <Header></Header>
    <div class="p-4">
      <h2 class="text-2xl font-semibold mb-4">User Management</h2>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Username</th>
            <th class="py-2 px-4 border-b">Email</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="py-2 px-4 border-b">{{ user.id }}</td>
            <td class="py-2 px-4 border-b">{{ user.username }}</td>
            <td class="py-2 px-4 border-b">{{ user.email }}</td>
            <td class="py-2 px-4 border-b">
              <button
                @click="deleteUser(user.id)"
                class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import AdminNavBar from "../../components/AdminNavBar.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

// Reactive variables
const users = ref([]);

// Fetch users from the API when the component is mounted
onMounted(async () => {
  const token = localStorage.getItem("authToken"); // Replace with your token retrieval method
  try {
    const response = await axios.get("http://localhost:8000/users/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    users.value = response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

// Function to delete a user
const deleteUser = async (userId) => {
  const token = localStorage.getItem("authToken"); // Replace with your token retrieval method
  try {
    await axios.delete(`http://localhost:8000/users/${userId}/delete/`, {
      //headers: {
        //Authorization: `Token ${token}`,
     // },
    });
    // Remove the user from the list after successful deletion
    users.value = users.value.filter((user) => user.id !== userId);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>