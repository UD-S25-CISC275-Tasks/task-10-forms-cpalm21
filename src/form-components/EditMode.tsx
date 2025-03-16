import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setisStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent() {
        setisStudent(!isStudent);
    }

    function edit(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-happy-check"
                checked={editMode}
                onChange={edit}
            />

            {!editMode ?
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            :   <div>
                    <Form.Group controlId="formMovieName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            }
        </div>
    );
}
