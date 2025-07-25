// 1 Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Notes
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

function frames(minutes,fps){
    if(isNaN(minutes) || isNaN(fps)){
        return "Please Provide a Number!";
    } else if (minutes < 0 || fps < 0){
        return "Please Provide a Positive Number!";
    }
    else {
        let min = minutes * 60;
        let result = min * fps;
        return result;
    }
}
// console.log(frames(1, 1));
// console.log(frames("10", 1));
// console.log(frames(-10, 25));

// From edabit.com Easy 
// 1 Triangular Number Sequence
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15 .
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

function triangle(n){
    for(let i=1; i = n - 1; i++){
        return n;
    }
}
console.log(triangle(6));