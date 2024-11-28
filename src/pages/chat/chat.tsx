import { Button, Card, CardBody, Navbar, NavbarContent, NavbarItem, Textarea, User } from '@nextui-org/react';
import React, { useContext } from 'react';
import { FaRegMoon, FaRegUserCircle, FaRobot } from 'react-icons/fa';
import { LuSunMedium } from 'react-icons/lu';
import { ThemeContext } from '../../components/theme-provider';

export const Chat = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const messages = [{ ai: "asdasdsd", user: "asddfgdh" },
    { ai: "hryjhfjg", user: "qrewter" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    { ai: "fasadaa", user: "tryetur" },
    ]


    return (
        <div className="overflow-x-hidden"  >
            <Navbar maxWidth="full" isBordered className='fixed top-0 left-0 '>
                <p className="font-bold text-inherit">C-SHARK</p>
                <NavbarContent justify="end">
                    <NavbarItem
                        className="lg:flex text-3xl cursor-pointer flex justify-end"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? <FaRegMoon /> : <LuSunMedium />}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <div className="flex flex-col max-w-full mx-5 mt-5 min-h-screen relative">
                <div className="flex max-w-full mt-5">
                    <div className="w-full">
                        {messages.map((m, index) => (
                            <div key={index} className="flex flex-col w-full mt-10">
                                
                                <div className="flex justify-end w-full mb-6">
                                    <Card className=" flex w-full max-w-2xl h-32">
                                        <div className="flex items-center gap-2">
                                            <FaRegUserCircle className="size-14 p-2" />
                                            <p>You</p>
                                        </div>
                                        <CardBody className="flex-1 text-xl">
                                            {m.user}
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="flex justify-start w-full">
                                    <Card className=" flex w-full max-w-2xl h-32">
                                        <div className="flex items-center gap-2">
                                            <FaRobot className="size-14 p-2" />
                                            <p>Assistant</p>
                                        </div>
                                        <CardBody className="flex-1 text-xl">
                                            {m.ai}
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Фиксированная нижняя панель ввода */}
                <div className="fixed bottom-0 left-0 w-full z-10 ">
                    <div className="flex justify-center px-5 py-4">
                        <div className="w-full max-w-4xl">
                            <Card>
                                <CardBody className=" flex flex-row items-center">
                                    <Textarea size="lg" minRows={3}  className="flex-1 text-lg" />
                                    <Button size="lg" className="ml-4 text-lg ">
                                        Задать вопрос
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};