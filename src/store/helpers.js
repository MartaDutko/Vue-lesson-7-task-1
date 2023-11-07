export function geTypeFiveSistemCount(score){
    if(score > 9 )return 5
    else if(score > 6)return 4
    else if(score > 2) return 3
    else return 2
}