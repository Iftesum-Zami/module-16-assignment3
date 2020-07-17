// feetToMile

function feetToMile(feet){
    var mile = (1 / 5280) * feet;

    return mile;
}

var result1 = feetToMile(25);
console.log("your required mile is =", result1);

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
    if(floors > 0 && floors <= 10){
        var totalFeet = floors * 15;
    }
    else if(floors <= 20){
        totalFeet = 10 * 15 + (floors - 10) * 12;
    }
    else if(floors > 20){
        totalFeet = 10 * 15 + 10 * 12 + (floors - 20) * 10;
    }
    else{
        console.log("invalied input");
    }

    var bricks = totalFeet * 1000;
    return bricks;
}

var buildingFloors = 29;
result3 = brickCalculator(buildingFloors);
console.log("total bricks you needed = ", result3);

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
result4 = tinyFriend(classMates)
console.log("The smallest name among friends is =", result4);