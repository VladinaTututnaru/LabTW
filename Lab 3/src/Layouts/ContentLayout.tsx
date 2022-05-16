import { Breadcrumb, Layout, Menu } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { CustomForm } from '../components/CustomForm/CustomForm'
import { CardCustom } from './CardCustom'

const { Header } = Layout

const informations = [
    {
        id: 1,
        title: 'Title',
        description: 'Some more text'
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'Some more text'
    },
    {
        id: 3,
        title: 'Title 3',
        description: 'Some more text'
    },
    {
        id: 4,
        title: 'Title 4',
        description: 'Some more text'
    }
]

export const ContentLayout = () => {

    // const showConsoleInformatios = (e: any) => {
    //     console.log('>>informations', informations)
    //     console.log('>>Event', e)
    // }

    return (
        <>
            <Content style={ { padding: '0 50px' } }>
                <Breadcrumb style={ { margin: '16px 0' } }>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className='site-layout-content'>
                    <CustomForm />

                    <div>  ---- </div>

                    { informations.map((el, index) => {
                        return (
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            <CardCustom key={ el.id } title={ el.title }
                                        description={ el.description } /*callBack={showConsoleInformatios} */ />
                        )
                    })
                    }
                </div>
            </Content>
        </>

    )
}