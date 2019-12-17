/**
 * This is just a sample file with test background
 * @author Sandeep G
 * @since 20191212
 */

class emp {
    constructor(id, name) {
        if (this.emp)
            this.emp = [];
        this.emp.push({ id, name });
    }

    getName() {
        console.log(this.name);
        return this.emp;
    }
}

var e1 = new emp(1, "Sandeep");
e1.getName();