export const SELECT_CAR = 'CAR:changecar';

export const selectCar = (usercar) => {
    return {
        type: SELECT_CAR,
        payload: {
            car: usercar
        }
    }
}
