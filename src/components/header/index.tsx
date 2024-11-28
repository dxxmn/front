import React, { useContext, useState } from "react"
import { ThemeContext } from "../theme-provider"
import {
    Button,
    Navbar,
    NavbarContent,
    NavbarItem,
    Tab,
    Tabs,
    Textarea,
} from "@nextui-org/react"
import { FaRegMoon } from "react-icons/fa"
import { LuSunMedium } from "react-icons/lu"
import { useNavigate } from "react-router-dom"
import { setChatId } from "../../features/chatSlice"
import { useCreateModelFromFileMutation, useCreateModelFromLinkMutation } from "../../app/services/allApi"

export const Header: React.FC<any> = ({
    file,
    selectedType,
    input,
    fileName,
    url,
    answer,
    model,
}) => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState("")
    const { theme, toggleTheme } = useContext(ThemeContext)
    const projects = ["dd", "ddd"]
    const [createModelFromFile] =
        useCreateModelFromFileMutation()
    const [createModelFromLink] =
        useCreateModelFromLinkMutation()
    const chatName = "1"
    const modelName = "1"
    const instruction = "1"
    const embending = "1"

    const onSubmit = async (e: React.FormEvent) => {
        if (selectedType == 'document') {
            e.preventDefault()
            if (!file) {
                alert("Please select a file.")
                return
            }

            try {
                const response = await createModelFromFile({
                    file,
                    chat_name: chatName,
                    model_name: modelName,
                    instruction,
                    embending,
                }).unwrap()

                console.log("Response:", response)
                // Handle success (e.g., navigate to another page, display a message, etc.)
            } catch (err) {
                console.error("Failed to create model:", err)
                // Handle error (e.g., display error message)
            }
        }
        else {
            e.preventDefault()
            if (!file) {
                alert("Please select a file.")
                return
            }

            try {
                const response = await createModelFromLink({
                    url,
                    chat_name: chatName,
                    model_name: modelName,
                    instruction,
                    embending,
                }).unwrap()

                console.log("Response:", response)
                // Handle success (e.g., navigate to another page, display a message, etc.)
            } catch (err) {
                console.error("Failed to create model:", err)
                // Handle error (e.g., display error message)
            }
        }
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
