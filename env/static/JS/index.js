
window.addEventListener('load', async function() { 

//Instantiating class for image transformations 
var ImageTransform = new imageTransformations(); 


//Label 1
const video = document.querySelector('#video'),
txtLabel1 = document.querySelector('#txtLabel1'),
addLabel1 = document.querySelector('#addLabel1'),
numLabel1 = document.querySelector('#numLabel1'),
//Label 2 
txtLabel2 = document.querySelector('#txtLabel2'),
addLabel2 = document.querySelector('#addLabel2'),
numLabel2 = document.querySelector('#numLabel2'),
//Label 3 
txtLabel3 = document.querySelector('#txtLabel3'),
addLabel3 = document.querySelector('#addLabel3'),
numLabel3 = document.querySelector('#numLabel3'),
//Label 4
txtLabel4 = document.querySelector('#txtLabel4'),
addLabel4 = document.querySelector('#addLabel4'),
numLabel4 = document.querySelector('#numLabel4'),

//Predictions
btnPredict = document.querySelector('#btnPredict'),
lPrediction = document.querySelector('#lPrediction'),

//Status for feed
statusModel = document.querySelector('#statusModel'),
statusVideo = document.querySelector('#statusVideo'),

checkModel = document.querySelector('#CheckModel'),
saveModel = document.querySelector('#saveModel'),
inputImage = document.querySelector('#inputImage'),

viewMask = document.querySelector('#viewMask'),

canvas = document.querySelector('#canvas'),
canvasCrop = document.querySelector('#canvasCrop'),

liveFeed = document.querySelector('#liveFeed'),


uploadImage1 = document.querySelector('#uploadLabel1'),
uploadImage2 = document.querySelector('#uploadLabel2'),
uploadImage3 = document.querySelector('#uploadLabel3'),
uploadImage4 = document.querySelector('#uploadLabel4');



let num1 = 0, num2 = 0, num3 = 0, num4 = 0, flagPredicting = false; 

let isPredicting = false; 



const specs = {video: {width: 224, height: 224, facingMode: 'user'}};
navigator.mediaDevices.getUserMedia(specs)
.then(function(mediaStream) {
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
        statusVideo.textContent = 'ready';
        video.play();
    };
})
.catch(function(err) { 
    statusVideo.textContent = 'error';
    console.log(err.name + ": " + err.message); 
});

const classifier = new imageClassifier(6);

classifier.initalise().then(function () {
    statusModel.textContent = 'Model Loaded';
});


//Event listeners for adding each label
//Each label adds a 'screenshot' of the video life feed and 
// the label ands sends it too the classifier. 
//Incrememnts to one to show image has been added 




// Function to call when wanting to call with hand mask 

function snapshot() {
    var ctx = canvas.getContext('2d');
    var feed = liveFeed.getContext('2d');
    imageData = feed.getImageData(0, 0, 224, 224);
    ctx.putImageData(imageData,0,0);
}


// function snapshot() {
//     var ctx = canvasCrop.getContext('2d');
//     var feed = liveFeed.getContext('2d');
//     imageData = feed.getImageData(0, 0, 224, 224);
//     ctx.putImageData(imageData,0,0);
// }



addLabel1.addEventListener('click', function() {
    if(num1 == 0) {
        txtLabel1.disabled = true; 
    }
    let label = txtLabel1.value.trim();  

    snapshot();
    CSHandMask();

    var rot1 = rotateImage("canvasCrop", "rotation-20", -20);
    var rot2 = rotateImage("canvasCrop", "rotation-10", -10);
    var rot3 = rotateImage("canvasCrop", "rotation0", 0);
    var rot4 = rotateImage("canvasCrop", "rotation10", 10);
    var rot5 = rotateImage("canvasCrop", "rotation20", 20);


    classifier.addLabel(rot1, label);
    numLabel1.textContent = ++num1; 
    classifier.addLabel(rot2, label);
    numLabel1.textContent = ++num1; 
    classifier.addLabel(rot3, label);
    numLabel1.textContent = ++num1; 
    classifier.addLabel(rot4, label);
    numLabel1.textContent = ++num1; 
    classifier.addLabel(rot5, label);
    numLabel1.textContent = ++num1; 

});



addLabel2.addEventListener('click', function() {
    if(num2 == 0) {
        txtLabel2.disabled = true; 
    }
    let label = txtLabel2.value.trim();
    
    snapshot();
    CSHandMask();
    var rot1 = rotateImage("canvasCrop", "rotation-20", -20);
    var rot2 = rotateImage("canvasCrop", "rotation-10", -10);
    var rot3 = rotateImage("canvasCrop", "rotation0", 0);
    var rot4 = rotateImage("canvasCrop", "rotation10", 10);
    var rot5 = rotateImage("canvasCrop", "rotation20", 20);


    classifier.addLabel(rot1, label);
    numLabel2.textContent = ++num2; 
    classifier.addLabel(rot2, label);
    numLabel2.textContent = ++num2; 
    classifier.addLabel(rot3, label);
    numLabel2.textContent = ++num2; 
    classifier.addLabel(rot4, label);
    numLabel2.textContent = ++num2; 
    classifier.addLabel(rot5, label);
    numLabel2.textContent = ++num2; 

});


addLabel3.addEventListener('click', function() {
    if(num3 == 0) {
        txtLabel3.disabled = true; 
    }
    let label = txtLabel3.value.trim();  
    snapshot();
    CSHandMask();
    var rot1 = rotateImage("canvasCrop", "rotation-20", -20);
    var rot2 = rotateImage("canvasCrop", "rotation-10", -10);
    var rot3 = rotateImage("canvasCrop", "rotation0", 0);
    var rot4 = rotateImage("canvasCrop", "rotation10", 10);
    var rot5 = rotateImage("canvasCrop", "rotation20", 20);


    classifier.addLabel(rot1, label);
    numLabel3.textContent = ++num3; 
    classifier.addLabel(rot2, label);
    numLabel3.textContent = ++num3; 
    classifier.addLabel(rot3, label);
    numLabel3.textContent = ++num3; 
    classifier.addLabel(rot4, label);
    numLabel3.textContent = ++num3; 
    classifier.addLabel(rot5, label);
    numLabel3.textContent = ++num3; 
});


addLabel4.addEventListener('click', function() {
    if(num4 == 0) {
        txtLabel4.disabled = true; 
    }
    let label = txtLabel4.value.trim();  
    snapshot();
    CSHandMask();
    var rot1 = rotateImage("canvasCrop", "rotation-20", -20);
    var rot2 = rotateImage("canvasCrop", "rotation-10", -10);
    var rot3 = rotateImage("canvasCrop", "rotation0", 0);
    var rot4 = rotateImage("canvasCrop", "rotation10", 10);
    var rot5 = rotateImage("canvasCrop", "rotation20", 20);

    classifier.addLabel(rot1, label);
    numLabel4.textContent = ++num4; 
    classifier.addLabel(rot2, label);
    numLabel4.textContent = ++num4; 
    classifier.addLabel(rot3, label);
    numLabel4.textContent = ++num4; 
    classifier.addLabel(rot4, label);
    numLabel4.textContent = ++num4; 
    classifier.addLabel(rot5, label);
    numLabel4.textContent = ++num4; 

    
 
});



function uploadRotations() {
    var ctx = canvasCrop.getContext('2d');
    var cnv = canvas.getContext('2d');
    imageData = cnv.getImageData(0, 0, 224, 224);
    ctx.putImageData(imageData,0,0);
}



uploadImage1.addEventListener('click', function() {
    if(num1 == 0) {
        txtLabel1.disabled = true; 
    }
    let label = txtLabel1.value.trim();  
  
    CSHandMask();
    uploadRotations()

    var rot1 = rotateImage("canvasCrop", "rotation-20", -20);
    var rot2 = rotateImage("canvasCrop", "rotation-10", -10);
    var rot3 = rotateImage("canvasCrop", "rotation0", 0);
    var rot4 = rotateImage("canvasCrop", "rotation10", 10);
    var rot5 = rotateImage("canvasCrop", "rotation20", 20);


    classifier.addLabel(rot1, label);
    numLabel1.textContent = ++num1; 
    classifier.addLabel(rot2, label);
    numLabel1.textContent = ++num1; 
    classifier.addLabel(rot3, label);
    numLabel1.textContent = ++num1; 
    classifier.addLabel(rot4, label);
    numLabel1.textContent = ++num1; 
    classifier.addLabel(rot5, label);
    numLabel1.textContent = ++num1; 



});



uploadImage2.addEventListener('click', function() {
    if(num2 == 0) {
        txtLabel2.disabled = true; 
    }
    let label = txtLabel2.value.trim();
    
    CSHandMask();
    uploadRotations()

    var rot1 = rotateImage("canvasCrop", "rotation-20", -20);
    var rot2 = rotateImage("canvasCrop", "rotation-10", -10);
    var rot3 = rotateImage("canvasCrop", "rotation0", 0);
    var rot4 = rotateImage("canvasCrop", "rotation10", 10);
    var rot5 = rotateImage("canvasCrop", "rotation20", 20);


    classifier.addLabel(rot1, label);
    numLabel2.textContent = ++num2; 
    classifier.addLabel(rot2, label);
    numLabel2.textContent = ++num2; 
    classifier.addLabel(rot3, label);
    numLabel2.textContent = ++num2; 
    classifier.addLabel(rot4, label);
    numLabel2.textContent = ++num2; 
    classifier.addLabel(rot5, label);
    numLabel2.textContent = ++num2; 


});


uploadImage3.addEventListener('click', function() {
    if(num3 == 0) {
        txtLabel3.disabled = true; 
    }
    let label = txtLabel3.value.trim();  

    CSHandMask();
    uploadRotations()

    var rot1 = rotateImage("canvasCrop", "rotation-20", -20);
    var rot2 = rotateImage("canvasCrop", "rotation-10", -10);
    var rot3 = rotateImage("canvasCrop", "rotation0", 0);
    var rot4 = rotateImage("canvasCrop", "rotation10", 10);
    var rot5 = rotateImage("canvasCrop", "rotation20", 20);


    classifier.addLabel(rot1, label);
    numLabel3.textContent = ++num3; 
    classifier.addLabel(rot2, label);
    numLabel3.textContent = ++num3; 
    classifier.addLabel(rot3, label);
    numLabel3.textContent = ++num3; 
    classifier.addLabel(rot4, label);
    numLabel3.textContent = ++num3; 
    classifier.addLabel(rot5, label);
    numLabel3.textContent = ++num3; 

    
 
});


uploadImage4.addEventListener('click', function() {
    if(num4 == 0) {
        txtLabel4.disabled = true; 
    }
    let label = txtLabel4.value.trim();  
    
    CSHandMask();
    uploadRotations()

    var rot1 = rotateImage("canvasCrop", "rotation-20", -20);
    var rot2 = rotateImage("canvasCrop", "rotation-10", -10);
    var rot3 = rotateImage("canvasCrop", "rotation0", 0);
    var rot4 = rotateImage("canvasCrop", "rotation10", 10);
    var rot5 = rotateImage("canvasCrop", "rotation20", 20);


    classifier.addLabel(rot1, label);
    numLabel4.textContent = ++num4; 
    classifier.addLabel(rot2, label);
    numLabel4.textContent = ++num4; 
    classifier.addLabel(rot3, label);
    numLabel4.textContent = ++num4; 
    classifier.addLabel(rot4, label);
    numLabel4.textContent = ++num4; 
    classifier.addLabel(rot5, label);
    numLabel4.textContent = ++num4; 


    
 
});





inputImage.addEventListener('change', function(ev) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    if(ev.target.files) {
       let file = ev.target.files[0];
       var fileReader  = new FileReader();
       fileReader.readAsDataURL(file);
       fileReader.onloadend = function (e) {
           var image = new Image();
           image.src = e.target.result;
           image.onload = function(ev) {
              canvas.width = image.width;
              canvas.height = image.height;
              ctx.drawImage(image, 0,0)
          }
       }
    }
 });

