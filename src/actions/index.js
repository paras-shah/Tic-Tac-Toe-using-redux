export const SQUARE_CLICK = 'SQUARE_CLICK';

export function selectSquareAction(isXNext, value){
    console.log('isXNext',isXNext);
    return {
        type:SQUARE_CLICK,
        payload:{isXNext:isXNext,value}
    }
}