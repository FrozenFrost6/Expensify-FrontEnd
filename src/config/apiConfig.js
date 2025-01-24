const apiBaseUrl = 'http://localhost:8080';

export const apiConfig = {
    apiBaseUrl: apiBaseUrl,
    apiPaths: {
        expenses: `${apiBaseUrl}/expenses`,
        login: `${apiBaseUrl}/login`
    }
}