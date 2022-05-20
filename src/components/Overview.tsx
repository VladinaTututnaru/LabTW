import {Layout} from "antd";
import React from "react";
import type { IStudent } from "../mst/Student.model";
import StudentContent from "./Content"

const { Content } = Layout;
export interface StudentProps{
    students: IStudent[];
}

export const Overview = ({students}:StudentProps) => {
        return(
            <Layout>
              <Content style={{ padding: '0 50px' }}>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                 <StudentContent students= {students}/>
                </Layout>
              </Content>
            </Layout>
        )
}