import React from "react";
import { IResourceComponentsProps, BaseRecord, useMany } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const InferencerList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: studentData, isLoading: studentIsLoading } = useMany({
        resource: "fees",
        ids: tableProps?.dataSource?.map((item) => item?.student) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    console.log(studentData)

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                {/* <Table.Column dataIndex="id" title="Id" /> */}

                <Table.Column dataIndex={["student","fullname"]} title="Student" />
                <Table.Column dataIndex={["student","section"]} title="Section" />
                <Table.Column
                    dataIndex="amount"
                    title="Amount"
                    render={(amount) => (
                        <span>
                        ₱ {amount} {/* Assuming ₱ is the peso sign */}
                        </span>
                    )}
                    />
                <Table.Column dataIndex="status" title="Status" />
                {/* <Table.Column
                    dataIndex={["student","fullname"]}
                    title="Student"
                    render={(value) =>
                        studentIsLoading ? (
                            <>Loading...</>
                        ) : (
                            studentData?.data?.find((item) => item.id === value)
                                ?.fullname
                        )
                    }
                /> */}
               
                {/* <Table.Column
                    dataIndex={["createdAt"]}
                    title="Created At"
                    render={(value: any) => <DateField value={value} />}
                /> */}
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
