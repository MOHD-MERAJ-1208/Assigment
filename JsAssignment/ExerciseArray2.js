var ShoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

ShoppingCart.unshift('Meat')
ShoppingCart.push('Sugar')
ShoppingCart.splice(4,1)
ShoppingCart.splice(3,1, 'Green Tea')


console.log(ShoppingCart)

var countries = ['London', 'Japan', 'Germany', 'Canada']

if(countries.includes('India')){
    console.log('India')
}
else{
    countries.push('India')
    console.log(countries)
}
var arr1 = ['HTML', 'CSS', 'JS', 'React']
var arr2 = ['Node', 'Express', 'MongeDB']

var fullStack = arr1.concat(arr2)
console.log(fullStack)
