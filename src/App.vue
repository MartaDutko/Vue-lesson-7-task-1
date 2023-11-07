<template>
<student-list/>
</template>

<script>
import StudentList from './components/StudentList.vue';


export default {
  name: "App",
  components: {
    StudentList
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
