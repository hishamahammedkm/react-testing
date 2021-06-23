import { fireEvent,render} from "@testing-library/react";

import Search from "./Search";

it('searchRender',()=>{
   const {queryByTitle} = render(<Search />)
   const inp = queryByTitle('dummySerch')
   expect(inp).toBeTruthy()
})

describe('changeInput',()=>{
    it('onChanhe',()=>{
        const {queryByTitle} = render(<Search />)
        const inp = queryByTitle('dummySerch')
        fireEvent.change(inp,{target:{value:'hisham'}})
        expect(inp.value).toBe('hisham')

    })
})