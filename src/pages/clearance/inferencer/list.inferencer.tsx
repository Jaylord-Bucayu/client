import React from "react";
import { IResourceComponentsProps, BaseRecord } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const InferencerList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        resource:`students/fees/65aa0d2400e65fec90b673f9`
    });

    console.log(tableProps)
    return (
        <List>
            <Table {...tableProps} rowKey="id">

            <Table.Column dataIndex="particulars" title="Particular" />
            <Table.Column dataIndex="amount" title="Amount" />
            <Table.Column dataIndex="status" title="Status" />
            <Table.Column dataIndex={["student","firstname"]} title="Section Name" />
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            {/* <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            /> */}
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            {/* <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            /> */}
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