addImage.addEventListener('click', function() {
    inputImage.click();
});






// addLabel7.addEventListener('click', function() {
//     if(num7 == 0) {
//         txtLabel7.disabled = true; 
//     }
//     let label = txtLabel7.value.trim();  

//     CSHandMask();

//     var rot90 = rotateImage("canvasCrop", "rotation90", 90);
//     var rot180 = rotateImage("canvasCrop", "rotation180", 180);
//     var rot270 = rotateImage("canvasCrop", "rotation270", 270);
//     var rot360 = rotateImage("canvasCrop", "rotation360", 360);


//     classifier.addLabel(rot90, label);
//     numLabel7.textContent = ++num7; 
//     classifier.addLabel(rot180, label);
//     numLabel7.textContent = ++num7; 
//     classifier.addLabel(rot270, label);
//     numLabel7.textContent = ++num7; 
//     classifier.addLabel(rot360, label);
//     numLabel7.textContent = ++num7; 



    
 
// });


// Training and predicting listeners 

btnTrain.addEventListener('click', async function() {
    classifier.trainModel(function(loss) {
        if(loss) {
            console.log('Loss' + loss); 
        } else {
            console.log('Model training complete')
        }
    })
}); 


btnPredict.addEventListener('click', async function() {
    isPredicting = !isPredicting; 
    if(isPredicting) {
        this.textContent = 'Stop Predicting';
        classifier.predict(video).then(updatePrediction);
    } else {
        this.textContent = 'start predicting'; 
    }

})





