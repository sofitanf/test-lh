export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  return {
    provide: {
      url: (file) => `${config.public.beUrl}${file}`,
    },
  };
});
