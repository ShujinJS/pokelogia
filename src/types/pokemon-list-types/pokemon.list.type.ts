import React from "react";

export type GetResult = {
    count: string;
    next: string;
    previous?: string;
    results: [Pokemon]
}

export type Pokemon = {
    name: string;
    url: string
}