<template>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </template>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  