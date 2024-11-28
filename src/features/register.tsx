import React from 'react';
import {Input} from "../components/input";
import {Button, Link} from "@nextui-org/react";
import {useForm} from "react-hook-form";
import { useRegisterMutation } from '../app/services/allApi';

type Props = {
    setSelected: (value:string) => void
}

type Register = {
    email: string,
    password:string,
}

export const Register : React.FC<Props> = ({setSelected}) => {
    const {
        handleSubmit,
        control,
        formState:{errors}
    } = useForm<Register>({
        mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: {
            email:'',
            password:'',
        }
    })

    const [register] = useRegisterMutation()

    const onSubmit = async (data: Register) => {
        await register(data).unwrap()
        setSelected("login")
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <Input
                control={control}
                name='email'
                label='Email'
                type='email'
                required='Обязательное поле'/>
            <Input
                control={control}
                name='password'
                label='Пароль'
                type='password'
                required='Обязательное поле'/>
            <p className="text-center text-small">
                Уже есть аккаунт?{" "}
                <Link
                    size='sm'
                    className='cursor-pointer'
                    onPress={() => setSelected('login')}
                >
                    Войдите
                </Link>
            </p>
            <div className="flex gap-2 justify-end">
                <Button
                    fullWidth
                    color='primary'
                    type='submit'
                >
                    Зарегистрироваться
                </Button>
            </div>
        </form>
    );
};
