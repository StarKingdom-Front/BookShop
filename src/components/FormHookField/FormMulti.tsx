import React, { useState } from 'react'

import style from './FormMulti.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IForm } from '../../modals'




export default function FormMulti() {

    const [formStep, setFormStep] = useState(0)

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IForm>({
        mode: 'all',
    })

    const onSubmit:SubmitHandler<IForm> = data => console.log(data)

    const completeFormStep = () => {
        setFormStep(cur => cur + 1)
      }
    
    const renderButton = () => {
    if(formStep > 2) {
        return undefined
        } else if (formStep === 2){
            return (
            <button className={style.btn}
                disabled={!isValid}
                onClick={completeFormStep}
                >
                    Подписаться
            </button>
        )
        } else {
            return (
            <button className={style.btn}
                disabled={!isValid}
                onClick={completeFormStep}
                >
                    Далее
            </button>
            )
        }
    }

  return (
    <div className='_container'>
        <div className={style.form__body}>
          <h2>
              Подписка на рассылку
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              {formStep === 0 && (<section>
                <h3>
                  Ведите "Имя и Фамилию"
                </h3>
                <input placeholder='Имя' type="text" 
                  {...register('name', {
                      required: {
                          message: 'Заполните пол "Имя"',
                          value: true
                      }
                  })}
                />
                {errors.name && (
                  <p style={{color: 'red'}}>{errors.name.message}</p>
                )}
                <input placeholder='Фамилия' type="text"  {...register('lastName', {
                      required: {
                          message: 'Заполните пол "Фамилия"',
                          value: true
                      }
                  })}
                />
                {errors.lastName && (
                  <p style={{color: 'red'}}>{errors.lastName.message}</p>
                )}
                  
              </section>)}

              {formStep === 1 && (<section>
                <h3>
                  Введите Ваш email
                </h3>
                <input  {...register('email',
                  {
                      required: 'Email неверный!',
                      pattern: {
                      value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                      message: 'Введите email'
                  },
                  })}
                  placeholder='Email'
              />
                      {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
              </section>)}

              {formStep === 2 && (<section>
                <h3>
                  Политика конфеденциальности
                </h3>
                <div className={style.check}>
                  <input
                    type="checkbox"
                    {...register('a1', {
                        required: true
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a href="/">
                      Terms and Conditions
                    </a>
                    .
                  </span>
              </div>
              
              <div className={style.check}>
                <input
                  type="checkbox"
                  {...register('a2', {
                      required: true
                  })}
                />
                <span>
                  I accept the{" "}
                  <a href="/">
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>
                  
              </section>)}

              {formStep === 3 && (
              <section>
                  <h2>Подписка оформлена</h2>
              </section>)}


              {renderButton()}
          </form>
        </div>
    </div>
  )
}
