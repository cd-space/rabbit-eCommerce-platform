import htttpInstance from "@/utils/http";

export function getCategoryAPI () {
    return htttpInstance({
      url: '/home/category/head'
    })
  }