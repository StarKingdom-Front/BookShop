import React from 'react'
import FormWrapper from './FormWrapper'

interface AccountData {
    email: string
    password: string
}

type AddressFormProps = AccountData & {
    updateFields: any
}

export default function AccountForm({email, password, updateFields} : AddressFormProps) {
  return (
    <FormWrapper title='Account Creation'>
        <label>Email</label>
        <input type="email" autoFocus required 
        value={email} onChange={e => updateFields({email: e.target.value})}/>
        <label>Password</label>
        <input type="password"  required 
        value={password} onChange={e => updateFields({password: e.target.value})}/>
    </FormWrapper>
  )
}
