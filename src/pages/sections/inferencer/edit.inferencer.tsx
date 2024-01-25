import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, DatePicker, Select } from "antd";
import dayjs from "dayjs";

export const InferencerEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const studentsData = queryResult?.data?.data;

    const { selectProps: userSelectProps } = useSelect({
        resource: "users",
        defaultValue: studentsData?.user?.id,
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">          
                <Form.Item
                    label="Section Name"
                    name={["section_name"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>      
            </Form>
        </Edit>
    );
};
