import React, { useState } from 'react';

const br = ( {lineCount=0})=>{

    let brArr = new Array(lineCount)

    return brArr.map(()=>{
        return <br></br>
    })
}