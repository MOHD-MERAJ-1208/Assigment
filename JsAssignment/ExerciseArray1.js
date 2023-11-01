var EmptyArray=[];
console.log(EmptyArray)

var arr=[1,2,3,4]
console.log(arr)

var ArrayLength=[1,2,3,4,5,6,7,8,9,0]
console.log(ArrayLength.length)

var Mrj = [25,35,45,75,85,95,105,205]

var Firstitem= Mrj[0]
console.log("Firstitemis",  + Firstitem)

var Middleitem = Math.floor(Mrj.length/2)
console.log("Middleitem", + Mrj[Middleitem])

var Lastitem = Mrj[Mrj.length-1]
console.log("Lastitem", + Lastitem)

var MixedDataType=[1, "Amazon", "Microsoft", 0.27, true]
console.log(MixedDataType.length)

var itCompanies =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log(itCompanies)

console.log("First Company :",  itCompanies[0])
console.log("Middle Company :", itCompanies[Math.floor(itCompanies.length/2)])
console.log("Last Company :", itCompanies[itCompanies.length-1])

console.log("No. Of Companies : ",itCompanies.length)

var arr=[]

arr.push(itCompanies[0].toUpperCase())
arr.push(itCompanies[1].toUpperCase())
arr.push(itCompanies[2].toUpperCase())
arr.push(itCompanies[3].toUpperCase())
arr.push(itCompanies[4].toUpperCase())
arr.push(itCompanies[5].toUpperCase())
arr.push(itCompanies[6].toUpperCase())
console.log(arr)

var store = itCompanies.pop()
console.log(itCompanies)
console.log(itCompanies.join(),"and",store, "Are Big IT Companies.")

var store = itCompanies.pop()
console.log(itCompanies)
console.log(itCompanies.join(), "and" , store, "are big IT companies.")
   
    var chComp = 'Microsoft'
for(var i=1; i<=itCompanies.length; i++){
    if(chComp == itCompanies[i]){
        console.log(itCompanies[i])
    }
    else{
        console.log("Company is not found")
    }
}                   
            //  (OR) 

var chComp = 'Microsoft'
if(itCompanies.includes(chComp)){
    console.log(chComp)
}
else{
    console.log("Company not found")
}
