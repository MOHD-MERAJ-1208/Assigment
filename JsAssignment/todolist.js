let AddNewTask = document.querySelector('input[placeholder="Add New Task"]')
let btn = document.querySelector('#btn')
let div = document.querySelector('.div1')
// console.log(div)


btn.addEventListener('click',(e)=>{
    console.log('hello from button')
    // console.log(Title.value)
    const inputTitleValue = AddNewTask.value;
    console.log(inputTitleValue)
    AddNewTask.value = ''
     div.innerHTML += `
      <p style="color:white">${inputTitleValue}</p>`
})