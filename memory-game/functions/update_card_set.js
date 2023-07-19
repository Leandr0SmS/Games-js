const update_card_set = (array, id) => {
    return array.map(c => {
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

const reset_card_set = (array) => array.map(c => ({ ...c, toggle: false}));

const remove_equals_cards = (array) => array.filter(c => c.toggle == false);

export { update_card_set, reset_card_set, remove_equals_cards }

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
//        "toggle": true
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