const blogData = [
    {
        question: "Var, Let, and Const – What's the Difference?",
        answer:
            '1) var is a global scope but let and const is a block scope.one thing mention that,var is functional scope. 2) when we will declare var/let that time we can change re-assign its value but if we use const  that mean this value is fixed. 3) There are a difference about hoisting. 4) var browser do attached with window object but when we use let it return undefine. 5) While var and let can be declared without being initialized, const must be initialized during declaration',

        thumb_img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        question: 'What is the difference between arrow function and regular function?',
        answer: "1) In regular function we need to use  return keyword to return value .otherwise it will return undefined But arrow function you don’t need any return keyword for single line result(implicitly return). 2) Arrow function don’t have their own this but have their own this (this keyword value) 3) If you use name name parameter —--> arrow function return error but regular function don’t return error",
        thumb_img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVuY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        question: 'What is the difference between forEach, map, filter and find?',
        answer: "ForEach : when we don't need to return anything that time we will use this. Map : when use array value multiple time that time we use map and this map return every single value. Filter : it will return a array when the condition will be true. Find : it will return a first matching value when the condition will be true.",
        thumb_img: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
]