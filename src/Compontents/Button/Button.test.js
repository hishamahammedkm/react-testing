import { fireEvent,render} from "@testing-library/react";

import Button from "./Button";

it('checkButtonRender',()=>{
   const {queryByTitle} = render(<Button />)
   const btn = queryByTitle('dummyBytton')
   expect(btn).toBeTruthy()
})

describe('clickButton',()=>{
   it('onclick',()=>{
      const {queryByTitle} = render(<Button />)
      const btn = queryByTitle('dummyBytton')
      expect(btn.innerHTML).toBe('press here')
      fireEvent.click(btn)
      expect(btn.innerHTML).toBe('button clicked')

   })
})

























































































































