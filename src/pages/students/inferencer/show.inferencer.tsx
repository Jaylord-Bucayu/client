import React from "react";
import { IResourceComponentsProps, useShow, useOne, useList, BaseKey,useLink } from "@refinedev/core";

import {
    Show,
    TagField,
    TextField,
    EmailField,
    NumberField,
    DateField,
} from "@refinedev/antd";
import { Button, TableProps, Typography } from "antd";

import { Table , Tag, Collapse , Descriptions} from 'antd';


import type { CollapseProps } from 'antd';
const { Title , Text} = Typography;
  
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


  const assessmentsColumns:TableProps<IFee>['columns'] = [
    
    {
      title: 'Ref Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Particular',
      dataIndex: 'particulars',
      key: 'particulars',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
      },
    // Add more columns as needed
  ];




  interface IFee {
    id: number;
    amount: number;
    particulars: string;
    student: number;
 
  }

export const InferencerShow: React.FC<IResourceComponentsProps> = () => {
   

   
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
     const Link = useLink();

    const record = data?.data;


    console.log({record})
    const { data: feesData, isLoading: feesLoading } = useOne<IFee>({
        resource: "students/fees",
        id: record?.user.user.id,
    });

    const parentDataSource  = [
        {
          key: '1',
          parentName: record?.parent?.user?.fullname,
          email: record?.parent?.email,
          mobile: record?.parent?.mobile,
        },
        // Add more data as needed
      ];

      const particulars = feesData?.data || [];

      const assessmentsDataSource = particulars as IFee[];

    const items: CollapseProps['items'] = [
        {
          key: '1',
          label: 'Basic Information',
          children:
                        
       <Descriptions column={1} bordered>
      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Full name</Title>}>
        <Text>{record?.user.user.fullname}</Text>
      </Descriptions.Item>

      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Email</Title>}>
        <Text>{record?.user.email}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Mobile</Title>}>
        <Text>{record?.user.mobile}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Birthdate</Title>}>
        <Text>{record?.user.user.birthdate || 'N/A'}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<Title level={5} style={{ fontSize: '14px' }}>Section</Title>}>
        <Text>{record?.user?.user.section}</Text>
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
          children: <Table<IFee> 
          dataSource={assessmentsDataSource}
          columns={assessmentsColumns}
          pagination={false}
          style={{ overflow:"scroll"}} 
        />,
        },
      ];
 
    return (
        <Show isLoading={isLoading}>
            <Collapse items={items} defaultActiveKey={['1']} /> 
            <Link to={`/particulars/create/${record?.user.user.id}`}><Button style={{marginTop:'15px'}}>Add Particular</Button></Link>     
        </Show>
    );
};
