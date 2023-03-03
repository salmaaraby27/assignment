
//   var divleft=0
//  var div=document.getElementById('image')
//   document.addEventListener('keydown' , function(e){
//      console.log(e)
//  if(e.code == 'ArrowRight'){
//      divleft+=60
//      div.style.left = divleft +'px'
    
//  }
 
//   })

 /* 
   var div=document.getElementById('image')
  document.addEventListener('keydown' , function(e){
     console.log(e)
 if(e.code == 'ArrowLeft'){
    divRight +=60
     div.style.right = divRight +'px'
 }else if(e.code == 'ArrowRight'){
    divLeft +=60
     div.style.left = divLeft +'px'
    
 }else if(e.code == 'ArrowUp'){
     divButtom +=60
     div.style.buttom = divButtom +'px'
 }else if(e.code == 'ArrowDown'){
     divTop +=60
     div.style.top = divTop +'px'
 }
  }) 
 */
 


   var img = document.getElementById('image')
   document.addEventListener('mousemove', function(e){
     console.log(e.clientX)
     console.log(e.clientY)
     img.style.left = e.clientX + 'px'
     img.style.top = e.clientY + 'px'
   })



 /* document.addEventListener('click' , function(e){
    var x =Math.round(Math.random()*255)
     var y =Math.round(Math.random()*255)
     var z =Math.round(Math.random()*255)
     document.body.style.backgroundColor= 'rgb(' + x + ',' + y + ',' +z+')'
 }) */

                                                                                                

































































