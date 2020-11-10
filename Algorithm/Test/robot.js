/**
 * @author Sandeep G
 * @email dev.sandeep@hotmail.com
 * 
 * find the max distance a robot could travel
 * idea: if we traverse to find all possible 
 * x,y combinations then we could find the area
 * 
 * | x
 * | x x
 * | x x
 * | x x x
 * | x x x x x
 *  _ _ _ _ _ _ _ 
 * 
 * The above figure shows the possiblee coordinares robot could move in +x and +y axis
 * 
 */

let x = 0,
    y = 0,
    area = 0,
    status;
/**
 * check if the sum of digits is less than "max"
 */
const isValid = (cX, cY, max) => {
    cX = String(cX).split('').reduce((sum, current) => {
        return sum += parseInt(current)
    }, 0);

    cY = String(cY).split('').reduce((sum, current) => {
        return sum += parseInt(current)
    }, 0);

    return cX + cY <= max;
}

/**
 * The driver functoion which calculate the area
 * @param {} max - max sum of digit
 */
const init = (max) => {
    while (true) {
        y = 0;
        while (true) {
            status = isValid(x, y, max);
            //counting the area, also removing the axis
            if (status) {
                if (x != 0 && y != 0)
                    area++;
            } else {
                break;
            }

            y++;
        }

        x++;
        
        if (!isValid(x, 0, max))
            break;
    }

    //returning the total sum(multiplied by total number of axis)
    return 4 * area;
}

console.log(init(10));