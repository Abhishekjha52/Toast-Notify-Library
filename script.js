import Toast from './Toast.js';

document.querySelector("button").addEventListener("click", ()=>{
  const toast = new Toast ({
    text: 'Hello',
    // autoClose : 1000,
    // onClose : () => alert("Taost is closed"),
    // autoClose : false,
    // canClose : true
    position : "top-center",
  });
})















// setTimeout(() => {
//     toast.remove()
// }, 1000)

// setTimeout(() => {
//     new Toast({position : "top-right", text : "Second Toast"})
// }, 2000)
// setTimeout(()=>{
//   toast.update({text : "Bye"})
// }, 1000)

