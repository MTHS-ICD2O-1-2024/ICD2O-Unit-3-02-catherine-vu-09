// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: April 1 2025
// This file contains the JS functions for index.html

/**
* Enter length, width and height
*/

function calculateVolume() {
            let a = parseFloat(document.getElementById('length').value);
            let b = parseFloat(document.getElementById('width').value);
            let h = parseFloat(document.getElementById('height').value);
            if (!isNaN(a) && !isNaN(b) && !isNaN(h)) {
               let area = ((l* w * h) / 3) * h;
                document.getElementById('volume').innerText = `Volume is: ${area} mm²`;
            } else {
                document.getElementById('volume').innerText = 'Please enter valid numbers';
            }
        }
