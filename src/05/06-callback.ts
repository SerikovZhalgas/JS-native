import * as React from "react";
import {ChangeEvent, MouseEvent} from "react";

/*
const callback = (): number =>{
    return 12;
}

window.setTimeout(callback, 1000)
*/


export const Users = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
    }
    const nameChanged = () => {
        console.log("name changed")
    }
    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: "  + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return <div><textarea onChange={nameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button name="delete" onClick={deleteUser}>x</button>
    </div>
}