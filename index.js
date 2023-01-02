const error = document.querySelector(".error")
const input__email=document.querySelector(".notify__email")
const confirmation=document.querySelector(".notify__confirm")
const regex=/[A-Za-z0-9]+@[a-z]+.com$/

confirmation.addEventListener('click',()=>{
    const cad=input__email.value.toString()
    if(!regex.test(cad)){
        input__email.style.borderColor='var(--Light-Red)';
        error.style.display='block';
    }
    else{
        input__email.style.borderColor='var(--Pale-Blue)';
        input__email.value=' ';
        error.style.display='none';
    }
})