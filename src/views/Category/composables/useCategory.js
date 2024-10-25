//封装分类数据业务相关代码

import { getTopCategoryAPI } from "@/apis/catagory";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  //获取分类数据
  const categoryData = ref({});
  const route = useRoute();
  const getCatagory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => {
    getCatagory();
  });

  //目标：路由参数变化的时候 可以把分类接口重新发送
  onBeforeRouteUpdate((to) => {
    // console.log('路由变化了')
    //存在问题：使用最新的路由参数请求最新的分类数据，getCatagory()存在滞后性
    getCatagory(to.params.id);
    console.log(to);
  });

  return {
    categoryData,
  };
}
