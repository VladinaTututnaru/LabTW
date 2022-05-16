import { Breadcrumb, Layout, Menu } from 'antd'
import { Content } from 'antd/lib/layout/layout'
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

]

export const ContentLayout = () => {
    return (
        <Content style={ { padding: '0 50px' } }>
            <Breadcrumb style={ { margin: '16px 0' } }>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className='site-layout-content'>
                { informations.map((el, index) => {
                    return (
                        <CardCustom key={ el.id } title={ el.title } description={ el.description } />
                    )
                })
                }
            </div>
        </Content>
    )
}