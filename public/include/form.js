var form = document.createElement("form")
var span = document.createElement("span")
var input = document.createElement("input")
span.innerHTML = "用户名"
input.type = "text"
input.name = "username"
form.appendChild(span)
form.appendChild(input)
var body = document.getElementById("page_body")
body.appendChild(form)
input.value = "pls input username"
form.action = "/app/test/form"
form.method = "post"
var btn = document.createElement("button")
btn.innerHTML = "submit"
btn.type = "submit"
var file = document.createElement("input")
file.type = "file"
file.name ="f"
form.appendChild(file)
form.enctype = "multipart/form-data"
form.appendChild(btn)
file.submit()

//TypeError: file.submit is not a function

//form.submit()



