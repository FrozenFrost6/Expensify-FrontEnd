const apiBaseUrl = 'http://localhost:8080';

const apiConfig = {
    apiBaseUrl: apiBaseUrl,
    apiPaths: {
        expenses: `${apiBaseUrl}/expenses`,
        login: `${apiBaseUrl}/login`
    }
}


export default apiConfig;