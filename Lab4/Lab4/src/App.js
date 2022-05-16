import React, { useEffect } from 'react'
import './App.css'

import { Layout } from 'antd'
import { useRootStore } from './index'
import { HeaderLayout } from './Layouts/HeaderLayout'
import { ContentLayout } from './Layouts/ContentLayout'

function App() {

    const rootStore = useRootStore()

    useEffect(() => {
        rootStore.setInitialStorageContents()
    }, [])

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
