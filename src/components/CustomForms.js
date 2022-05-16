import { Button, Form, Input, InputNumber } from 'antd'
import { useState } from 'react'

export function CustomForm() {

    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState(0)
    const [ intro, setIntro ] = useState('')


    const subMit = (e: any) => {
        const res = {
            name,
            age,
            intro
        }

        console.log('>>res', res)

    }

    return (
        <Form name='nest-messages'>
            <Form.Item
                // name={ [ 'user', 'name' ] }
                label='Name'
                rules={ [
                    {
                        required: true
                    }
                ] }
            >
                <Input value={ name } onChange={ (e) => setName(e.target.value) } />
            </Form.Item>

            <Form.Item
                // name={ [ 'user', 'age' ] }
                label='Age'
                rules={ [
                    {
                        type: 'number',
                        min: 0,
                        max: 99
                    }
                ] }
            >
                <InputNumber value={ age } onChange={ (num) => setAge(num) } />
            </Form.Item>

            <Form.Item
                // name={ [ 'user', 'introduction' ] }
                label='Introduction'
            >
                <Input.TextArea value={ intro } onChange={ (e) => setIntro(e.target.value) } />
            </Form.Item>
            <Form.Item>
                <Button type='primary' onClick={ subMit }>
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
}