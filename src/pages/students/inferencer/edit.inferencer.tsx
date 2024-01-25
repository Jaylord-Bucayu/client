import React from "react";
import { IResourceComponentsProps, useOne, useParsed } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, DatePicker ,Select} from "antd";
import dayjs from "dayjs";

export const InferencerEdit: React.FC<IResourceComponentsProps> = () => {
    const { saveButtonProps, queryResult ,formProps } = useForm();

   
    const {
        id,
        pathname
      } = useParsed();


    const studentsData = queryResult?.data?.data;

    console.log(studentsData)

    // const { data: feesData, isLoading: feesLoading } = useOne({
    //     resource: `students/fees`,
        
    // });

    const { queryResult: sectionSelectProps } = useSelect({
        resource: "sections",
    });

      
    const options = Array.isArray(sectionSelectProps?.data?.data)
    ? sectionSelectProps?.data?.data.map(item => ({
        value: item.section_name,
        label: item.section_name,
      }))
    : [];


    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                {/* <Form.Item
                    label="Id"
                    name={["id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input readOnly disabled />
                </Form.Item> */}

                <Form.Item
                    label="Student ID"
                    name={["user","studentId"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                   <Input readOnly disabled />
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
                    label="Firstname"
                    name={["user","firstname"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                 <Form.Item
                    label="Lastname"
                    name={["user","lastname"]}
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
                    name={["user","birthdate"]}
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
                    label="Section"
                    name={["section"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                <Select
                    defaultValue={`${studentsData?.user.section}`}
                    style={{ width: 120 }}
                    options={options}
                    />
                </Form.Item>
                
               
            </Form>
        </Edit>
    );
};
