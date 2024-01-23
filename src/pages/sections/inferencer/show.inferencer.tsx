import React from "react";
import { IResourceComponentsProps, useShow } from "@refinedev/core";
import {
    Show,
    TagField,
    TextField,
    EmailField,
    NumberField,
    DateField,
} from "@refinedev/antd";
import { Typography } from "antd";

import { Table , Tag, Collapse , Descriptions} from 'antd';


import type { CollapseProps } from 'antd';
const { Title , Text} = Typography;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const dataSource = [
    {
      key: '1',
      studentName: 'Student Name',
      feeAmount: 500,
      paymentStatus: 'Paid',
    },
    {
      key: '2',
      studentName: 'Jane Doe',
      feeAmount: 600,
      paymentStatus: 'Pending',
    },
    // Add more data as needed
  ];
  
  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'studentName',
      key: 'studentName',
    },
    {
      title: 'Fee Amount',
      dataIndex: 'feeAmount',
      key: 'feeAmount',
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      render: (status:string) => (
        <Tag color={status === 'Paid' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    // Add more columns as needed
  ];



// Sample data for the table



  
  const parentColumns = [
    {
      title: 'Parent Name',
      dataIndex: 'parentName',
      key: 'parentName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    // Add more columns as needed
  ];




export const InferencerShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;
    console.log(record)
    const parentDataSource = [
        {
          key: '1',
          parentName: record?.user.parent?.name,
          email: record?.user.parent?.email,
          mobile: record?.user.parent?.mobile,
        },
        // Add more data as needed
      ];

    console.log(record)
    const items: CollapseProps['items'] = [
        {
          key: '1',
          label: 'Basic Information',
          children:
                        
       <Descriptions column={1} bordered>
      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Full name</Title>}>
        <Text>{record?.user.fullname}</Text>
      </Descriptions.Item>

      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Email</Title>}>
        <Text>{record?.email}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Mobile</Title>}>
        <Text>{record?.mobile}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Created At</Title>}>
        <Text>{record?.createdAt}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Updated At</Title>}>
        <Text>{record?.updatedAt}</Text>
      </Descriptions.Item>
      {/* Add more title-value pairs as needed */}
    </Descriptions>,
        },
        {
          key: '2',
          label: 'Parent Information',
          children: <Table
      
          dataSource={parentDataSource}
          columns={parentColumns}
          pagination={false}
          style={{ overflow:"scroll"}} 
        />,
        },
        {
          key: '3',
          label: 'Assessment',
          children: <p>{text}</p>,
        },
      ];
 
    return (
        <Show isLoading={isLoading}>
            <Collapse items={items} defaultActiveKey={['1']} />  
        </Show>
    );
};
