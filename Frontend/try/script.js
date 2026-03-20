let passInput = document.querySelector("#password_input")
let showPass = document.querySelector("#show-pass")

showPass.addEventListener("click", function(){
    if(showPass.classList.contains("ri-eye-line")){
        passInput.type = "text"
        showPass.classList.remove("ri-eye-line")
        showPass.classList.add("ri-eye-off-line")
    } else {
        passInput.type = "password"
        showPass.classList.remove("ri-eye-off-line")
        showPass.classList.add("ri-eye-line")
    }
})