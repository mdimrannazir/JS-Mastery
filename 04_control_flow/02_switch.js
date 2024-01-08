// If we don't use break, when condition meets from it executes everything below except default

const monthNo = 2

switch (monthNo) {
    case 1:
        console.log("January");
    case 2:
        console.log("February");
    case 3:
        console.log("March");
    case 4:
        console.log("April");       
    default:
        console.log("Incorrect Input");
        break;
}

// Using break

const month = "mar"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;        
    default:
        console.log("Incorrect Input");
        break;
}

