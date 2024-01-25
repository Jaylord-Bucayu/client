import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker } from "antd";
import dayjs from "dayjs";

export const InferencerEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const paymentsData = queryResult?.data?.data;

    const { selectProps: studentSelectProps } = useSelect({
        resource: "students",
        defaultValue: paymentsData?.student,
        optionLabel: "username",
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
            
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
                    label="Status"
                    name={["status"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                    defaultValue={`${paymentsData?.status}`}
                    style={{ width: 120 }}
                    options={[
                        {value:'pending',label:'Pending'},
                        {value:'success',label:'Success'},
                        {value:'failed',label:'Unpaid'
                    }]}
                    />
                </Form.Item>
                <Form.Item
                    label="Student"
                    name={"student"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...studentSelectProps} />
                </Form.Item>
             
            </Form>
        </Edit>
    );
};
