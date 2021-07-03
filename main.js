canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var images_array=["mars.jpg","mars_3.jpg","mars_4.jpg","mars_5.jpg","mars_2.jpg"];

random_number=Math.floor(Math.random()*images_array.length);
background_img=images_array[random_number];
console.log(random_number);

rover_img="rover.png"

rover_x= 100;
rover_y=50;

rover_width=100;
rover_height=100;

function add(){
bg_img=new Image();
bg_img.onload=upload_bg;
bg_img.src=background_img;
r_img= new Image();
r_img.onload=upload_rover;
r_img.src=rover_img;

}
function upload_bg(){
ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function upload_rover(){
    ctx.drawImage(r_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=='37'){
    move_left();
}
if(keypressed=='38'){
    move_up();

}
if(keypressed=='39'){
    move_right();
}
if(keypressed=='40')
{
    move_down();
}
}
function move_left(){
    if(rover_x>0){
        rover_x=rover_x-10;
        upload_bg();
        upload_rover();
    }
}
function move_right(){
    if(rover_x<900){
        rover_x=rover_x+10;
        upload_bg();
        upload_rover();
    }
}function move_up(){
    if(rover_y>0){
        rover_y=rover_y-10;
        upload_bg();
        upload_rover();
    }
}
function move_down(){
    if(rover_y<500){
        rover_y=rover_y+10;
        upload_bg();
        upload_rover();
    }
}