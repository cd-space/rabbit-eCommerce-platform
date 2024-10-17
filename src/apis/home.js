import htttpInstance from "@/utils/http";

//获取banner
export function getBannerAPI (){
  return htttpInstance({
    url:'home/banner'
  })
}