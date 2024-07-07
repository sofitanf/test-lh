<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
:root {
  /* Black */
  --Black-black-50: #ffffff;
  --Black-black-100: #f5f5f5;
  --Black-black-200: #ededed;
  --Black-black-300: #e0e0e0;
  --Black-black-400: #c2c2c2;
  --Black-black-500: #9e9e9e;
  --Black-black-600: #757575;
  --Black-black-700: #616161;
  --black-black-70020: #61616133;
  --Black-black-800: #404040;
  --Black-black-900: #1f1f1f;
  --Black-black-950: #0a0a0a;
  --black-black-95080: #0a0a0acc;

  /* Text */
  --Text-color-text-neutral-primary: #0a0a0a;
  --Text-color-text-neutral-secondary: #616161;
  --Text-color-text-white-primary: #ffffff;
  --Text-color-text-white-secondary: #e0e0e0;
  --Text-color-text-disabled: #9e9e9e;
  --Text-color-text-primary: #2ca2ae;
  --Text-color-text-danger: #ff4542;
  --Text-color-text-success: #6f9d06;
  --Text-color-text-warning: #e39931;
  --Text-color-text-info: #4176e3;
  --Text-color-text-button-primary: ;
  --Text-color-text-button-secondary-default: #2ca2ae;
  --Text-color-text-button-secondary-hover: #278493;
  --Text-color-text-button-secondary-pressed: #275863;
  --Text-color-text-button-outlined: #0a0a0a;
  --Text-color-text-button-danger: #ffffff;
  --Text-color-text-button-success: #ffffff;
  --Text-color-text-button-warning: #ffffff;
  --Text-color-text-secondary: #2ca2ae;

  /* Border Radius */
  --Border-Radius-border-radius-0: 0rem;
  --Border-Radius-border-radius-050: 0.125rem;
  --Border-Radius-border-radius-100: 0.25rem;
  --Border-Radius-border-radius-150: 0.375rem;
  --Border-Radius-border-radius-200: 0.5rem;
  --Border-Radius-border-radius-300: 0.75rem;
  --Border-Radius-border-radius-400: 1rem;
  --Border-Radius-border-radius-500: 1.25rem;
  --Border-Radius-border-radius-750: 1.875rem;
  --Border-Radius-border-radius-full: 624.9375rem;

  /* Oyster Bay */
  --Oyster-Bay-oysterbay-50: #f0fbfa;
  --Oyster-Bay-oysterbay-100: #d8f4f5;
  --Oyster-Bay-oysterbay-200: #b5e9ec;
  --Oyster-Bay-oysterbay-300: #82d8de;
  --Oyster-Bay-oysterbay-400: #3ab7c2;
  --Oyster-Bay-oysterbay-500: #2ca2ae;
  --oyster-bay-oysterbay-50020: #2ca2ae33;
  --Oyster-Bay-oysterbay-600: #278493;
  --Oyster-Bay-oysterbay-700: #266a78;
  --Oyster-Bay-oysterbay-800: #275863;
  --Oyster-Bay-oysterbay-900: #244b55;
  --Oyster-Bay-oysterbay-950: #133039;
  --Bg-color-bg-button-danger-default: #ff4542;
}




* {
  font-family: Inter;
}
</style>
