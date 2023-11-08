let Title = document.querySelector('input[placeholder="Title"]')
let Desc = document.querySelector('input[placeholder="Desc"]')
let btn = document.querySelector('#btn')
let div = document.querySelector('.div1')
// console.log(div)


btn.addEventListener('click',(e)=>{
    console.log('hello from button')
    // console.log(Title.value)
    const inputTitleValue = Title.value;
    const inputDescValue = Desc.value;
    console.log(inputTitleValue,inputDescValue)
    Title.value = ''
    Desc.value = ''
     div.innerHTML = `
      <p>${inputTitleValue}</p>
      <p>${inputDescValue}</p>
      <button>delete</button>
      <button>edit</button>`
})