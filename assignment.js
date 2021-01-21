//  https://github.com/Badhan112/javascriptAssignment

// this function used to convert kilometer to Meter
function kilometerToMeter(kilometer){
    var meter;

    if(kilometer <= 0){
        console.log("Distance can't be Zero or Negative or Null!\nPlease Enter Valid Number!");
    }
    else if(typeof kilometer !== "number"){
        console.log('Only Number type input is Acceptable!\nHint: Ignore String/Object type and Undefined/empty Value');
    }
    else{
        meter = kilometer * 1000;   // 1 kilometer == 1000 meter

        return meter;
    }
}

// This function calculate total cost of a budget
function budgetCalculator(numberOfClock, numberOfPhone, numberOfLaptop){
    var totalBudget;
    var clockPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    if(numberOfClock <= 0 || numberOfPhone <= 0 || numberOfLaptop <= 0){
        console.log("Number of Products can't be Zero or Negative or Null!\nPlease Enter Valid Number!");
    }
    else if(typeof numberOfClock !== "number" || typeof numberOfPhone !== "number" || typeof numberOfLaptop !== "number"){
        console.log('Only Number type input is Acceptable!\nHint: Ignore String/Object type and Undefined/empty Value');
    }
    else{
        totalBudget = (numberOfClock * clockPrice) + (numberOfPhone * phonePrice) + (numberOfLaptop * laptopPrice);

        return totalBudget;
    }
}

// This function used to calculate Total cost in hotel
function hotelCost(numberOfDay){
    var totalCost;
    var firstTenDayCost = 100;
    var secondTenDayCost = 80;
    var moreThenTwentyDayCost = 50;

    if(numberOfDay <= 0){
        console.log("Number Of Days can't be Zero or Negative or Null!\nPlease Enter Valid Number!");
    }
    else if(typeof numberOfDay !== "number"){
        console.log('Only Number type input is Acceptable!\nHint: Ignore String/Object type and Undefined/empty Value');
    }
    else{
        if(numberOfDay >= 21){
            var extraDays = numberOfDay - 20;
            totalCost = (10 * firstTenDayCost) + (10 * secondTenDayCost) + (extraDays * moreThenTwentyDayCost);
 
            return totalCost;
        }
       else if(numberOfDay >= 11 && numberOfDay <= 20){
           var extraDays = numberOfDay - 10;
           totalCost = (10 * firstTenDayCost) + (extraDays * secondTenDayCost);

           return totalCost;
       }
       else{
           totalCost = numberOfDay * firstTenDayCost;

           return totalCost;
       }
    }

}

// This function return the Large name of an array of name
function megaFriend(arrayOfNames){
    var largeName;
    var isValidValue = true;

    if(arrayOfNames instanceof Array !== true){
        console.log('Invalid Input! Only Array type input is acceptable');
    }
    else if(arrayOfNames.length == 0){
        console.log('Array of name is Empty');
    }
    else{
        // checking all property of array is Sting or not
        for(var i = 0; i < arrayOfNames.length; i++){
            if(typeof arrayOfNames[i] !== "string" || arrayOfNames[i] === ''){
                isValidValue = false;
                break;
            }
        }

        if(isValidValue == true){
            largeName = arrayOfNames[0];

            // checking which String is Larger
            for(var i = 0; i < arrayOfNames.length - 1; i++){
                if(arrayOfNames[i].length < arrayOfNames[i+1].length){
                    largeName = arrayOfNames[i+1];
                }
            }

            return largeName;

        }
        else{
            console.log('Invalid Array Property! Empty Value not acceptable or Every Property must need to be a String');
        }
    }
}


// calling kilometerToMeter() function in different input
var distanceInMeter = kilometerToMeter(111);
console.log(distanceInMeter);

distanceInMeter = kilometerToMeter(-28);
console.log(distanceInMeter);

distanceInMeter = kilometerToMeter(0);
console.log(distanceInMeter);

distanceInMeter = kilometerToMeter();
console.log(distanceInMeter);

distanceInMeter = kilometerToMeter(null);
console.log(distanceInMeter);


// calling budgetCalculator() function in different input
var budgetForNewYear = budgetCalculator(5, 3, 2);
console.log(budgetForNewYear);

budgetForNewYear = budgetCalculator(7, -3, 9);
console.log(budgetForNewYear);

budgetForNewYear = budgetCalculator(0, 8, 6);
console.log(budgetForNewYear);

budgetForNewYear = budgetCalculator(null, 3, 2);
console.log(budgetForNewYear);

// calling hotelCost() function in different input
var myHotelCost = hotelCost(9);
console.log(myHotelCost);

myHotelCost = hotelCost(15);
console.log(myHotelCost);

myHotelCost = hotelCost(47);
console.log(myHotelCost);

myHotelCost = hotelCost(-7);
console.log(myHotelCost);

myHotelCost = hotelCost(0);
console.log(myHotelCost);

myHotelCost = hotelCost(null);
console.log(myHotelCost);

myHotelCost = hotelCost();
console.log(myHotelCost);

console.log('\n');

// calling megaFriend() function in different input
var myFriendList;

myFriendList = ['Badhan', 'David', 'Jhon', 'Steve Jobs'];
var largestFriendName = megaFriend(myFriendList);
console.log(largestFriendName);

myFriendList = ['Badhan', 'David', '', 'Steve Jobs'];
var largestFriendName = megaFriend(myFriendList);
console.log(largestFriendName);

myFriendList = [];
largestFriendName = megaFriend(myFriendList);
console.log(largestFriendName);

myFriendList = {'FirstName' : 'Badhan'};
largestFriendName = megaFriend(myFriendList);
console.log(largestFriendName);

myFriendList = ['Tesla', 21];
largestFriendName = megaFriend(myFriendList);
console.log(largestFriendName);

myFriendList = 112;
largestFriendName = megaFriend(myFriendList);
console.log(largestFriendName);

myFriendList = 'Bangladesh';
largestFriendName = megaFriend(myFriendList);
console.log(largestFriendName);

myFriendList = null;
largestFriendName = megaFriend(myFriendList);
console.log(largestFriendName);

myFriendList = undefined;
largestFriendName = megaFriend(myFriendList);
console.log(largestFriendName);