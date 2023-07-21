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
