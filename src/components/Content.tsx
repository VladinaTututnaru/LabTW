import React from "react";
import { Layout,Menu } from "antd";
import {StudentProps} from "./Overview"

import Student from "../interface/secondInterface"
const { Content } = Layout;

const StudentContent = ({students}: StudentProps) => {

    return (
        <Content style={{ padding: '0 15px', display:"flex" , minHeight: 280 }}>
                <div className=" ">
                    <table>
                        <tbody>
                            <tr className="header">
                                <td>
                                    <h4>Numele</h4>
                                </td>
                                <td>
                                    <h4>Prenumele</h4>
                                </td>
                                <td>
                                    <h4>Varsta</h4>
                                </td>
                                <td>
                                    <h4>Genul</h4>
                                </td>
                                <td>
                                    <h4>Inaltimea</h4>
                                </td>
                                <td>
                                    <h4>Univer</h4>
                                </td>
                                <td>
                                    <h4>Specialitate</h4>
                                </td>
                                
                            </tr>
                    
                            {students.map(item => {

                                return (
                                    <>
                                    <button key={item.id} onClick={()=>{item.updateField('university', 'ASEM'); console.log(item)}}>set university to ASEM</button>
                                    <StudentItem key={item.id} firstName = {item.personData.firstName}
                                    secondName = {item.personData.secondName}
                                    age = {item.personData.age}
                                    gender = {item.personData.gender}
                                    height = {item.personData.height}
                                    university = {item.university}  
                                    speciality = {item.speciality}
                                    >
                                    </StudentItem>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

        </Content>
    )
}


const StudentItem: React.FC<Student> = ({firstName, secondName, age, height, university, speciality,gender }: Student)=> {
    return<tr>
   <td>
       <h4>{firstName}</h4>
   </td>
   <td>
       <h4>{secondName}</h4>
   </td>
   <td>
       <h4>{age}</h4>
   </td>
   <td>
       <h4>{gender}</h4>
   </td>
   <td>
       <h4>{height}</h4>
   </td>
   <td>
       <h4>{university}</h4>
   </td>
   <td>
       <h4>{speciality}</h4>
   </td>
</tr>
}

export default StudentContent;