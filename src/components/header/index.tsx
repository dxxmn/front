import React, { useContext, useState } from 'react';
import { ThemeContext } from "../theme-provider";
import {
    Button,
    Navbar,
    NavbarContent,
    NavbarItem, Tab,
    Tabs,
    Textarea,
} from "@nextui-org/react";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { setChatId } from '../../features/chatSlice';
import { useCreateModelFromFileMutation } from '../../app/services/allApi';

export const Header:React.FC<any> = ({file,selectedType,input,fileName,url,answer,model}) => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('')
    const { theme, toggleTheme } = useContext(ThemeContext)
    const projects = ['dd', 'ddd']
    const [createModelFromFile] = useCreateModelFromFileMutation()

    const onSubmit = async () =>{
        const formData:FormData = new FormData();
        formData.append('file', file); 
        const res = await createModelFromFile({file:formData}).unwrap()
        setChatId(res.chatId)
        console.log(res.chatId)
    }

    return (
        <Navbar maxWidth='full' isBordered>
            <p onClick={() => navigate('/dashboard')} className="text-bold text-inherit">C-SHARK</p>
            <NavbarContent>
                <NavbarItem>
                    <Tabs
                        size='md'
                        selectedKey={selected}
                        onSelectionChange={(key) => { setSelected(key as string); navigate(`/project/:id/${key}`) }}>
                        <Tab key='workflow' title='Workflow' />
                        <Tab key='export' title='Export' />
                    </Tabs>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className='' justify='center'>
                <Textarea value={projects[0]} minRows={1} />
            </NavbarContent>

            <NavbarContent justify='end'>
                <NavbarItem>
                    <Button>Run</Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        onClick={onSubmit}
                    >Save</Button>
                </NavbarItem>
                <NavbarItem
                    className='lg:flex text-3xl cursor-pointer flex justify-end'
                    onClick={() => toggleTheme()}>
                    {theme === 'light' ? <FaRegMoon /> : <LuSunMedium />}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
