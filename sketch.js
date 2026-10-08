let bubbles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(22);

  //percorrendo o array bubbles
  for(let bubble of bubbles){
    bubble.show();
    bubble.move();
  }
}

function mousePressed(){
  let raio = random(10,50);
  let bubble = new Bubble(mouseX,mouseY,raio);
  bubbles.push(bubble);
}


//---------Função Clica e Arrasta
function mouseDragged(){
   let raio = random(10,50);
  let bubble = new Bubble(mouseX,mouseY,raio);
  bubbles.push(bubble);
}