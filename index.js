const obj0 = { a: 1, b: 2, c: 3, f: 6, d: 4, e: 5 }
const obj1 = { a: "Apple", b: "Microsoft", c: "Google"}
const obj2 = { key1: true, key2: false, key3: undefined}
const obj3 = { b: "Microsoft", a: "Apple", c: "Google"}

function listAllProperties(obj) {
    let r1 = []
    let r2 = []

    Object.keys(obj).sort().forEach(function(item, i){
        r1.push(`${item}`)
        r2.push(`${obj[item]}`)
    })

    return [r1, r2]
}

console.log(listAllProperties(obj3));