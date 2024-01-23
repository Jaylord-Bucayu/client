import React from "react";
import { IResourceComponentsProps, BaseRecord, useMany } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    TagField,
    EmailField,
    DateField,
} from "@refinedev/antd";
import { Table, Space, Typography } from "antd";

const { Text } = Typography;

export const InferencerList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: userData, isLoading: userIsLoading } = useMany({
        resource: "users",
        ids: tableProps?.dataSource?.map((item) => item?.user) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });
  
    return (
        <List>
            <Table {...tableProps} rowKey="id">

      
        
                <Table.Column dataIndex="section_name" title="Section Name" />
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
