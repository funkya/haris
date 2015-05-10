function login(){
	var usernames = document.getElementById('username').value;
	var passwords = document.getElementById('password').value;

	if (usernames=='admin' && passwords=='admin'){
		alert('selamat datang admin');
		document.location.href = 'admin.html';
		return false;
	}
	else if (usernames==null || usernames=="") {
		alert('username tidak diisi');
	}
	else if (passwords==null || passwords=="") {
		alert('password tidak diisi');
	}
	else if (usernames != 'admin' || passwords != 'admin'){
		alert('username/password salah')
	}
}

