function changeImage(box1,box2,box3){
  if(box1.style.opacity=1)
  {
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box1.style.opacity = 0;
  }
 else if (box2.style.opacity = 1)
 {
    box2.style.opacity = 0;
    box1.style.opacity = 0;
    box3.style.opacity = 1;
 }
 else {
    box2.style.opacity = 0;
    box1.style.opacity = 1;
    box3.style.opacity = 0;
 }
}
