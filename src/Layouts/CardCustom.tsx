import { Button, Input } from 'antd'
import Card from 'antd/lib/card'
import { useEffect, useRef, useState } from 'react'


export const CardCustom = ({
                               title,
                               description
                               // callBack
                           }: { title: string, description: string,/* callBack: (str: any) => void */ }) => {

    const [ inputValue, setInputValue ] = useState('')

    const refS = useRef(null)

    useEffect(() => {
        // console.log('>>refS', refS)

        // return () => {
        //     console.log('>>Unmount')
        // }

    }, [ refS ])


    const showValueInAlert = () => {
        alert(inputValue)
    }

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Card ref={ refS } /*onClick={ (e) => callBack(e) } */ title={ title } bordered={ false }>
            { description }
            <Input onChange={ (e) => setInputValue(e.target.value) } value={ inputValue } placeholder={ title } />
            <Button onClick={ showValueInAlert }>Send</Button>
        </Card>
    )

}
