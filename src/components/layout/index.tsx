import React, { useState } from 'react';
import {Header} from "../header";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    const [file, setFile] = useState<File>();
    const [selectedType,setSelectedType] = useState('document')
    const [input, setInput] = useState('')
    const [fileName, setFileName] = useState('Название вашего файла');
    const [url, setUrl] = useState('')
    const [answer, setAnswer] = useState('')
    const [model, setModel] = useState('llama')
    const [chatId, setChatId] =useState('')


    return (
        <>
            <Header file={file} selectedType={selectedType} input={input} fileName={fileName} url={url} answer={answer} model={model} chatId={chatId}/>
            <Outlet context={{file,selectedType,fileName,url,answer,model,chatId,setFile,setSelectedType,setInput,setFileName,setUrl,setAnswer,setModel,setChatId}}/>
        </>
    );
};
