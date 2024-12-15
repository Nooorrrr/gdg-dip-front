// src/api/challenges.js
import apiClient from './axios';

// Get all challenges
export function getChallenges() {
  return apiClient.get('challenges/');
}

// Add a new challenge (superuser only)
export function addChallenge(challengeData) {
  return apiClient.post('challenges/add/', challengeData);
}

// Update a challenge (superuser only)
export function updateChallenge(challengeId, updatedData) {
  return apiClient.put(`challenges/update/${challengeId}/`, updatedData);
}

// Delete a challenge (superuser only)
export function deleteChallenge(challengeId) {
  return apiClient.delete(`challenges/delete/${challengeId}/`);
}