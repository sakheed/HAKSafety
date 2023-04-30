import React, { useState } from "react";
import { FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react";

export function Solutions(): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [soln, setSoln] =  useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function solution(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "hurricane"){
            setSoln("Stay away from windows, tune into the local weather channel");
        }

        if(event.target.value === "theft"){
            setSoln("Secure your belongings, lock your dorm rooms");
        }
        if(event.target.value === "shooting"){
            setSoln(<div>
                <div>"Stay indoors, avoid being approached by strangers, walk in groups"</div>
                <div>
                    <b>Steps:</b><br/>
                    <ol>
                        <li>Evacuate the area and leave belongings behind. Call police when in a safe area (or press “Big Blue Button”).</li>
                        <li>If evacuation is not possible, find a place out of view to hide and provide protection with nearby objects.</li>
                        <li>Silence all electronics and remain quiet.</li>
                        <li>Remain hidden until notified that it is safe to come out.
                            <ol type='a'>
                                <li>Always ensure it is the police, an active shooter may try to lure you out.</li>
                            </ol>
                        </li>
                        <li>As a last resort, attempt to take the active shooter down. When the shooter is at close range and you cannot flee, your chance of survival is much greater if you try to incapacitate him/her.</li>
                        <li>Call 911 for emergencies or call the non-emergency to report any incidents 302-831-2117</li>
                    </ol>
                    <b>Indoors:</b><br/>
                    <ol>
                        <li>If you are in a hallway, get into a room and secure the door, close blinds, and turn off lights.</li>
                        <li>If possible, press the “Big Blue Button” to report the incident to the police. Immediately silence the device. </li>
                        <li>As a last resort, attempt to take the active shooter down. When the shooter is at close range and you cannot flee, your chance of survival is much greater if you try to incapacitate him/her.</li>
                    </ol>
                    <b>Outdoors:</b><br/>
                    <ol>
                        <li>Find the nearest building and lock yourself inside. </li>
                        <li>If you cannot find a building, continue to flee away from the sounds of shots and report the incident to the police when safe. </li>
                    </ol>
                </div>
            </div>);
        }

    }


    return (
        <div>
            <Heading size="lg">Unsure what to do in an emergency situation? No worries!</Heading>
            <br/>
            <FormControl>
                <FormLabel>What Kind of Alert Did You Recieve? </FormLabel>
                <Select placeholder='Select type' onChange={(event) => solution(event)}>
                    <option value = 'hurricane'> Hurricane</option>
                    <option value = 'shooting'>Shooting</option>
                    <option value = 'theft'>Theft</option>
                    {/* <Input type = 'answer' value = {answer} onChange = {updateAnswer}/> */}
                </Select>
            </FormControl>
            {/* <FormControl>
                <FormLabel> What Kind of Alert Did You Recieve?</FormLabel>
                <Input type = 'genre' value = {answer} onChange = {updateAnswer}/>
            </FormControl> */}
            <br/>
            <div> {soln} </div>
        </div>
    );
}
