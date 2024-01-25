import React from "react";
import { IResourceComponentsProps, useShow, useLink } from "@refinedev/core";
import { Show, TagField, TextField, DateField } from "@refinedev/antd";
import { Typography,Button } from "antd";

const { Title } = Typography;

export const InferencerShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const Link = useLink();

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
           
            <Title level={5}>Section Name</Title>
            <TextField value={record?.section_name} />
          
            <br></br>
            <Link to={`/sections/add/${record?.id}/${record?.section_name}`} ><Button style={{marginTop:'20px'}}>Add Particular</Button></Link>
        </Show>
    );
};
