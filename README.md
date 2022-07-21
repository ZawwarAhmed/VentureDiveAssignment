# VentureDiveAssignment

## Assignment Week 1

1. Even Challenge
   This task is to evaluate your understanding of loops in JavaScript. Write a program that contains a variable named "limit", which will be a positive number, the program should then print even numbers from 0 up to the number defined in "limit".
   Example: If the limit is set to 10, the program should output the following: 0 2 4 6 8 10

2. BMI calculator
   Body Mass Index is a simple calculation using a person's height and weight. The formula for calculating BMI is `weight / height ^ 2`. Here, the weight is in Kg and the height is in metres. All the values used in your program must be assigned to appropriate variables. Your program should print the calculated BMI.

3. Grade Assignment
   You've been given a task to assign grade to score obtained by your student. For any student, grade depends upon how they score. Please refer to the chart below for grade and score criteria. Your program should have a function to calculate and return the grade based on the input provided as a paremeter.
   Example: If the score is 76, the program should output the following: A-

   | Grade | Score    |
   | ----- | -------- |
   | A+    | 85 - 100 |
   | A     | 80 - 84  |
   | A-    | 75 - 79  |
   | B+    | 70 - 74  |
   | B     | 65 - 69  |
   | B-    | 60 - 64  |
   | C     | 50 - 59  |
   | F     | 0 - 50   |

4. Write a program to print Floyd's triangle:
   Floyd's triangle consist of n number of natural number in a specific fashion.
   Example:
   ```
   *
   *     *
   *     *     *
   *     *     *     *
   *     *     *     *     *
   ```


## Assignment Week 2
//////////////
//  JSF002  //
//////////////
| Arrays | Objects | Loops | Scoping | Closures |

1. Write a function that would allow you to do this.

var addFive = createBase(5);
addFive(10); // returns 15
addFive(21); // returns 26

2. Using the below array, write a function that returns a closure and outputs the corresponding tagline.

// Sample array //

  var taglines = [
    {
      name: 'Spiderman',
      tagline: 'With great power, comes great responsibility.'
    },
    {
      name: 'Hulk',
      tagline: 'Don\'t make me angry. You wouldn\'t like me when I\'m angry.'
    },
    {
      name: 'Batman',
      tagline: 'Error! Batman is not a superhero. Fight me!'
    },
    {
      name: 'Wolverine',
      tagline: 'Bub.'
    },
    {
      name: 'Captain America',
      tagline: 'Language!'
    },
  ];

// Call and Output //
var mySuperHero = createSuperHero('Wolverine');
console.log(mySuperHero()); // Wolverine | Bub.

So when creating a super hero Wolverine, the output should be "Wolverine | Bub."

Self Study: You also need to check out string.toLowerCase() predefined function for string manipulation.

## Assignment Week 3
//////////////
//  JSF003  //
//////////////
| Constructors | Prototypes | DOM |

1. Create a constructor function called Hero That will accept 2 variables name and superpower as arguments.
    Use the Hero constructor to create an object myHero with the name 'Superman'.


2. Create a constructor function called Hero That will accept the arguments name and occupation.
    Use Hero.prototype to add a method whoAreYou that will return: My name is [the hero's name] and I am a [the hero's occupation].
    Use the Hero constructor to create an object hero1 with the name Michaelangello and occupation Ninja.
    Use the whoAreYou method to log to the console hero1's name and occupation.