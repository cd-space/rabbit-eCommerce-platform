import { ref} from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  //导航列表的逻辑

  //state 导航列表数据
  const categoryList = ref([]);

  //action 获取导航列表的方法
  const getCategory = async () => {
    const res = await getCategoryAPI();
    // console.log('res', res)
    categoryList.value = res.result;
    // console.log('categoryList', categoryList)
  };

  return{
    categoryList,
    getCategory
  }
});
