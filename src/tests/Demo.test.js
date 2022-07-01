import { fireEvent, render, screen } from '@testing-library/react'
import React from "react";
import Clicker from "./Clicker";

// fncs ------------------------------------

function sum(a,b){
    return a+b;
}

const sumArray = (arr = []) => {
    return arr.reduce((total, cur) => total + cur)
}

const factorial = (num = 1) => {
    return (num <= 1) ? 1 : num * factorial(num-1)
}


// tests ------------------------------------


describe("dry function tests", () => {
    test("when a and b are integer", () => {
        expect(sum(1,2)).toBe(3)
    })
    
    test("when a and b are string", () => {
        expect(sum("1","2")).toBe("12")
    })
    
    test("when we add an array", () => {
        expect(sumArray([2,5,3,1,4])).toBe(15)
    })
    
    test("factorial of 5 should be 120", () => {
        expect(factorial(5)).toBe(120)
    })
})


describe("clicker component tests", () => {
    test("when open is true, text should be Close", async () => {
        render(<Clicker isOpen={true} />);
        // const {container} = render(<Clicker isOpen={true} />);

        // click button
        fireEvent.click(screen.getByText('Close'));

        // wait for click
        const button = await screen.getByText('Open');
        expect(button.innerHTML).toBe('Open');
    })
})