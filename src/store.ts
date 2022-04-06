import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'


const useStore = defineStore('main', {
  state: () => ({
    count: 0,
    test: useLocalStorage('test', 'some data goes here'),
  }),
})

export default useStore
