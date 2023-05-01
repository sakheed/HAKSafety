import React, { useState } from "react";
import { Button, SimpleGrid } from "@chakra-ui/react";
import {Movie} from "./Movie";


const MOVIES = [
    "Minions",
    "Toy Story",
    "Toy Story 2",
    "Toy Story 3",
    "Cars",
    "Aladdin",
    "Tangled",
    "Frozen",
    "Wreck-It Ralph",
    "Moana",
];


export function CreateList(): JSX.Element {
    const [allOptions] = useState<string[]>(MOVIES);
    const [usermainList, setusermainList] = useState<string[]>([]);
    const [userlistbyGenre, setuserGenreList] = useState<string[]>([]);

    function addMovieTomainList(newMovie: string) {
        if (!usermainList.includes(newMovie)){
            setusermainList([...usermainList, newMovie]);

        }
    }

    function clearmainList() {
        setusermainList([]);
    }

    function addMovieTogenreList(newMovie: string) {
        if (!userlistbyGenre.includes(newMovie)){
            setuserGenreList([...userlistbyGenre, newMovie]);

        }
    }

    function cleargenreList() {
        setuserGenreList([]);
    }

    return (
        <div>
            <h1>Create A List </h1>
            <SimpleGrid columns={2} spacing={10}>
                <div>
                    <div>
                        {allOptions.map((option: string) => (
                            <div key={option}>
                Add To Main
                                <Button onClick={() => addMovieTomainList(option)}>{option}</Button>
                            </div>
                        ))}
                    </div>
                    <div>
                        {allOptions.map((option: string) => (
                            <div key={option}>
                Add To Genre List
                                <Button onClick={() => addMovieTogenreList(option)}>{option}</Button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        <strong>My Main List:</strong>
                        {usermainList.map((movie: string) => (
                            <li key={movie}>{movie}</li>
                        ))}
                        <Button onClick={clearmainList}>Clear List</Button>
                    </div>
                    <div>
                        <strong>My Genre List:</strong>
                        {userlistbyGenre.map((movie: string) => (
                            <li key={movie}>{movie}</li>
                        ))}
                        <Button onClick={cleargenreList}>Clear List</Button>
                    </div>
                </div>
            </SimpleGrid>
        </div>
    );
}