export const SAY_HELLO='hello';

export function sayHello(name){
    return {
        type: SAY_HELLO,
        name,
    }
}