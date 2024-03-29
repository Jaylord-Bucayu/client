import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Card, Col, Row } from 'antd';
import { useOne, BaseKey,useList, HttpError } from "@refinedev/core";


interface IProduct {
    students_per_section: [];
    total_fees: number;
    total_sections: number;
    total_students:number;
  }


const Dashboard = () => {

    const { data, isLoading, isError } = useList<IProduct, HttpError>({
        resource: "dashboard",
      });


    const product:any = data?.data;

    console.log({product})


    // Sample data for the number of students per section
    const studentsPerSectionData = [
        { section: 'A', students: 30 },
        { section: 'B', students: 25 },
        { section: 'C', students: 20 },
        { section: 'D', students: 15 }
    ];

    // Sample data for the list of sections
    const sections = ['A', 'B', 'C', 'D'];

    // Dummy data for total fees and number of students
    const totalFees = 10000;
    const totalStudents = studentsPerSectionData.reduce((acc, cur) => acc + cur.students, 0);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Student Portal Dashboard</h2>

            <Row gutter={16}>
    <Col span={8}>
      <Card title="Total Student" bordered={false}>
       {product?.total_students}
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Total Section" bordered={false}>
      {product?.total_sections}
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Total unpaid fees" bordered={false}>
      {product?.total_fees}
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
