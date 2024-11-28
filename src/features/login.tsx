import React from 'react';
import {useForm} from "react-hook-form";
import {Button,  Link} from "@nextui-org/react";
import { Input } from '../components/input';
import { useLoginMutation } from '../app/services/allApi';
import { useNavigate } from 'react-router-dom';

type Login = {
    email:string,
    password:string
}

type Props = {
    setSelected: (value:string) => void
}

export const Login : React.FC<Props> = ({setSelected}) => {
    const {
        handleSubmit,
        control,
        formState:{errors}
    } = useForm<Login>({
        mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: {
            email:'',
            password:''
        }
    })

    const [login, { isLoading }] = useLoginMutation()
    const navigate = useNavigate()



    const onSubmit = async (data: Login) => {
          await login(data).unwrap()
          navigate("/")
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <Input
            control={control}
            name='email'
            label ='Email'
            type='email'
            required='Обязательное поле'/>
            <Input
                control={control}
                name='password'
                label ='Пароль'
                type='password'
                required='Обязательное поле'/>
            <p className="text-center text-small">
                Нет аккаунта?{" "}
                <Link
                    size='sm'
                    className='cursor-pointer'
                    onPress={() => setSelected('sign-up')}
                >
                    Зарегистрируйтесь
                </Link>
            </p>
            <div className="flex gap-2 justify-end">
                <Button
                    fullWidth
                    color='primary'
                    type='submit'
                >
                    Войти
                </Button>
            </div>
        </form>
    );
};
