import apiRequest from "./apiRequest";


export const reviewloader =  async ({params}) => {
    const res = await apiRequest("/reviews/" + params.majorName)
    // console.log(params.majorName)
    // console.log(res.data)
    return res.data
}