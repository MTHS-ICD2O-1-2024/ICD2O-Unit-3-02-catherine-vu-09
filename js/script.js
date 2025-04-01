// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: April 1 2025
// This file contains the JS functions for index.html

/**
* Enter length, width and height
*/

function calculateVolume() {
let l = parseFloat(document.getElementById('length').value);
    let w = parseFloat(document.getElementById('width').value);
    let h = parseFloat(document.getElementById('height').value);

    if (!isNaN(l) && !isNaN(w) && !isNaN(h) && l > 0 && w > 0 && h > 0) {
        let volume = (l * w * h) / 3;
        document.getElementById('volume').innerText = `Volume is: ${volume.toFixed(2)} mm³`;
    } else {
        document.getElementById('volume').innerText = 'Please enter valid positive numbers';
    }
}
