import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<string>("3");
    const [attemptsRequest, setAttemptsRequest] = useState<string>("");

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsRequest(event.target.value);
    }

    function useAttempt(): void {
        const currentAttempt = parseInt(attemptsLeft, 10);
        if (currentAttempt > 0) {
            setAttemptsLeft((currentAttempt - 1).toString());
        }
    }

    function gainAttempt(): void {
        const currentAttempt = parseInt(attemptsLeft, 10);
        const currentRequest = parseInt(attemptsRequest, 10);
        const addition = currentAttempt + currentRequest;
        if (attemptsRequest) {
            setAttemptsLeft(addition.toString());
        }
    }

    return (
        <div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Add Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequest}
                    onChange={updateAttempts}
                />
            </Form.Group>
            <div>Attempts {attemptsLeft}</div>
            <div>
                <button
                    onClick={useAttempt}
                    disabled={parseInt(attemptsLeft, 10) <= 0}
                >
                    use
                </button>
                <button onClick={gainAttempt}>Gain</button>
            </div>
        </div>
    );
}
