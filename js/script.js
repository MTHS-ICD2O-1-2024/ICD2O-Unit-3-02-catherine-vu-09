// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: April 1 2025
// This file contains the JS functions for index.html

"use strict"

/**

* This function calculates the area of a triangle.

*/

function calculateVolumepyramid() {
    // input

    const lengthOfPyramid = parseFloat(
        document.getElementById("length-of-pyramid").value
    )

    const widthOfPyramid = parseFloat(
        document.getElementById("width-of-pyramid").value
    )

    const heightOfPyramid = parseFloat(
        document.getElementById("height-of-pyramid").value
    )

    // process

    const volumeOfPyramid =
        (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3

    // output

    document.getElementById("answer").innerHTML =
        "Volume is: " + volumeOfPyramid + " mm³"
}