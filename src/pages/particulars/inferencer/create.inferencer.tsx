import React from "react";
import { IResourceComponentsProps, useParsed } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { IdcardFilled } from "@ant-design/icons";

type MyParams = {
  id: string;
};



export const CreateInferencer: React.FC<IResourceComponentsProps> = () => {
    const {
        id,
        pathname
      } = useParsed<MyParams>();

    const { formProps, saveButtonProps, queryResult } = useForm({
        resource:`students/particulars/create/${id}`,
      
    });



    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">

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

            </Form>
        </Create>
    );
};
