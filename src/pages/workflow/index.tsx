import React, { useRef, useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Select,
    SelectItem,
    Tab,
    Tabs,
    Textarea
} from "@nextui-org/react";
import { useCreateModelFromFileMutation } from '../../app/services/allApi';
import { fileURLToPath } from 'url';
import { AnyAaaaRecord } from 'dns';
import { useDispatch } from 'react-redux';
import { setChatId } from '../../features/chatSlice';
import { setFile } from '../../features/fileSlice';
import { useOutletContext } from 'react-router-dom';

export const Workflow = () => {
    const models = ['llama', 'ChatGPT', 'YaGPT']
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch()
    const {file,selectedType,fileName,url,answer,model,chatId,setFile,setSelectedType,setInput,setFileName,setUrl,setAnswer,setModel,setChatId} = useOutletContext<any>();


    const [createModelFromFile] = useCreateModelFromFileMutation()

    const handleFileUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setFile(file)
            console.log('Выбранный файл:', file);

        }
    };

    return (
        <div className='flex flex-row max-w-full mx-5 mt-5 min-h-[87vh]'>
            <div className="flex flex-col gap-7 mr-5 basis-1/2">
                <Card className='basis-1/3 p-2'>
                    <CardBody>
                        <p className='mb-2 ml-2'>Input</p>
                        <Textarea size='lg' minRows={4} placeholder='Input promp' onChange={(e) => setInput(e.target.value)}></Textarea>
                    </CardBody>
                </Card>
                <Card className='basis-1/3 p-2'>
                    <CardBody>
                        <Tabs
                            size='md'
                            onSelectionChange={(key) => { setSelectedType(key as string) }}>
                            <Tab key='document' title='Document'>
                                <div className='flex flex-row'>
                                    <Button className='text-[16px] p-6 mr-3' onClick={handleFileUploadClick}>
                                        Загрузить файл
                                    </Button>
                                    <input
                                        id=''
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                    <Card>
                                        <CardBody>
                                            <p className='mx-1'>{fileName}</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Tab>
                            <Tab key='url' title='Url'>
                                <Textarea size='lg' minRows={1} onChange={(e) => setUrl(e.target.value)} />
                            </Tab>
                        </Tabs>


                    </CardBody>
                </Card>
                <Card className='basis-1/3 p-2'>
                    <CardBody >
                        <p className='mb-2 ml-2'>Ouput</p>
                        <Textarea isReadOnly size='lg' minRows={4} placeholder='Answer'></Textarea>
                    </CardBody>
                </Card>
            </div>
            <div className="flex flex-col gap-7 basis-1/2">
                <Card className='h-full p-2'>
                    <CardBody>
                        <p className='mb-4 ml-2'>AI Model</p>
                        <Select
                            defaultSelectedKeys={['llama']}
                            label="Select an model"
                            className="max-w-xs"
                            onChange={(e) => setModel(e.target.value)}
                        >
                            {models.map((model) => (
                                <SelectItem key={model}>
                                    {model}
                                </SelectItem>
                            ))}
                        </Select>
                        <p className='mb-2 mt-4 ml-2'>Instructions</p>
                        <Textarea className='mb-4' size='lg' minRows={4} placeholder=''></Textarea>
                    </CardBody>
                </Card>

            </div>
        </div>
    );
};

