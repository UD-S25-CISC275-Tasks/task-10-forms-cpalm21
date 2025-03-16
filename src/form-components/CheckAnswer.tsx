import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function CheckAnswer(): boolean {
        if (answer === expectedAnswer) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <Form.Group controlId="formMovieName">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {CheckAnswer() && <div>✔️</div>}
            {!CheckAnswer() && <div>❌</div>}
        </div>
    );
}
