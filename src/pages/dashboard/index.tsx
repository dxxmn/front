import React, { useContext } from 'react';
import { Button, Card, CardBody, Navbar, NavbarContent, NavbarItem, Tab, Tabs, Textarea } from "@nextui-org/react";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { ThemeContext } from "../../components/theme-provider";
import { useNavigate } from "react-router-dom";
import { Chat, useGetAllChatsQuery } from '../../app/services/allApi';

export const Dashboard = () => {
    const {data} = useGetAllChatsQuery()
    const { theme, toggleTheme } = useContext(ThemeContext)
    const navigate = useNavigate()

const handleNewProject = () => {
    try{
    }
    catch{

    }
}

    return (
        <div>
            <Navbar maxWidth='full' isBordered>
                <p className="text-bold text-inherit">C-SHARK</p>
                <NavbarContent>

                </NavbarContent>

                <NavbarContent className='mr-20' justify='center'>
                    Projects
                </NavbarContent>

                <NavbarContent justify='end'>
                    <NavbarItem>
                        <Button onClick={() => navigate('/project/:id/workflow')}>
                            New Project
                        </Button>
                    </NavbarItem>
                    <NavbarItem
                        className='lg:flex text-3xl cursor-pointer flex justify-end'
                        onClick={() => toggleTheme()}>
                        {theme === 'light' ? <FaRegMoon /> : <LuSunMedium />}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className='flex flex-row max-w-full mx-5 justify-center'>
                <div className='flex flex-col max-w-full mx-5 basis-1/2'>
                    {data && data?.length>0 ? data.map((a) =>
                        <Button className='basis-1/2 mt-5 p-2' onClick={() => navigate('/project/:id/workflow')}>
                            <p>{a.chat_name}</p>
                        </Button>
                    
                    ):null}
                </div>
            </div>
        </div>
    );
};
