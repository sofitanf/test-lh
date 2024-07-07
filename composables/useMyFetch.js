export const useMyFetch = (request, options = {}) => {
  const config = useRuntimeConfig();
  const newOptions = {
    ...options,
    baseURL: config.public.baseURL,
    headers: {
      'x-api-key': config.public.apiKey,
      Accept: 'application/json',
    },
  };
  return useFetch(request, newOptions);
};
