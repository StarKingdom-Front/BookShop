import React, { FormEvent, useState } from 'react'
import useMultiForm from '../../components/useMultiForm/useMultiForm'
import UserFrom from '../../components/useMultiForm/UserFrom'
import AddressForm from '../../components/useMultiForm/AddressForm'
import AccountForm from '../../components/useMultiForm/AccountForm'

type FormData = {
    firstName: string
    lastName: string
    age: string
    street: string
    city: string
    state: string
    zip: string
    email: string
    password: string
}

const INITIAL_DATA: FormData = {
    firstName: '',
    lastName: '',
    age: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    password: '',
}

export default function FormSubmit() {

    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: FormData) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const {steps, currentStep, step, isFirstStep, isLastStep, back, next} = useMultiForm([
        <UserFrom {...data} updateFields={updateFields}/>,
        <AddressForm {...data} updateFields={updateFields}/>,
        <AccountForm {...data} updateFields={updateFields}/>
    ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if(!isLastStep) return next()
        alert('Good job')
    }

  return (
    <div style={{
        position: 'relative',
        background: '#2B2244',
        border: '1px solid black',
        padding: '2rem',
        borderRadius: '.5rem',
        maxWidth: '500px',
        widows: '100%',
        margin: '0 auto',
    }}>
        <form onSubmit={onSubmit}>
            <div style={{
            position: 'absolute',
            top: '.5rem',
            right: '.5rem',
            color: 'black'
            }}>

            {currentStep + 1} / {steps.length}
            </div>

            {step}

            <div style={{marginTop: '1rem',
                        display: 'flex',
                        gap: '.5rem',
                        justifyContent: 'flex-end',
                }}
            >
                {!isFirstStep &&<button type='button' onClick={back}>Back</button>}
                <button type='submit'>
                    {isLastStep ? 'Finish' : 'Next'}
                </button>
            </div>
        </form>
    </div>
  )
}

