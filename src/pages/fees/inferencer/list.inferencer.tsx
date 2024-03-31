import React from "react";
import { IResourceComponentsProps, BaseRecord, useMany ,useApiUrl,useCustom} from "@refinedev/core";
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
     const resource = role == 'admin' ? 'fees' : `fees/student/${user_id}`

    
    const { tableProps } = useTable({
        syncWithLocation: true,
        resource
    });



    // const { data: studentData, isLoading: studentIsLoading } = useMany({
    //     resource: "fees",
    //     ids: tableProps?.dataSource?.map((item) => item?.student) ?? [],
    //     queryOptions: {
    //         enabled: !!tableProps?.dataSource,
    //     },
    // });

   

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
