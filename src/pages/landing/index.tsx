import React, {useContext} from 'react';
import {Button, Card, CardBody, CardHeader, Image, Navbar, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Authmodal} from "../../components/authmodal";
import {FaRegMoon} from "react-icons/fa";
import {LuSunMedium} from "react-icons/lu";
import {useNavigate} from "react-router-dom";
import {ThemeContext} from "../../components/theme-provider";

export const Landing = () => {
    const navigate = useNavigate()
    const {theme, toggleTheme} = useContext(ThemeContext)
    const auth = false
    return (
        <>
            <Navbar maxWidth='full' isBordered>
                <p className="text-bold text-inherit">C-SHARK</p>


                <NavbarContent justify='end'>

                    <NavbarItem>
                        {auth ? <Button>Профиль</Button> :  <Authmodal/>}
                    </NavbarItem>
                    <NavbarItem
                        className='lg:flex text-3xl cursor-pointer flex justify-end'
                        onClick={() => toggleTheme()}>
                        {theme === 'light' ? <FaRegMoon/> : <LuSunMedium/>}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className='flex flex-col max-w-full mx-5 mt-7 justify-center'>
                <div className="flex gap-4 mt-20">
                    <Card className='flex basis-3/4 items-center text-center space-y-4 p-5 '>
                        <CardBody>
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                        </CardBody>
                    </Card>
                    <Image
                        width={600}
                        height={500}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreUYIuzFFaKuG9tnw_pL6LCmJbi12B85GxA&s"
                    />
                </div>
                <div className="flex justify-center mt-10">
                    <Button className='flex w-52' onClick={() => navigate('/dashboard')}>
                        Создать ассистента
                    </Button>
                </div>
            </div>
        </>
    );
};
