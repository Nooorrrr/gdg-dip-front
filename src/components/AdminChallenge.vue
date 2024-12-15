<template>
  <div
    class="border-primary-blue border rounded-md flex flex-col gap-8 p-2 hover:shadow transition-all duration-100"
  >
    <div class="flex items-center justify-end">
      <p
        class="text-primary-green bg-secondary-green p-1 rounded font-medium text-sm w-fit items-end"
      >
        {{ challenge.category }}
      </p>
    </div>

    <div class="flex items-center justify-end absolute gap-2">
      <button @click="deleteChallenge(challenge.id)">
        <font-awesome-icon
          :icon="['fas', 'trash']"
          class="w-6 h-6 text-primary-blue text-3xl"
        />
      </button>
      <button @click="openEditDialog">
        <font-awesome-icon
          :icon="['fas', 'pen']"
          class="w-6 h-6 text-primary-blue text-3xl"
        />
      </button>
    </div>
    <h3 class="font-semibold text-center">{{ challenge.title }}</h3>
    <p class="text-center">{{ challenge.description }}</p>
    <!-- <WhiteBtn action="View ressources" class="mx-16 mb-2"></WhiteBtn> -->
    <WhiteBtn action="View submissions" class="mx-16 mb-2"></WhiteBtn>

    <EditDialog
      :is-visible="isEditDialogVisible"
      :challenge="currentchallenge"
      :onSubmit="handleEditSubmit"
      :onClose="closeEditDialog"
    />
  </div>
</template>

<script setup>
import WhiteBtn from "./WhiteBtn.vue";
import BlueBtn from "./BlueBtn.vue";
const props = defineProps(["challenge"]);
import { ref, watch , shallowRef} from "vue";
import axios from "axios";
import EditDialog from "../views/Admin/EditDialog.vue";

// Reactive variables for dialog visibility
const isEditDialogVisible = ref(false);
const currentchallenge = ref({
  title: "",
  category: "",
  description: "",
  resources: "",
});

// Use shallowRef to store the prop locally (avoids reactivity issues)
const initialChallenge = shallowRef(props.challenge);

// Watch for changes on the local shallowRef
watch(
  initialChallenge,
  (newChallenge) => {
    if (newChallenge) {
      currentchallenge.value = { ...newChallenge };
    }
  },
  { immediate: true }
);

// Example function to show how currentchallenge can be used
const openEditDialog = () => {
  console.log("Opening dialog with challenge:", currentchallenge.value);
  isEditDialogVisible.value = true;
};

// Function to delete a challenge
const deleteChallenge = async (challengeId) => {
  const token = localStorage.getItem("authToken"); // Replace with your token retrieval method
  try {
    await axios.delete(`http://localhost:8000/challenges/delete/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        challenge_id: challengeId,
      },
    });
    // Emit an event to notify the parent component to update the challenge list
    alert("challenge deleted", challengeId);
    refreshPage();
  } catch (error) {
    console.error("Error deleting challenge:", error);
  }
};

const handleEditSubmit = async () => {
  const token = localStorage.getItem("authToken"); // Replace with your token retrieval method
  try {
    await axios.put(
      `http://localhost:8000/challenges/update/`,
      {
        challenge_id: currentchallenge.value.id,
        title: currentchallenge.value.title,
        description: currentchallenge.value.description,
        category: currentchallenge.value.category,
        resources: currentchallenge.value.resources,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    alert("Challenge updated successfully!");
    closeEditDialog();
  } catch (error) {
    console.error("Error updating challenge:", error);
    alert("Failed to update challenge. Please try again.");
  }
  refreshPage();
};

// const handleEditSubmit = (challenge) => {
//   console.log(challenge);
//   closeEditDialog();
// };

const closeEditDialog = () => {
  isEditDialogVisible.value = false;
};

const refreshPage = () => {
  window.location.reload();
};
</script>
