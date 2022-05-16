import React from 'react'
import logo from './logo.svg'
import './App.css'

import { Layout } from 'antd'
import { HeaderLayout } from './Layouts/HeaderLayout'
import { ContentLayout } from './Layouts/ContentLayout'
function App() {
    return (
        <>
            <Layout className='layout'>
                <HeaderLayout />
                <ContentLayout />
            </Layout>
        </>
    )
}

export default App