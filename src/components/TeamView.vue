<template>
  <div
    class="border-primary-blue border rounded-md flex flex-col gap-8 p-3 hover:shadow transition-all duration-100"
  >
    <h3 class="font-semibold text-center">{{ team.teamName }}</h3>
    <p class="text-center">Team lead: {{ team.teamLead }}</p>
    <p class="text-center">challenge: {{ team.challenge }}</p>
    <div class="flex items-center gap-2">
      <WhiteBtn action="Assign challenge" class="mb-2" @click="openEditDialog"></WhiteBtn>
      <WhiteBtn action="View submission" class="mb-2" @click="openDialog"></WhiteBtn>
      <AssignDialog
      :is-visible="isEditDialogVisible"
      :challenge="currentchallenge"
      @onSubmit="handleEditSubmit"
      @onClose="closeEditDialog"
    />

    <ViewSubmDialog
      :isVisible="isDialogVisible" 
      :challenge="selectedChallenge" 
      @onClose="closeDialog"
    />
    </div>
  </div>
</template>

<script setup>
import WhiteBtn from "./WhiteBtn.vue";
import BlueBtn from "./BlueBtn.vue";
defineProps(["team"]);

import { ref } from "vue";
import AssignDialog from "../views/Admin/AssignDialog.vue";

const isEditDialogVisible = ref(false);
const currentchallenge = ref({ title: "" });



const openEditDialog = () => {
  currentchallenge.value = { title: "" }; // Example
  isEditDialogVisible.value = true;
};

const handleEditSubmit = (challenge) => {
  // Handle edit challenge submission
  console.log(challenge);
  closeEditDialog();
};

const closeEditDialog = () => {
  isEditDialogVisible.value = false;
  window.location.reload();
};

import ViewSubmDialog from "../views/Admin/ViewSubmDialog.vue";

const isDialogVisible = ref(false);
const selectedChallenge = ref({
  name: "Sample Challenge",
  submissionTime: "2024-12-13 10:00 AM",
  demoLink: "https://example.com/demo",
  description: "A description of the challenge.",
  resourcesLink: "https://example.com/resources"
});

const openDialog = () => {
  isDialogVisible.value = true;
};

const closeDialog = () => {
  isDialogVisible.value = false;
};
</script>
