<template>
        <div v-for="(student, index) in stuentsList" :key="student.id" class="studentItem">
            <p>{{ index + 1 }}</p>
            <p>{{ student.name }}</p>
            <p>{{ student.averageScore }}</p>
        </div>

</template>

<script>
export default {
    name: 'StudentsItem',
    props: {
        stuentsList: {
            type: Array,
            default: ()=>[]
        },
    },
}
</script>

<style lang="css" scoped>

.studentItem {
    width: 50%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
}
</style>