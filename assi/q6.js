let name = "mithun"
let email = "mithun.gamil.com"
let age = "20"



if (typeof name !=="string") {
    console.log("name should be a string");
}else {
    if (typeof email !== "string") {
        console.log("email should be a string");
    }else{
        if (typeof age !== "number") {
            console.log("age should be a number");
        }else {
            console.log("your account is reday");
        }
    }
}
