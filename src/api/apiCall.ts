type TApiCallOptions = {
    url: string;
    method?: 'GET' | 'DELETE' | 'POST' | 'PUT';
    data?: any;
}

export default async function apiCall(options: TApiCallOptions) {
    
    try {
        const response = await fetch(options.url, {
          method: options.method || 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(options.data)
        });
  
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error;
    }
}
