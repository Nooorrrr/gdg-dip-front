<template>
    <div class="grid grid-rows-2 p-2 flex-1">
        <div class="flex flex-col items-center justify-center mt-0 gap-4">
            <h1 class="text-primary-green text-lg font-medium ">Assigned Challenge</h1>
            <Challenge :challenge="challenge" />
        </div>
        <div class="flex flex-col items-center justify-center w-full gap-4">
            <h1 class="text-primary-green text-lg font-medium">Submission Form</h1>
            <!-- Submission Form -->
            <div class="bg-white rounded-lg shadow-md p-4 w-full m-16 mt-0 text-center">
                <form @submit.prevent="submitSolution">
                    <!-- Solution Description -->
                    <div class="mb-4">
                        <label for="description" class="block text-sm font-medium text-gray-700">Solution Description</label>
                        <textarea
                            id="description"
                            v-model="form.description"
                            rows="4"
                            class="mt-1 p-2 block w-full border-primary-green rounded-md shadow-sm focus:border-primary-green focus:ring-primary-green"
                            placeholder="Describe your solution in detail..."
                        ></textarea>
                    </div>

                    <!-- Demo Video -->
                    <div class="mb-4">
                        <label for="demo-video" class="block text-sm font-medium text-gray-700">Demo Video Link</label>
                        <input
                            id="demo-video"
                            type="url"
                            v-model="form.demoVideo"
                            class="mt-1 p-2 block w-full border-primary-green rounded-md shadow-sm focus:border-primary-green focus:ring-primary-green"
                            placeholder="https://www.youtube.com/your-demo-video"
                        />
                    </div>

                    <!-- Resource Links -->
                    <div class="mb-4">
                        <label for="resources" class="block text-sm font-medium text-gray-700">Resource Links</label>
                        <input
                            id="resources"
                            type="text"
                            v-model="form.resources"
                            class="mt-1 p-2 block w-full border-primary-green rounded-md shadow-sm focus:border-primary-green focus:ring-primary-green"
                            placeholder="e.g., GitHub, Figma links, separated by commas"
                        />
                    </div>

                    <!-- Submit Button -->
                    <div class="flex justify-end">
                        <SubmitBtn :handleSubmit="submitSolution" primaryColor="bg-primary-green" hoverColor="bg-green-700" action="Submit solution"></SubmitBtn>
                    </div>
                </form>
            </div>
        </div>
</div>
    
</template>
<script setup>
import Challenge from '../components/Challenge.vue';
import SubmitBtn from '../components/SubmitBtn.vue';
import challenges from '../Controllers/Challenges.controller';
import { ref } from 'vue';




const challenge = ref(challenges[0]);

    // Form State
    const form = ref({
      description: "",
      demoVideo: "",
      resources: "",
    });

    // Submit Solution Method
    const submitSolution = () => {
      // Validate inputs
      if (!form.value.description || !form.value.demoVideo || !form.value.resources) {
        alert("Please fill in all fields.");
        return;
      }

      // Handle form submission logic
      console.log("Solution Submitted:", form.value);

      // Reset the form
      form.value.description = "";
      form.value.demoVideo = "";
      form.value.resources = "";

      alert("Solution submitted successfully!");
    };

</script>