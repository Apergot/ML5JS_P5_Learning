let mobilenet;
let penguin;


/** Callbacks to wait */
function modelReady(){
    console.log('Model is ready!!!');
    mobilenet.predict(penguin, gotResults);
}

function imgReady(){
    image(penguin, 0,0, width, height);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        let label = results[0].className;
    }
}

function setup(){
    createCanvas(640, 480);
    penguin = createImg('images/penguin2.jpg', imgReady);
    penguin.hide();
    background(0);  

    mobilenet = ml5.imageClassifier('MobileNet', modelReady); 
}

