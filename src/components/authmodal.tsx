import React, {useContext, useState} from 'react';
import {CgProfile} from "react-icons/cg";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Tab,
    Tabs,
    useDisclosure
} from "@nextui-org/react";
import {Login} from "../features/login";
import {Register} from "../features/register";
import {ThemeContext} from "./theme-provider";

export const Authmodal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [selected, setSelected] = useState('login')
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className='flex justify-center'>
            <Button onClick={onOpen}>
                Вход/регистрация
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                className={`${theme} text-foreground bg-background`}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                            <ModalBody>
                                <Tabs
                                    fullWidth
                                    size='md'
                                    selectedKey={selected}
                                    onSelectionChange={(key) => setSelected(key as string)}>
                                    <Tab key='login' title='Вход'>
                                        <Login setSelected={setSelected}/>
                                    </Tab>
                                    <Tab key='sign-up' title='Регистрация'>
                                        <Register setSelected={setSelected}/>
                                    </Tab>
                                </Tabs>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};
