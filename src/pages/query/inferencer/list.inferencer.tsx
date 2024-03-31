import React from "react";
import { IResourceComponentsProps, BaseRecord,useApiUrl,useCustom} from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";


interface PostUniqueCheckResponse {
    isAvailable: boolean;
    data:any
  }

export const InferencerList: React.FC<IResourceComponentsProps> = () => {
    
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

    const role = localStorage.getItem("role");
   
    const user_id = data?.data?.data?.id
    const resource = role == 'admin' ? 'query' : `query/parent/${user_id}`
    
    const { tableProps } = useTable({
        syncWithLocation: true,
        resource
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Id" />
                {/* <Table.Column dataIndex="amount" title="Amount" /> */}
                <Table.Column dataIndex="status" title="Status" />
                <Table.Column dataIndex="description" title="Description" />
                <Table.Column dataIndex="subject" title="Subject" />
                <Table.Column dataIndex="transaction" title="Transaction" />
                <Table.Column
                    dataIndex={["createdAt"]}
                    title="Created At"
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex={["updatedAt"]}
                    title="Updated At"
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
