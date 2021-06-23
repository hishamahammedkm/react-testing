import { multiply,makeLowerCase } from "./HelperFuctions";

test('multiply',()=>{
    expect(multiply(2,10)).toBe(20)
})

test('lower',()=>{
    expect(makeLowerCase('HIS')).toBe('his')
})