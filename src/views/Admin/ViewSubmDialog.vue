<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4">Challenge Details</h2>
      
      <div class="mb-4">
        <p><strong>Name:</strong> {{ challenge.name }}</p>
      </div>
      
      <div class="mb-4">
        <p><strong>Submission Time:</strong> {{ challenge.submissionTime }}</p>
      </div>
      
      <div class="mb-4">
        <p><strong>Demo Video:</strong> 
          <a :href="challenge.demoLink" target="_blank" class="text-blue-500 underline">{{ challenge.demoLink }}</a>
        </p>
      </div>

      <div class="mb-4">
        <p><strong>Description:</strong> {{ challenge.description }}</p>
      </div>

      <div class="mb-4">
        <p><strong>Resources:</strong> 
          <a :href="challenge.resourcesLink" target="_blank" class="text-blue-500 underline">{{ challenge.resourcesLink }}</a>
        </p>
      </div>

      <!-- Close Button -->
      <button @click="closeDialog" class="mt-4 text-red-500">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue';

const props = defineProps({
  challenge: Object,
  isVisible: Boolean,
  onClose: Function
});

const { challenge, isVisible, onClose } = toRefs(props);

const closeDialog = () => {
  window.location.reload();
  onClose();
};
</script>