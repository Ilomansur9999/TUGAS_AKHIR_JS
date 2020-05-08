		function buat_login(){
			var elem = document.getElementById("X");
			elem.parentElement.removeChild(elem);
			// ===== kalau  diklik , tombol hilang

			var p = document.createElement("p")
			p.className = "tulisan_login";
			p.innerHTML = "Silahkan Login";
			var element = document.getElementsByTagName("div")[0];
			element.appendChild(p)
			//memunculkan Silahkan Login saat tombol di click

			var form = document.createElement("FORM");
			element.appendChild(form);
			//form 


			var label = document.createElement("label");
			label.innerHTML = "Nama User"
			form.appendChild(label)

			var input_name = document.createElement("input");
			input_name.type = "text";
			input_name.name = "nama";
			input_name.placeholder = "Nama User..";
			input_name.className = "form_login";
			form.appendChild(input_name); 


			// ===========


			var label2 = document.createElement("label");
			label2.innerHTML = "Nomor Handphone";
			form.appendChild(label2);

			var input_hp = document.createElement("input");
			input_hp.type = "text";
			input_hp.name = "nmrhp";
			input_hp.placeholder = "Nomor Handphone.";
			input_hp.className = "form_login";
			form.appendChild(input_hp); 



			// ==========


			var label3 = document.createElement("label");
			label3.innerHTML = "Username"
			form.appendChild(label3);

			var input_username = document.createElement("input");
			input_username.type = "text";
			input_username.name = "username";
			input_username.placeholder = "Username atau email ..";
			input_username.className = "form_login";
			form.appendChild(input_username); 



			// ===========


			var label4 = document.createElement("label");
			label4.innerHTML = "Password";
			form.appendChild(label4);

			var input_password = document.createElement("input");
			input_password.type = "password";
			input_password.name = "password";
			input_password.placeholder = "Password";
			input_password.className = "form_login";
			form.appendChild(input_password); 



			// ===========



			var tombol = document.createElement("input");
			tombol.type = "submit";
			tombol.className = "tombol_login";
			form.appendChild(tombol);
			//tombol submit
	}