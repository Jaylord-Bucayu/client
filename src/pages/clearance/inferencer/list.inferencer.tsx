import React from "react";
import { IResourceComponentsProps, BaseRecord } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    useModalForm
} from "@refinedev/antd";
import { Table, Space ,Modal,Form,Input, Select} from "antd";

export const InferencerList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        resource:`students/fees/65aa0d2400e65fec90b673f9`
    });

    const {
        modalProps: editModalProps,
        formProps: editFormProps,
        show: editModalShow,
      } = useModalForm({
        action: "edit",
        warnWhenUnsavedChanges: true,
      });

    return (    
        <>
        <List>
            <Table {...tableProps} rowKey="id">

            <Table.Column dataIndex="particulars" title="Particular" />
            <Table.Column dataIndex="amount" title="Amount" />
            <Table.Column dataIndex="status" title="Status" />
            <Table.Column dataIndex={["student","firstname"]} title="Student Name" />
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
                           <EditButton hideText size="small" recordItemId={record.id} onClick={() => editModalShow(record.id)} />
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
         <Modal {...editModalProps}>
         <Form {...editFormProps} layout="vertical">
           <Form.Item
             label="Amount"
             name="amount"
             rules={[
               {
                 required: true,
               },
             ]}
           >
             <Input />
           </Form.Item>
           <Form.Item
             label="Status"
             name="status"
             rules={[
               {
                 required: true,
               },
             ]}
           >
             <Select
               options={[
                 {
                   label: "Published",
                   value: "published",
                 },
                 {
                   label: "Draft",
                   value: "draft",
                 },
                 {
                   label: "Rejected",
                   value: "rejected",
                 },
               ]}
             />
           </Form.Item>
         </Form>
       </Modal>

       </>
    );
};
