import React, {useState} from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Tab, Tabs
} from "@nextui-org/react";
import {Login} from "../../features/login";
import {Register} from "../../features/register";

export const NewAssistant = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [selected, setSelected] = useState('login')
    return (
        <>
            <Button onPress={onOpen} color="primary">Open Modal</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
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
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
