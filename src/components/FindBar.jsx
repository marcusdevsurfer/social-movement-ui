import { useState } from 'react'
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"

export const FindBar = ({query, setQuery}) => {
    return (
        <Form className='mb-2'>
            <Form.Group>
                <Stack direction='horizontal'>
                    <Form.Control value={query} placeholder='Busqueda (Ej: 3.5 toneladas, Transportes Flores)' onChange={(e) => setQuery(e.target.value)}></Form.Control>
                </Stack>
            </Form.Group>
        </Form>
    )
}
