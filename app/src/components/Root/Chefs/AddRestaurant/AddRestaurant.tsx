import * as React from 'react'
import { useState } from "react";
import { useForm } from 'react-hook-form'

// Styled Components for AddRestaurant
import { Wrapper, AddRestaurantButton, TextField } from './styled-add';
// AddRestaurant Interface
import AddRestaurantProps from './interface-add'

const AddRestaurant = ({ onAddRestaurant }: AddRestaurantProps) => {
    const [isAdding, setIsAdding] = useState(false)
    const { formState: { isValid, isSubmitting }, handleSubmit, register, reset } = useForm({ mode: "onChange" })

    if (!isAdding) {
        return (
            <Wrapper>
                <AddRestaurantButton onClick={() => setIsAdding(true)}>
                    + Add Restaurant
                </AddRestaurantButton>
            </Wrapper>
        )
    }

    const onSubmit = handleSubmit(async ({ name }) => {
        await onAddRestaurant({ name })
        reset()
        setIsAdding(false)
    })

    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
                <TextField autoFocus disabled={isSubmitting} name="name" type="text" ref={register({ required: true })} />
                <button disabled={isSubmitting || !isValid} type="submit">Add</button>
            </form>
        </Wrapper>
    )
}

export default AddRestaurant
