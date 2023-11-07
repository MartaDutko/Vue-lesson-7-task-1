<template>
    <div class="filter__block">
        <label
            >Система оцінювання
            <select v-model="evaluationSystem" @change="updateEvaluationSystem">
                <option value="12">12</option>
                <option value="5">5</option>
            </select>
        </label>
        <label
            >Категорія
            <select v-model="category" @change="updateCategory">
                <option v-for="category in categoryOption" :key="category.id" 
                :value="category.id">{{category.tittle}}</option>
            </select>
        </label>
    </div>
</template>

<script>

export default {
    name: 'FilterList',
    props: {
        categoryOption: {
            type: Array,
            default: ()=>[]
        },
    },
    data() {
        return {
            evaluationSystem: null,
            category: null,
        }
    },

    methods: {
        updateEvaluationSystem() {
            this.$emit('selectEvaluation', this.evaluationSystem)
        },
        updateCategory() {
            this.$emit('selectCategory',this.category)
        },
    },
}
</script>

<style lang="css" scoped>
.filter__block {
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 20px;
}
</style>