// Method to display the model architecture 
// For DEBUGGING purposes

viewMask.addEventListener('click', function() {
    CSHandMask(); 
});

checkModel.addEventListener('click', function() {
    classifier.checkModel(); 
});


saveModel.addEventListener('click', function() {
    classifier.saveModel(); 
});



//Function that allows for predictions to occur recurisively. 
function updatePrediction(label) {
    lPrediction.textContent = label; 
    console.log('Label is  ' + label); 
    if(isPredicting) {
        classifier.predict(video).then(updatePrediction);
        }
    }
});



/**
 *  
 * @param {String} canvasSrc 
 * @param {String} canvasDst 
 * @param {var} rotationAngle 
 */

function rotateImage(canvasSrc, canvasDst, rotationAngle) {
    var canvasH = document.getElementById(canvasDst),
    ctxH = canvasH.getContext("2d");

    var img = document.getElementById(canvasSrc),
        angle = rotationAngle * Math.PI /180, 
        sin = Math.sin(angle), 
        cos = Math.cos(angle);

    var width = Math.abs(img.width*cos)+Math.abs(img.height*sin);
    var height = Math.abs(img.height*cos)+Math.abs(img.width*sin);


    canvasH.width = width;
    canvasH.height = height;
    ctxH.clearRect(0, 0, width, height);
    ctxH.save();
    ctxH.translate(width / 2, height / 2);
    ctxH.rotate(angle);
    ctxH.translate(-img.width / 2, -img.height / 2);
    ctxH.drawImage(img, 0, 0);
    ctxH.restore();
    
    var imgd = ctxH.getImageData(0, 0, 224, 224);
    return imgd; 

    
}



