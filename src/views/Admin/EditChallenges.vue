<template>
  <div class="grid grid-rows-[auto,1fr] grid-cols-[auto,1fr] h-screen font-primary">
    <AdminNavBar></AdminNavBar>
    <Header></Header>
    <div class="relative flex flex-1">
      <div class="relative flex flex-1 rounded-bl-3xl bg-white mt-4">
        <div class="flex flex-col gap-8 flex-1 items-center">
          <h1 class="font-kronaOne">Available Challenges</h1>
          <button
            @click="openAddDialog"
            class="px-4 py-1 md:px-8 md:py-1.5 font-poppins rounded-lg bg-primary-blue text-white border border-primary-blue font-normal hover:bg-white hover:text-primary-blue transition ease-in-out duration-200 text-center"
          >
            Add a challenge
          </button>
          <div class="grid lg:grid-cols-3 gap-6 m-2 mx-6 md:grid-cols-2 sm:grid-cols-1">
            <AdminChallenge
              v-for="challenge in challengeList"
              :key="challenge.id"
              :challenge="challenge"
              @edit="openEditDialog"
              @delete="deleteChallenge"
            ></AdminChallenge>
          </div>


          <!-- Add challenge Dialog Component -->
          <AddDialog
            :is-visible="isAddDialogVisible"
            :challenge="currentChallenge"
            @onSubmit="handleAddSubmit"
            @close="closeAddDialog"
          ></AddDialog>

          <!-- Edit challenge Dialog Component -->
          <EditDialog
            :is-visible="isEditDialogVisible"
            :challenge="currentChallenge"
            @onSubmit="handleEditSubmit"
            @close="closeEditDialog"
          ></EditDialog>
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
import AdminChallenge from "../../components/AdminChallenge.vue";
import AddDialog from "./AddDialog.vue";
import EditDialog from "./EditDialog.vue";

// Reactive variables
const challengeList = ref([]);
const isAddDialogVisible = ref(false);
const isEditDialogVisible = ref(false);
const currentChallenge = ref(null);

// Fetch challenges from the API when the component is mounted
onMounted(async () => {
  const token = localStorage.getItem("authToken"); 
  try {
    const response = await axios.get("http://localhost:8000/challenges/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    challengeList.value = response.data;
  } catch (error) {
    console.error("Error fetching challenges:", error);
  }
});

// Open the add challenge dialog
const openAddDialog = () => {
  currentChallenge.value = null;
  isAddDialogVisible.value = true;
};

// Close the add challenge dialog
const closeAddDialog = () => {
  isAddDialogVisible.value = false;
};

// Handle add challenge submit
const handleAddSubmit = async (challenge) => {
  const token = localStorage.getItem("authToken"); // Replace with your token retrieval method
  try {
    const response = await axios.post("http://localhost:8000/api/challenges/add/", challenge, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    challengeList.value.push(response.data);
    closeAddDialog();
  } catch (error) {
    console.error("Error adding challenge:", error);
  }
};

// Open the edit challenge dialog
const openEditDialog = (challenge) => {
  currentChallenge.value = challenge;
  isEditDialogVisible.value = true;
};

// Close the edit challenge dialog
const closeEditDialog = () => {
  isEditDialogVisible.value = false;
};

// Handle edit challenge submit
const handleEditSubmit = async (challenge) => {
  const token = localStorage.getItem("authToken"); // Replace with your token retrieval method
  try {
    const response = await axios.put(`http://localhost:8000/challenges/update/`, {
      challenge_id: challenge.id,
      title: challenge.title,
      description: challenge.description,
      category: challenge.category,
      resources: challenge.resources,
      difficulty: challenge.difficulty,
    }, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const index = challengeList.value.findIndex((c) => c.id === challenge.id);
    if (index !== -1) {
      challengeList.value[index] = response.data;
    }
    closeEditDialog();
  } catch (error) {
    console.error("Error editing challenge:", error);
  }
};

// Handle delete challenge
const deleteChallenge = async (challengeId) => {
  const token = localStorage.getItem("authToken"); // Replace with your token retrieval method
  try {
    await axios.delete("http://localhost:8000/challenges/delete/", {
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        challenge_id: challengeId,
      },
    });
    challengeList.value = challengeList.value.filter((challenge) => challenge.id !== challengeId);
  } catch (error) {
    console.error("Error deleting challenge:", error);
  }
};

</script>

<style scoped>
/* Add your styles here */
</style>