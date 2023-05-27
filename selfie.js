var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();
function save(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;
    if (Content=="take my selfie"){
        console.log("taking your selfie");
        speak();
    }
}


function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds.";
    speak_data1="taking your selfie in 10 seconds.";
    speak_data2="taking your selfie in 15 seconds.";

    var utterThis=new SpeechSynthesisUtterance(speak_data);
    utterThis1=new SpeechSynthesisUtterance(speak_data1);
    utterThis2=new SpeechSynthesisUtterance(speak_data2);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot1();
        save1();
    }, 5000);
    synth.speak(utterThis1);
    setTimeout(function(){
        take_snapshot2();
        save2();
    }, 10000);
    synth.speak(utterThis2);
    setTimeout(function(){
        take_snapshot3();
        save3();
    }, 15000);
}

Webcam.set({
    width:600,
    height:500,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");

function take_snapshot1(){
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML='<img id="selfie_image1" src="'+data_uri+'">';
    });
}
function take_snapshot2(){
    Webcam.snap(function(data_uri2){
        document.getElementById("result2").innerHTML='<img id="selfie_image2" src="'+data_uri2+'">';
    });  
}
function take_snapshot3(){
    Webcam.snap(function(data_uri1){
        document.getElementById("result3").innerHTML='<img id="selfie_image3" src="'+data_uri1+'">';
    });
}

function save1(){
    link1=document.getElementById("link1");
    image1=document.getElementById("selfie_image1").src;
    link1.href=image1;
    link1.click();
}
function save2(){
    link2=document.getElementById("link2");
    image2=document.getElementById("selfie_image2").src;
    link2.href=image2;
    link2.click();
}
function save3(){
    link3=document.getElementById("link3");
    image3=document.getElementById("selfie_image3").src;
    link3.href=image3;
    link3.click();
}