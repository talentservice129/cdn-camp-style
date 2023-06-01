

export const sleep  = function<T>(sec: number = 0) : Promise<T>{
    return new Promise((res)=> setTimeout(res, sec * 1000))
}
