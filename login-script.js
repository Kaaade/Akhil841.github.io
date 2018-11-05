function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.pswrd.value == "devils-night")
  {
    window.open('devils-night.html')/*opens the target page while Id & password matches*/
  }
  if(form.pswrd.value == "d12-world") {
    window.open('d-12-world.html')
  }
 else
 {
   window.open('index.html')
  }
}
