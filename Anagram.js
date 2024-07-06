
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

let s= "anagram"
let t= "nagaram"

// Approach 1
// function anagram(){
//     if (str1.split('').sort().join('')===str2.split('').sort().join(''))
//         return true
//     else
//         return false
// }

//Approach2

function anagram(s,t){
    let obj1={}
    let obj2={}
    if(s.length!==t.length){
        return false
    }

    else{
        for(let i=0;i<s.length;i++){
            obj1[s[i]]=(obj1[s[i]]||0)+1
            obj2[t[i]]=(obj2[t[i]]||0)+1

        }
    }
    for(const key in obj1){
        if(obj1[key]!==obj2[key])return false
    }
    return true
}

console.log(anagram('anagram','nagaram'))

