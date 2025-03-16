import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("");

    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={changeColor}
                id="response-good"
                label={
                    <span
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "2px solid red",
                            display: "inline-block",
                        }}
                    >
                        red
                    </span>
                }
                value="red"
                color="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={changeColor}
                id="response-good"
                label={
                    <span
                        style={{
                            backgroundColor: "blue",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "2px solid blue",
                            display: "inline-block",
                        }}
                    >
                        blue
                    </span>
                }
                value="blue"
                color="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={changeColor}
                id="response-good"
                label={
                    <span
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "2px solid green",
                            display: "inline-block",
                        }}
                    >
                        green
                    </span>
                }
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={changeColor}
                id="response-good"
                label={
                    <span
                        style={{
                            backgroundColor: "orange",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "2px solid orange",
                            display: "inline-block",
                        }}
                    >
                        orange
                    </span>
                }
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={changeColor}
                id="response-good"
                label={
                    <span
                        style={{
                            backgroundColor: "purple",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "2px solid purple",
                            display: "inline-block",
                        }}
                    >
                        purple
                    </span>
                }
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={changeColor}
                id="response-good"
                label={
                    <span
                        style={{
                            backgroundColor: "cyan",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "2px solid cyan",
                            display: "inline-block",
                        }}
                    >
                        cyan
                    </span>
                }
                value="cyan"
                checked={color === "cyan"}
            />

            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={changeColor}
                id="response-good"
                label={
                    <span
                        style={{
                            backgroundColor: "magenta",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "2px solid magenta",
                            display: "inline-block",
                        }}
                    >
                        magenta
                    </span>
                }
                value="magenta"
                checked={color === "magenta"}
            />

            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={changeColor}
                id="response-good"
                label={
                    <span
                        style={{
                            backgroundColor: "white",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "2px solid white",
                            display: "inline-block",
                        }}
                    >
                        white
                    </span>
                }
                value="white"
                checked={color === "white"}
            />

            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={changeColor}
                id="response-good"
                label={
                    <span
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "2px solid black",
                            display: "inline-block",
                        }}
                    >
                        black
                    </span>
                }
                value="black"
                checked={color === "black"}
            />
            {/* Box with background color matching selected color */}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color || "transparent",
                    color: color === "black" ? "white" : "black", // Ensures black text is readable
                    padding: "10px",
                    marginTop: "10px",
                    border: "1px solid black",
                    width: "200px",
                    textAlign: "center",
                }}
            >
                {color ? `You have chosen ${color}` : "Pick a color"}
            </div>
        </div>
    );
}
