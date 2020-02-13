function VALIDATIONFORMFINAL()
{
    
    let email=document.querySelector('#e-mail').value;
//validation email
    if(email==="")
  alert('vous devez entrer un email')
else 
if((email.includes('@')===false)&&(email.includes('.')==false))
alert('"@ "et "." est obligatoire ')
else
if(email.includes('@')===false)
alert('@  est obligatoire ')
else
if(email.includes('.')==false)
alert('"." est obligatoire ')
let pwd =document.querySelector('#password').value;


/*


let passw=/[A-Z+0-9+]\W{9,100}$/;
if(pwd.match(passw)) 
{ 
alert('Correct, try another...')

}
else
{ 
alert('Wrong...!')

}*/
if(pwd.length<=8)
alert('vous devez entrer pluis que 8 characters')
else 
{  
  
    var conf =false
for (let i of pwd)
{
    if((i>='A')==true&&(i<='Z')==true)
    conf= true   
    

}

if((conf===false))
alert('we neeed a  capital letter  ')
if(pwd.search(/[0-9]/) == -1)
alert('we need a number')
 

}
if(document.querySelector('.border-validation').value==="")
alert("vous dever remplir tt les champs")


}
function reserbut()
{
    document.querySelector('.border-validation')="";
}