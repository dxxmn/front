import { Card, CardBody, Select, SelectItem, Textarea } from '@nextui-org/react';
import React, { useState } from 'react';

export const Export = () => {
    const colors = ['Blue', 'Purple']
    const [color, setColor] = useState('')


    return (
        <div className='flex flex-row max-w-full mx-5 mt-5 min-h-[87vh]'>
            <div className='flex basis-1/4 mr-5'>
                <Card className='flex w-full'>
                    <CardBody>
                        <div className='flex flex-col gap-3'>
                            <Card>
                                <CardBody>
                                    <Select
                                        defaultSelectedKeys={[color]}
                                        label="Select an color"
                                        className="max-w-xs"
                                        onChange={(e) => setColor(e.target.value)}
                                    >
                                        {colors.map((color) => (
                                            <SelectItem key={color}>
                                                {color}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </CardBody>
                            </Card>
                            
                        </div>
                    </CardBody>
                </Card>

            </div>
            <div className='flex flex-col basis-3/4'>
                <Card className='flex w-full mb-3'>
                    <CardBody>
                        <Textarea value={'http://localhost:5173/chat'} isReadOnly minRows={1} maxRows={1}/>
                    </CardBody>
                </Card>
                <Card className='flex w-full'>
                    <CardBody>

                        <div >
                            <iframe src='http://localhost:5173/chat' className='overflow-x-clip' width={1000} height={580}></iframe>
                        </div>
                    </CardBody>
                </Card>

            </div>
        </div>
    );
};
