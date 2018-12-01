const reverseString = require('./reversestring')

// //이 파일의 각각의 테스트 실행 전 실행
// beforeEach(() => initDatabase())
// //이 파일의 각각의 테스트 실행 후 실행
// afterEach(() => closeDatabase())

// //이 파일의 모든 테스트 실행 전 실행
// beforeAll(() => initDatabase())
// //이 파일의 모든 테스트 실행 후 실행
// afterAll(() => closeDatabase())

const nameCheck = () => console.log('Checking Name...')

//테스트 일부만 실행
describe('Cheking Names', () => {
    beforeEach(() => nameCheck())

    test('User is Jeff', () => {
        const user = 'Jeff'
        expect(user).toBe('Jeff')
    }) 

    test('User is Jack', () => {
        const user = 'Jack'
        expect(user).toBe('Jack')
    }) 
}) 

const initDatabase = () => console.log('Database initialized...')
const closeDatabase = () => console.log('Database Closed...')
//함수가 정의되어 있는지
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined()
})

test('is function', () => {
    expect(typeof reverseString).toEqual('function')
})

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
})

test('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh')
})