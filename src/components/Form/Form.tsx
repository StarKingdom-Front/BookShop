import React, { useState } from 'react'
import style from './Form.module.css'

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {IForm, IOption} from '../../modals'
import ReactSelect from 'react-select';

const options:IOption[] = [{
    value: 'russia',
    label: 'Russia'
  },
  {
    value: 'usa',
    label: 'USA'
  },
  {
    value: 'china',
    label: 'China'
  },
  ]
  
  const getValue = (value:string) => 
    value ? options.find((option) => option.value === value) : ''

  
export default function Form() {

    const {register, 
        handleSubmit, 
        formState: {errors},
        reset,
        control
    } = useForm<IForm>({
      mode: 'onSubmit'
    })
    
      const onSubmit:SubmitHandler<IForm> = (data) => {
        alert(`Your name ${data.name}`)
        reset()
      }

  return (
    <div style={{
        margin: '0 auto',
        maxWidth: '400px'
    }}>
        <h2>Form</h2>
        <div >

<form style={{display: 'flex', flexDirection: 'column', gap: '10px'}} onSubmit={handleSubmit(onSubmit)}>
          <input className={style.input} {...register('name',
          {
            required: 'Name is require field!',
          })}
          placeholder='Name'
           type="text" />
           {errors.name && <div style={{color:'red'}}>{errors.name.message}</div>}

           <input className={style.input} {...register('email',
          {
            required: 'Email is require field!',
            pattern: {
              value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
              message: 'Please enter valid email'
            },
          })}
          placeholder='Email'
   />
           {errors.email && <div style={{color:'red'}}>{errors.email.message}</div>}

          <Controller 

            control={control}
            name='address.country'
            rules={{
              required: 'Country is require!'
              }
            }
            render={({field: {onChange, value}, fieldState: {error} }) => (
              <div>
                <ReactSelect
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder='Countries'
                    options={options}
                    value={getValue(value)}
                    onChange={(newValue) => onChange((newValue as IOption).value)}
                />
                {error && 
                <div style={{color:'red'}}>{error.message}
                </div>}
              </div>
            )}
            />
            

          <div>
              <button className={style.form__btn}>Send</button>
          </div>
      </form>


        </div>
    </div>
  )
}
