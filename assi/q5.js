
let typeOfShipping = "express"

switch (typeOfShipping) {
    case "overnight":
        console.log("your pacage delivered next day");
        break;
    case "express":
        console.log("your pacage delivered in 1-2 days");
        break;
    case "standard":
        console.log("your pacage delivered in 3-5 days");
        break;

    default:
        console.log("no shipping time avilable");
        break;
}