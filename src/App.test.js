import {render,screen} from '@testing-library/react'
import App from './App'

deccribe('checks the api calls',()=>{
    test('test the apis',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async()=>[]
        })

        render(<App/>)

        const data = await screen.findAllByRole('list')
        expect(data).not.toHavelength(0)
    })
})