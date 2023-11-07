<template>
<div class="wrapper">
        <filter-list
        @selectEvaluation="selectEvaluation"
        @selectCategory="selectCategory"
        :categoryOption="getCategoryOption"
    />
    <students-item :stuents-list="getStudentsListByTypeSistemCount" />
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FilterList from './FilterList.vue'
import StudentsItem from './StudentsItem.vue'

export default {
    name: 'StudentList',
    components: { StudentsItem, FilterList },
    computed: {
        ...mapGetters([
            'getStudentList',
            'getCategoryOption',
            'getTypeSistemCount',
            'getStudentsListByTypeSistemCount',
        ]),
    },
    methods: {
        ...mapActions(['getTypeSistemCountInChange', 
        'getTypeCategoryInChange']),

        selectEvaluation(val) {
            this.getTypeSistemCountInChange(val)
        },
        selectCategory(valId) {
            this.getTypeCategoryInChange(valId)
        },
    },
}
</script>

<style lang="css" scoped>
.wrapper{
    width: 80%;
}
</style>