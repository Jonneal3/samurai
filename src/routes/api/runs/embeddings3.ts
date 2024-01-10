const chatgptEmbeddings3 = async (combinedData11: { variables: any; action: any; }): Promise<any> => {
    const apiUrl = 'https://api.openai.com/v1/embeddings';
    const api_key = combinedData11.variables.botInfo[0].chat_gpt_api_key_fulfillment; // Replace with your actual API key
  
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    };
  
    const requestBody = {
      input: combinedData11.action, // Use combinedData2.task_prompt
      model: 'text-embedding-ada-002', // Replace with the model name
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        const data = await response.json();
        return { error: 'Failed to fetch chat completion', response: data };
      }
  
      const completion = await response.json();
      return completion;
    } catch (error) {
      throw error;
    }
  };
  
  export default chatgptEmbeddings3; // Export the function as the default export