function validateForm() {
	var x = document.forms["form1"]["username"].value;
	var y = document.forms["form1"]["password"].value;
	// var codename=/[^0-9a-zA-Z]/;
	var codename = new RegExp("^[A-Za-z0-9]{3,20}$"); // 数字或数字，3-20个字符
	var password = new RegExp("^.{5,30}$");// 6-20个任意字符
	if (x == null || x == "") {
		document.getElementById("valiMessage").innerHTML = "请输入用户名！";
		return false;
	}
	if (!codename.test(x)) {
		document.getElementById("valiMessage").innerHTML = "用户名格式有误！";
		return false;
	}
	if (y == null || y == "") {
		document.getElementById("valiMessage").innerHTML = "请输入密码！";
		return false;
	}
	if (!password.test(y)) {
		document.getElementById("valiMessage").innerHTML = "密码格式有误！";
		return false;
	} else {
		document.getElementById("valiMessage").innerHTML = "";
	}
}