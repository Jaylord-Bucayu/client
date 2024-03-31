import React from "react";
import { IResourceComponentsProps, BaseRecord,useApiUrl,useCustom } from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    useModalForm
} from "@refinedev/antd";
import { Table, Space ,Modal,Form,Input, Select} from "antd";


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

 
  
    const user_id = data?.data?.data?.id


    const { tableProps } = useTable({
        resource:`students/fees/${user_id}`,
        syncWithLocation:true
    });



    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
  


    

    const {
        modalProps: editModalProps,
        formProps: editFormProps,
        show: editModalShow,
      } = useModalForm({
        action: "edit",
        warnWhenUnsavedChanges: true,
      });

      const {
        modalProps: showModalProps,
        formProps: showFormProps,
        show: showModalShow,
      } = useModalForm({
        action: "clone",
        warnWhenUnsavedChanges: true,
      });

      const totalAmount = tableProps?.dataSource?.reduce((total, item) => total + item.amount, 0) || 0;

    return (    
        <>
        <List>

            <Table {...tableProps} rowKey="id" footer={() => (<div><h3>Total fee: ₱ {totalAmount} </h3> </div>)}>x
         
            <Table.Column dataIndex="particulars" title="Particular" />
            <Table.Column dataIndex="amount" title="Amount" />
            <Table.Column dataIndex="status" title="Status" />
            <Table.Column dataIndex={["student","firstname"]} title="Student Name" />
            
                {/* <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    key="actions"
                    render={(_, record:BaseRecord) => (
                        <Space>
                           <EditButton hideText size="small" recordItemId={record._id} onClick={() => editModalShow(record._id)} />
                           <ShowButton hideText size="small" recordItemId={record._id} onClick={() => showModalShow(record._id)}  />
                        </Space>
                    )}
                /> */}
               
       
                
            </Table>

          
            
        </List>

        {/* <Modal {...showModalProps}>
         <Form {...showFormProps} layout="vertical">
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
       </Modal> */}

       </>
    );
};
