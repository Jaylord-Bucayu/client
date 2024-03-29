import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Card, Col, Row,Space  } from 'antd';
import { useList, HttpError } from "@refinedev/core";


interface IProduct {
    students_per_section: [];
    total_fees: number;
    total_sections: number;
    total_students:number;
  }


const Dashboard = () => {

    
    const { data } = useList<IProduct, HttpError>({
        resource: "dashboard",
      });


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const product:any = data?.data;

    console.log({product})


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Student Portal Dashboard</h2>

            <Row gutter={16}>
    <Col span={8}>
      <Card title="Total Students" bordered={false}>
      <Space size="large" style={{ width: '100%', justifyContent: 'space-between' }}>
     <h1>{product?.total_students}</h1>
       <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/students.png" alt="students"/>
       </Space>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Total Sections" bordered={false}>
      <Space size="large" style={{ width: '100%', justifyContent: 'space-between' }}>
            <h1> {product?.total_sections}</h1>
            <img width="94" height="94" src="https://img.icons8.com/fluency/94/course-assign.png" alt="course-assign"/>
        </Space>
     
      
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Total Unpaid Fees" bordered={false}>
      <Space size="large" style={{ width: '100%', justifyContent: 'space-between' }}>
     <h1> {product?.total_fees}</h1>
     <img width="94" height="94" src="https://img.icons8.com/external-flaticons-flat-flat-icons/94/external-fees-automotive-dealership-flaticons-flat-flat-icons.png" alt="external-fees-automotive-dealership-flaticons-flat-flat-icons"/>
      </Space>
     
      </Card>
    </Col>
  </Row>



            {/* Dashboard Components */}
            <div style={{margin:"25px 0px 15px 0px"}}>
            <Card title="Number of Students per Section" bordered={false}>
            <div className="grid grid-cols-2 gap-4">
                {/* Bar Chart */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={product?.students_per_section}>
                            <XAxis dataKey="section" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="students" fill="#3182CE" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                
            </div>
            </Card>
            </div>
        </div>
    );
}

export default Dashboard;
