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

            <Table.Column
                    dataIndex={["user", "studentId"]}
                    title="Student ID"
                    render={(value: any) => <Text>{value}</Text>}
                />


            <Table.Column
                    dataIndex={["user", "fullname"]}
                    title="Name"
                    render={(value: any) => <Text>{value}</Text>}
                />

                <Table.Column
                    dataIndex={["user","section"]}
                    title="Section"
                    render={(value: any) => <EmailField value={value} />}
                />

                <Table.Column
                    dataIndex={["email"]}
                    title="Email"
                    render={(value: any) => <EmailField value={value} />}
                />
                <Table.Column dataIndex="mobile" title="Mobile" />
               
               
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
