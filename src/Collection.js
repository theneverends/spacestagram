import React, { useState } from "react";
import Display from "./Display";

export default function Collection() {
    const likes = [... localStorage];
    return (
        <div id="collection">
            Hello World
            <Display list={likes}/>
        </div>
    )
}