/**
 * OpenCV code 
 * 
 * 
 */


let frame; 
let fgmask; 
let image; 

let cap = new cv.VideoCapture(video);

cv['onRuntimeInitialized']=()=>{
 
 let kSize = new cv.Size(7,7); 


 frame = new cv.Mat(video.height, video.width, cv.CV_8UC4);
// schedule the first one.
setTimeout(processVideo, 0);

 const FPS = 30;
function processVideo() {
streaming = true; 
try {
    if (!streaming) {
        // clean and stop.
        frame.delete();
        return;
    }
    let begin = Date.now();
    // start processing.
    cap.read(frame);


    // cv.GaussianBlur(frame, frame, kSize, 2,2, cv.BORDER_DEFAULT); 
    cv.imshow('liveFeed', frame); 


    // schedule the next one.
    let delay = 1000/FPS - (Date.now() - begin);
    setTimeout(processVideo, delay);
} catch (err) {
    console.log(err); 
}
};
  };




// function dilateData() {
// let dst = new cv.Mat();
// let src = cv.imread('liveFeed');
// let M = cv.Mat.ones(2, 2, cv.CV_32S);
// let anchor = new cv.Point(10, 10);
// // You can try more different parameters
// cv.dilate(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
// cv.imshow('liveFeed', dst);
// src.delete(); dst.delete(); M.delete();
// }




