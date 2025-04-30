let cnv;

function setup() {
  cnv = createCanvas(710, 400);
  cnv.style('display', 'block'); 
  cnv.style('margin', '0 auto');

    createCanvas(710, 400);

    background(0);

    strokeWeight(10);

    colorMode(HSB);

    describe('A blank canvas where the user draws by dragging the mouse');
  }
  
  function mouseDragged() {
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

function reset(){
    setup();
}