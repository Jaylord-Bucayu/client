import React from "react";
import { IResourceComponentsProps, useShow, useLink } from "@refinedev/core";
import { Show, TagField, TextField, DateField, useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
   
    EmailField,
   } from "@refinedev/antd";
import { Typography,Button,Table } from "antd";

const { Title } = Typography;

export const InferencerShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const Link = useLink();

    const record = data?.data;

    const {tableProps } = useTable({
        resource: "particulars",
        meta: {
            body: { section:  record?.id }
          },
        syncWithLocation: true,
    });
 
  
      
    return (
        <Show isLoading={isLoading}>

<List>
            <Table {...tableProps} rowKey="id">

                <Table.Column
                    dataIndex={["particulars"]}
                    title="Particular"
                    render={(value: any) => <EmailField value={value} />}
                />

                <Table.Column dataIndex="amount" title="Amount" />
                <Table.Column dataIndex="dueDate" title="Due date" />
                <Table.Column
                    dataIndex={["createdAt"]}
                    title="Created At"
                    render={(value: any) => <DateField value={value} />}
                />
               
              </Table>
        </List>

           
            <Title level={5}>Section Name</Title>
            <TextField value={record?.section_name} />
          
            <br></br>
            <Link to={`/sections/add/${record?.id}/${record?.section_name}`} ><Button style={{marginTop:'20px'}}>Add Particular</Button></Link>
        </Show>
    );
};
