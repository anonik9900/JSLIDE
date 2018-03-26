//Devolved By Nicholas Impieri Aka Anonik

//Versione 1.1.3

var image1=new Image()
image1.src="image.jpg"
var image2=new Image()
image2.src="image2.jpg"
var image3=new Image()
image3.src="image3.jpg"
var image4=new Image()
image3.src="image4.jpg"
var image5=new Image()
image3.src="image5.jpg"
var image6=new Image()
image3.src="image6.jpg"
var image7=new Image()
image3.src="image7.jpg"
var image8=new Image()
image3.src="image8.jpg"
var image9=new Image()
image3.src="image9.jpg"
var image10=new Image()
image3.src="image10.jpg"
var image11=new Image()
image3.src="image11.jpg"
var image12=new Image()
image3.src="image12.jpg"
var image13=new Image()
image3.src="image13.jpg"
var image14=new Image()
image3.src="image14.jpg"
var image15=new Image()
image3.src="image15.jpg"



//variable that will increment through the images
var step=1
function slideit(){
//if browser does not support the image object, exit.
//Se il browser non supporta l'immagine esci.
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
if (step<3)
step++
else
step=1
//call function "slideit()" every 2.5 seconds
//chiama la funzione "slideit()" ogni 2.5 secondi

setTimeout("slideit()",2500)
}
slideit()
