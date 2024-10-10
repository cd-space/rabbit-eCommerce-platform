import htttpInstance from "@/utils/http";



export function getCategory(){
    return htttpInstance({
        url:'home/category/head'
    })
}


