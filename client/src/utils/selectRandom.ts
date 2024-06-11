export const selectRandom = (array:any[]) => {
    const random = Math.round(Math.random())
    const range =  (array.length * random) - 1
    
    return array[range]
}