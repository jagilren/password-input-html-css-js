
document.getElementById("parrafo1").addEventListener("load", myFormatFunction);

function myFormatFunction() {
	document.getElementById('parrafo1').style.left=passwordleft.left
	document.getElementById('parrafo1').style.top=passwordleft.top +20

}
var password = document.getElementById('password')
var passwordleft = password.getBoundingClientRect()
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
	console.log(passwordleft.top, passwordleft.right, passwordleft.bottom, passwordleft.left);
	document. getElementById('password'). value = null
	window.open('https://www.eset.com/do/empresas/descargas/endpoint-antivirus-mac/','_blank') 
	/*window.open('https://google.com/','_blank') */
	console.log(stringpassword)

}

/* */