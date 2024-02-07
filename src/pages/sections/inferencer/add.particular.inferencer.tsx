import React from "react";
import { IResourceComponentsProps, useParsed } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, DatePicker, Select, Typography } from "antd";
import dayjs from "dayjs";
import { IdcardFilled } from "@ant-design/icons";


const { Title } = Typography;
export const AddInferencer: React.FC<IResourceComponentsProps> = () => {
    const {
        id,  
        pathname
      } = useParsed();

    const { formProps, saveButtonProps, queryResult } = useForm({
        resource:`sections/particular/create/${id}`,
      
    });


    return (
        <Create saveButtonProps={saveButtonProps}>
            
            <Form {...formProps} layout="vertical">
            {/* <Title level={5}>Section Name {params.section}</Title> */}
                     
                <Form.Item
                    label="Particular"
                    name={["particulars"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Amount"
                    name={["amount"]}
                    rules={[
                        {
                            required: true,
                            
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Due Date"
                    name={["dueDate"]}
                    rules={[
                        {
                            required: true,
                            
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>

            </Form>
        </Create>
    );
};
