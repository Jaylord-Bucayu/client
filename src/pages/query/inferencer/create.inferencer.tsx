import React from "react";
import { IResourceComponentsProps,useCustom, useApiUrl} from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";
import dayjs from "dayjs";

interface PostUniqueCheckResponse {
    isAvailable: boolean;
    data:any
  }

export const InferencerCreate: React.FC<IResourceComponentsProps> = () => {

    const token = localStorage.getItem("refine-auth");

    const apiUrl = useApiUrl();

    const { data, isLoading } = useCustom<PostUniqueCheckResponse>({
      url: `${apiUrl}/currentUser`,
      method: "post",
      config: {
        headers: {
          "Authorization": "Bearer " + token,
        },
        
      },
    });

     

    const { formProps, saveButtonProps, queryResult } = useForm();

    return (
        <Create saveButtonProps={saveButtonProps}>
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
                    label="Description"
                    name={["description"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Subject"
                    name={["subject"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Transaction"
                    name={["transaction"]}  
                    initialValue={data?.data?.data?.id} 
                >
                    <Input defaultValue={data?.data?.data?.id} disabled  />
                </Form.Item>
               
            </Form>
        </Create>
    );
};
