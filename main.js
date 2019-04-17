function checkClass(str)
{
    let regexp = /^[CAP][0-9]{4}[GHIKLM]$/;
    if (regexp.test(str))
    {
        return true;
    }
    return false;
}

let _class = "P0318G";
console.log(checkClass(_class));
_class = "M0318G";
console.log(checkClass(_class));
_class = "P0323S";
console.log(checkClass(_class));