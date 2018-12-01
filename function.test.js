const functions = require('./function')

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

//0, undefined, null 만 통과 가능
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy() 
})

//ToEqaul for array, object
test('User should be Brad Traversy obejct', () => {
    expect(functions.createUser()).toEqual({firstName: 'Brad', lastName: 'Traversy'}) 
})

test('Should be under 1680', () => {
    const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
})

test('Should be under 1680', () => {
    const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThanOrEqual(1500)
})

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})

//Working with async data
test('User fetched name should be Leanne Graham', async () => {
    // expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})

//Working with promise data
test('User fetched name should be Leanne Graham', () => {
    // expect.assertions(1)
    functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})