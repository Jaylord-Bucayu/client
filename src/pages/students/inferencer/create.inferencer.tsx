import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, DatePicker, Select } from "antd";
import dayjs from "dayjs";



export const CreateInferencer: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm({
        resource:"students/create"
    });

    const { queryResult: sectionSelectProps } = useSelect({
        resource: "sections",
    });

 

  
    const options = Array.isArray(sectionSelectProps?.data?.data)
    ? sectionSelectProps?.data?.data.map(item => ({
        value: item.section_name,
        label: item.section_name,
      }))
    : [];

    console.log(options)
    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">

            <Form.Item
                    label="First name"
                    name={["firstname"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last name"
                    name={["lastname"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name={["email"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mobile"
                    name={["mobile"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

              
                <Form.Item
                    label="Date of Birth"
                    name={["birthdate"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => ({
                        value: value ? dayjs(value) : undefined,
                    })}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    label="Gender"
                    name={["gender"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                <Select
                    defaultValue="Select Gender"
                    style={{ width: 120 }}
                    options={[{value: 'male', label: 'Male'},{value: 'female', label: 'Female'}]}
                    />
                </Form.Item>

                <Form.Item
                    label="Section"
                    name={["section"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                <Select
                    defaultValue="Select Section"
                    style={{ width: 120 }}
                    options={options}
                    />
                </Form.Item>

                <Form.Item
                    label="Parent First name"
                    name={["parent", "firstname"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Parent Last name"
                    name={["parent", "lastname"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name={["parent","email"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mobile"
                    name={["parent","mobile"]}
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
