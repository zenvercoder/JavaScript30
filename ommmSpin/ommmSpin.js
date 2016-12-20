navigator.getUserMedia = (navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia);

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source;
var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();
var convolver = audioCtx.createConvolver();
// var soundSource, concertHallBuffer;

analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;

ajaxRequest = new XMLHttpRequest();

ajaxRequest.open('GET', 'https://mdn.github.io/voice-change-o-matic/audio/concert-crowd.ogg', true);

ajaxRequest.responseType = 'arraybuffer';

var canvas = document.querySelector('.visualizer');
var canvasCtx = canvas.getContext("2d");

var intendedWidth = document.querySelector('.wrapper').clientWidth;
canvas.setAttribute('width', intendedWidth);

var visualSelect = document.getElementById("visual");
var drawVisual;

if (navigator.getUserMedia) {
    console.log('getUserMedia supported.');
    navigator.getUserMedia(
        {
            audio: true
        },
        // Success callback
        function (stream) {
            source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);

            analyser.connect(distortion);
            distortion.connect(biquadFilter);
            biquadFilter.connect(convolver);
            convolver.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            visualize();
        },
        function (err) {
            console.log('The following gUM error occured: ' + err);
        }
    );
} else {
    console.log('getUserMedia not supported on your browser!');
}

function visualize() {
    WIDTH = canvas.width;
    HEIGHT = canvas.height;

    var visualSetting = visualSelect.value;
    console.log(visualSetting);

    if (visualSetting == "frequencybars") {
        // representing the size of the FFT (Fast Fourier Transform) to be used to determine the frequency domain.
        // analyser.fftSize = 4096;
        analyser.fftSize = 2048;
        // analyser.fftSize = 256;
        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);

        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

        function draw() {

            drawVisual = requestAnimationFrame(draw);

            analyser.getByteFrequencyData(dataArray);
            var voiceFreqs = dataArray.filter(function (frequency) {
                if (frequency >= 80 && frequency <= 255) {
                    return true;
                } else {
                    return false;
                }
            });
            var length = Math.min(voiceFreqs.length, 20) * 6 + 300;

            canvas.width = length;
            canvas.height = length;
            canvasCtx.fillStyle = 'rgba(0,0,0,0)';
            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

            var barWidth = (WIDTH / bufferLength);
            var barHeight;
            var x = 0;

            for (var i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];
                canvasCtx.fillStyle = 'rgb(179, 255, 255)';
                canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth * 2, barHeight / 1.25);

                x += barWidth + 2;

            }
        }

        draw();

    } else if (visualSetting == "off") {
        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    }
}

// event listeners to change visualize and voice settings
visualSelect.onchange = function () {
    window.cancelAnimationFrame(drawVisual);
    visualize();
};


const keys = Array.from(document.querySelectorAll('.key'));
const canvasSpin = document.querySelector('.visualizer');

window.addEventListener('keydown', playSound);
window.addEventListener('keydown', moveCanvas);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playSound(e) {
    console.log("playSound");
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeAnimateCanvas() {
    const canvasSpin = document.querySelector('.visualizer');
    canvasSpin.classList.remove('spin-circle');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function moveCanvas(e) {
    console.log("playSound");
    const circle = document.querySelector('.visualizer');
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const left = document.querySelector(`div[data-key="${65}"]`);
    const right = document.querySelector(`div[data-key="${68}"]`);
    const up = document.querySelector(`div[data-key="${87}"]`);
    const down = document.querySelector(`div[data-key="${83}"]`);
    const space = document.querySelector(`div[data-key="${32}"]`);

    if (circle.classList.contains('moveLeft')){
        circle.classList.remove('moveLeft');
    } else if (circle.classList.contains('moveRight')){
        circle.classList.remove('moveRight');
    }
    else if (circle.classList.contains('moveUp')){
        circle.classList.remove('moveUp');
    }
    else if (circle.classList.contains('moveDown')){
        circle.classList.remove('moveDown');
    }

    switch (key) {
        case left:
            circle.classList.add('moveLeft');
            break;
        case right:
            circle.classList.add('moveRight');
            break;
        case up:
            circle.classList.add('moveUp');
            break;
        case down:
            circle.classList.add('moveDown');
            break;
        case space:
            circle.classList.add('spin-circle');
            canvasSpin.addEventListener('animationend', removeAnimateCanvas);
            break;
        default:
            break;
    }
}


// const canvasSpin = document.querySelector('.visualizer');
// canvasSpin.classList.remove('spin-circle');

// window.addEventListener('keydown', moveLeft);
// window.addEventListener('keydown', moveRight);
// window.addEventListener('keydown', moveUp);
// window.addEventListener('keydown', moveDown);

// left.addEventListener('keydown', moveLeft);
// right.addEventListener('keydown', moveRight);
// up.addEventListener('keydown', moveUp);
// down.addEventListener('keydown', moveDown);
// space.addEventListener('keydown', animateCanvas);

// left.addEventListener('keydown', moveCanvas);
// left.addEventListener('keydown', moveLeft);
// right.addEventListener('keydown', moveCanvas);
// up.addEventListener('keydown', moveCanvas);
// down.addEventListener('keydown', moveCanvas);

// const left = document.querySelector(`div[data-key="${65}"]`);
// const right = document.querySelector(`div[data-key="${68}"]`);
// const up = document.querySelector(`div[data-key="${87}"]`);
// const down = document.querySelector(`div[data-key="${83}"]`);
// const space = document.querySelector(`div[data-key="${32}"]`);

// window.addEventListener('keydown', [playSound, animateCanvas, moveLeft]);
// space.addEventListener('keydown', animateCanvas);
// keys.addEventListener('keydown', playSound);


// const canvas = document.querySelector('.visualizer');
// canvas.classList.add('moveLeft');

// function moveLeft(){
//     const circle = document.getElementById('circle');
//     // const circle = document.getElementById('.visualizer');
//     circle.classList.add('moveLeft');
// }
//
// function moveRight(){
//     const circle = document.getElementById('circle');
//     // const circle = document.getElementById('.visualizer');
//     circle.classList.add('moveRight');
// }
//
// function moveUp(){
//     const circle = document.getElementById('circle');
//     // const circle = document.getElementById('.visualizer');
//     circle.classList.add('moveUp');
// }
//
// function moveDown(){
//     const circle = document.getElementById('circle');
//     // const circle = document.getElementById('.visualizer');
//     circle.classList.add('moveDown');
// }


// function moveCanvas() {
//     // const circle = document.getElementById('circle');
//     const circle = document.querySelector('.visualizer');
//
//     const left = document.querySelector(`div[data-key="${65}"]`);
//     const right = document.querySelector(`div[data-key="${68}"]`);
//     const up = document.querySelector(`div[data-key="${87}"]`);
//     const down = document.querySelector(`div[data-key="${83}"]`);
//
//     switch {
//         case left:
//             circle.classList.add('moveLeft');
//             break;
//         case right:
//             circle.classList.add('moveRight');
//             break;
//         case up:
//             circle.classList.add('moveUp');
//             break;
//         case down:
//             circle.classList.add('moveDown');
//             break;
//         default:
//             break;
//     }
// }

