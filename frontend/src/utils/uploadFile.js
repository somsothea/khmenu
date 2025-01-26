// utils/uploadFile.js

import axiosInstance from '@/utils/axios.js';

/**
 * Upload a single file to the server.
 * @param {File} file - The file to upload.
 * @returns {Promise} - A promise that resolves to the server response.
 */
export async function uploadFile(file) {
  if (!file) {
    throw new Error('No file provided for upload.');
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axiosInstance.post('/files/upload-single', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error uploading file:', error.response?.data || error.message);
    throw error;
  }
}
