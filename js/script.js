// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: April 1 2025
// This file contains the JS functions for index.html

/**
* Enter length, width and height
*/

function calculateVolume() {
    let l = parseFloat(document.getElementById('length-number').value);
        let w = parseFloat(document.getElementById('width-number').value);
        let h = parseFloat(document.getElementById('height-number').value);

        if (!isNaN(l) && !isNaN(w) && !isNaN(h) && l > 0 && w > 0 && h > 0) {
            let volume = (l * w * h) / 3; // Correct pyramid volume formula
            document.getElementById('volume-result').innerText = `Pyramid Volume: ${volume.toFixed(2)} mm³`;
        } else {
            document.getElementById('volume-result').innerText = 'Please enter valid positive numbers.';
        }
    }