function noiseReduction(imgMask) {
    let dst = new cv.Mat(); 
    let src = imgMask; 
    let M = cv.Mat.ones(3,3,cv.CV_32S);
    let anchor = new cv.Point(-1, -1);

    // cv.erode(src,dst,M,anchor,1,cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());

    cv.morphologyEx(src, dst, cv.MORPH_OPEN, M, anchor, 1,
    cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
     imgMask = dst; 


    // src.delete(); dst.delete(); M.delete();
    return imgMask; 
}




    



//Colour space hand mask 
// function CSHandMask() {

//     let src = cv.imread('liveFeed');
//     let dst = new cv.Mat();
//     cv.cvtColor(src, src, cv.COLOR_BGR2HSV, 0);
    
//     let low = new cv.Mat(src.rows, src.cols, src.type(), [73,6,80,0]);
//     let high = new cv.Mat(src.rows, src.cols, src.type(),  [150,133,119,255]);

//     cv.inRange(src, low, high, dst);
//     cv.imshow('handMask', dst)
//     src.delete(); dst.delete(); low.delete(); high.delete();
    
// }




// Extracting skintone using a inrange methodology 

function CSHandMask() {

    let src = cv.imread('canvas');
    let dst = new cv.Mat();
       
    let low = new cv.Mat(src.rows, src.cols, src.type(), [73,6,80,0]);
    let high = new cv.Mat(src.rows, src.cols, src.type(),  [254,255,240,255]);

    cv.inRange(src, low, high, dst);

    //Eroding and dilating the masks
    let M = cv.Mat.ones(3,3,cv.CV_8U);
    let anchor =  new cv.Point(-1, -1);

    cv.morphologyEx(dst, dst, cv.MORPH_OPEN, M, anchor, 1,
    cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
    cv.imshow('handMask', dst)

    src.delete(); dst.delete(); low.delete(); high.delete();

    createHandMask()

}



// function CSHandMask() {

//     let src = cv.imread('canvas');
//     let dst = new cv.Mat();

//     cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);

//     cv.threshold(src, dst, 177, 200, cv.THRESH_BINARY+cv.THRESH_OTSU);
//     cv.imshow('handMask', dst);
//     src.delete();
//     dst.delete();

//     createHandMask()

// }


function createHandMask() {

    let src = cv.imread('handMask');
    let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);

    //Thresholding variants 


    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
    // let cnt = contours.get(0);

    let color = new cv.Scalar(255,255,255);
    let cnt = new cv.Mat()
    
    for(let i = 0; i < contours.size(); ++i) {
        let contour = contours.get(i);
        let area = cv.contourArea(contour, false);
    
        if (area >8000) {
        cv.drawContours(dst, contours, i, color, -1, 8, hierarchy, 100);
        cnt = contours.get(i)

    }
}

    let rect = cv.boundingRect(cnt);

    let rectangleColor = new cv.Scalar(255,255,255);
    let point1 = new cv.Point(rect.x, rect.y);
    let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
    // cv.rectangle(dst, point1, point2, rectangleColor, 2, cv.LINE_AA, 0);
    cv.rectangle(dst, point1, point2, rectangleColor, -1, cv.LINE_AA, 0);
    cv.imshow('convexHull', dst);
    extractHand()

    src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();

    

}




//Extracts the hand in a crop style fashion which crops the image down to a specific region rather than selecting the image solely itself. 
function extractHand() {

   let iFrame = new cv.Mat(video.height, video.width, cv.CV_8UC4);
   let src = cv.imread('canvas');
   let mask = cv.imread('convexHull')
   cv.cvtColor(mask, mask, cv.COLOR_RGBA2GRAY, 0);

   cap.read(iFrame);


   let fg =  new cv.Mat(video.height, video.width, cv.CV_8UC4)

  cv.bitwise_and(src, src, fg, mask)


    cv.imshow('canvasCrop', fg);

    var canvas = document.getElementById("canvasCrop")
    ctx = canvas.getContext("2d")
    var imgd = ctx.getImageData(0, 0, 224, 224)
    pix = imgd.data

    uniqueColor = [0,0,150]; // Blue for an example, can change this value to be anything.


    // Removing black background to prevent 
    for (var i = 0, n = pix.length; i <n; i += 4) {
        if (pix[i] == 0 &&  
            pix[i+1] == 0 &&
            pix[i+2] == 0)
        {
            pix[i+3] = 0;
        }
        else
        {
       
        }
  }

  ctx.putImageData(imgd, 0, 0);



}




//Compare this with the crop method 

// function extractHand2() {

//     let iFrame = new cv.Mat(video.height, video.width, cv.CV_8UC4);
//     let src = cv.imread('liveFeed');
//     let mask = cv.imread('handMask')
//     cv.cvtColor(mask, mask, cv.COLOR_RGBA2GRAY, 0);
 
//     cap.read(iFrame);
 
 
//     let fg =  new cv.Mat(video.height, video.width, cv.CV_8UC4)
 
//    cv.bitwise_and(src, src, fg, mask)

//    cv.imshow('canvasCrop2', fg);


//    var canvas = document.getElementById("canvasCrop2")
//    ctx = canvas.getContext("2d")
//    var imgd = ctx.getImageData(0, 0, 224, 224)
//    pix = imgd.data

//    uniqueColor = [0,0,150]; // Blue for an example, can change this value to be anything.

//      // Removing black background to prevent 
//      for (var i = 0, n = pix.length; i <n; i += 4) {
//         if (pix[i] == 0 &&  
//             pix[i+1] == 0 &&
//             pix[i+2] == 0)
//         {
//             pix[i+3] = 0;
//         }
//         else
//         {
       
//         }
//   }



//   ctx.putImageData(imgd, 0, 0);


// }
