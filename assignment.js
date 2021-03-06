// feetToMile

function feetToMile(feet){
    var mile = (1 / 5280) * feet;

    if(feet < 0){
        return "Invalid input. Length can't be negative";
    }

    return "your required mile is = " + mile;
}

var result1 = feetToMile(25);
console.log(result1);


// woodCalculator

function woodCalculator(chair, table, bed){
    var chairCf = chair * 1;
    var tableCf = table * 3;
    var bedCf = bed * 5;

    var totalWood = chairCf + tableCf + bedCf;
    return totalWood;
}

var result2 = woodCalculator(4, 1, 3);
console.log("Total wood needed in cubic feet =", result2);


// brickCalculator

function brickCalculator(floors){
    if(floors <= 0){
        return "invalied input.";
    }
    else if(floors > 0 && floors <= 10){
        var totalFeet = floors * 15;
    }
    else if(floors <= 20){
        totalFeet = 10 * 15 + (floors - 10) * 12;
    }
    else if(floors > 20){
        totalFeet = 10 * 15 + 10 * 12 + (floors - 20) * 10;
    }

    var bricks = totalFeet * 1000;
    return "Total bricks you needed = " + bricks;
}

var buildingFloors = 27;
result3 = brickCalculator(buildingFloors);
console.log(result3);


// tinyFriend

function tinyFriend(friends){
    var smallest = friends[0];
    var firstName = smallest.length ;

    for(i = 1; i < friends.length; i++){
        var nextName = friends[i] ;
        var word = nextName.length ;

        if(word < firstName){
            smallest = nextName ;
        }
    }
    return smallest;
}

var classMates = ["zami", "nayan", "dip", "talukder", "apurba"];
result4 = tinyFriend(classMates);
console.log("The smallest name among friends is =", result4);