export const update_card_set = (array, id) => {
    return array.map(c=> {
        if (c.id == id) {
            return {
                ...c,
                toggle: !c.toggle
            }
        } else {
            return {
                ...c
            }
        }
    })
};

//const arr1 = [
//    {
//        "id": "2a",
//        "toggle": false
//    },
//    {
//        "id": "4a",
//        "toggle": false
//    },
//    {
//        "id": "4b",
//        "toggle": false
//    },
//    {
//        "id": "1a",
//        "toggle": false
//    },
//    {
//        "id": "2b",
//        "toggle": false
//    },
//    {
//        "id": "3a",
//        "toggle": false
//    },
//    {
//        "id": "3b",
//        "toggle": false
//    },
//    {
//        "id": "1b",
//        "toggle": true
//    }
//]
//
//console.log(update_card_set(arr1, '1b'));