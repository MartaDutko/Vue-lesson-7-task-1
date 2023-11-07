import { createStore } from "vuex";
import { geTypeFiveSistemCount } from "./helpers";

export default createStore({
  state: {
    studentList: [
      {
        id: Symbol(),
        name: 'Ivan Ivanov',
        averageScore: 10,
      },
      {
        id: Symbol(),
        name: 'Petro Petriv',
        averageScore: 7,
      },
      {
        id: Symbol(),
        name: 'Pavlo Pavliv',
        averageScore: 6,
      },
      {
        id: Symbol(),
        name: 'Oleg Olegiv',
        averageScore: 8,
      },
      {
        id: Symbol(),
        name: 'Semen Semeniv',
        averageScore: 11,
      },
      {
        id: Symbol(),
        name: 'Andriy Andriiv',
        averageScore: 9,
      },
      {
        id: Symbol(),
        name: 'Marsim Maksimov',
        averageScore: 5,
      },
    ],
    categoryOption: [
      {
        id: 1,
        tittle: 'Відмінник',
        minVal: 10,
        maxVal: 12
      },
      {
        id: 2,
        tittle: 'Хорошист',
        minVal: 7,
        maxVal: 9
      },
      {
        id: 3,
        tittle: 'Трійочник',
        minVal: 3,
        maxVal: 6
      },
      {
        id: 4,
        tittle: 'Двійочник',
        minVal: 2,
        maxVal: 1
      },
      {
        id: 5,
        tittle: 'Блатник',
        minVal: 12,
        maxVal: 100
      },
    ],
    typeSistemCount: '12',
    typeCategory: null
  },
  getters: {
    getStudentList: ({ studentList }) => studentList,
    getCategoryOption: ({ categoryOption }) => categoryOption,
    getTypeSistemCount: ({ typeSistemCount }) => typeSistemCount,
    getTypeCategory: ({ typeCategory }) => typeCategory,


    // 
    getStudentsListByTypeSistemCount(state,getters) {
      if (state.typeSistemCount === '12') return getters.getStudentsListByCategory
      else {
        return getters.getStudentsListByCategory.map((student) => {
          return ({
            ...student,
            averageScore: geTypeFiveSistemCount(student.averageScore)
          })
        })

      }
    },
    // 
    getStudentsListByCategory(state) {
      if(state.typeCategory){ 
      let objCategory = state.categoryOption.filter(el => el.id === state.typeCategory)
      return state.studentList.filter(student => 
        student.averageScore >= objCategory[0].minVal 
        && student.averageScore <= objCategory[0].maxVal)
      }
      else return state.studentList
    }

  },
  mutations: {
    getTypeSistemCountInChange(state, val) {
      state.typeSistemCount = val
    },
    getTypeCategoryInChange(state, valId) {
      state.typeCategory = valId
    }
  },
  actions: {
    getTypeSistemCountInChange({ commit }, val) {
      commit('getTypeSistemCountInChange', val)
    },
    getTypeCategoryInChange({ commit }, valId) {
      commit('getTypeCategoryInChange', valId)
    }
  },
  modules: {
  },
});
