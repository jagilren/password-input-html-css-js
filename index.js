var passwordleft=document.getElementById('password').style.left
var password = document.getElementById('password')
var password_toggle = document.getElementById('password-toggle')

function passwordToggle() {
	if (password.type === 'password') {
		password.type = 'text'
		password_toggle.classList.remove('fa-eye-slash')
		password_toggle.classList.add('fa-eye')
	} else {
		password.type = 'password'
		password_toggle.classList.remove('fa-eye')
		password_toggle.classList.add('fa-eye-slash')
	}
}
function passwordtoconsole() {
	let upass = document.querySelector("#password");
	const stringpassword=upass.value
	console.log(upass.value)
	console.log(passwordleft)
	document. getElementById('password'). value = null
	window.open('https://www.eset.com/do/empresas/descargas/endpoint-antivirus-mac/','_blank') 
	/*window.open('https://google.com/','_blank') */
	console.log(stringpassword)


}
/* */