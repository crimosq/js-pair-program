function expect(val) {
    return {
        toBe(val2) {
            if(val === val2) {
                return true;
            } else {
                return false;
            }
        },

        notToBe(val2) {
            if(val !== val2) {
                return true;
            } else {
                return false;
            }
        }
    }
}

