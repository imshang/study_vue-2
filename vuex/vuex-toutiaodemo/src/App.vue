<template>
  <!-- app.vue是根组件 -->
   <div id="app">
    <Category></Category>
    <NewList></NewList>
   </div>
 </template>
 <script>
 import Category from './components/category.vue'
 import NewList from './components/new-list.vue'
 
 export default {
   components: {
     Category, NewList
   }
 }
 </script>