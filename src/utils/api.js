const API_URL = 'http://localhost:5000/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: 'An error occurred while processing your request'
    }));
    throw new Error(error.message || 'Network response was not ok');
  }
  return response.json();
};

export const api = {
  // Messages
  sendMessage: async (messageData) => {
    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(messageData),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}; 