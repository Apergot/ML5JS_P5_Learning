let mobilenet;
let video;
let label = '';


/** Callbacks to wait */
function modelReady(){
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

// function imgReady(){
//     image(penguin, 0,0, width, height);
// }

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        label = results[0].className;
        fill(255);
        textSize(32);
        text(label, 10, height - 20);
    }
}

function setup(){
    background(0);
    createCanvas(640, 550);
    video = createCapture(VIDEO);

    background(0);  

    mobilenet = ml5.imageClassifier('MobileNet', video ,modelReady); 
}

