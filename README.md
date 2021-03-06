# _Week 4 Project: Pizza Parlor_

#### _Using numerous technologies, this applicaton will offer the user choices to aide in their decision for creating their own unique tailored pizza._

#### By _**Brandon Magofna**_

## Technologies Used

* HTML
* CSS
* Markdown
* Javascript

## Description

_Utilitzing the above technologies, this project will demonstrate the use of objects and object constructors to fabricate a pizza parlor website._

## Setup/Installation Requirements

If below link isnt working; the backup method will be cloning repository to local repository:

* Github repository: https://github.com/Magofna68/Pizza-Parlor

* _Go to Github and navigate to main page of repository you wish to clone_
* _Above the list of files, click the green "code" button, and select the clipboard to copy URL under "clone with https"_
* _open terminal & change current working directory to "Desktop" - this will house the cloned repository_
* _Once there, enter "git clone (remote URL address from GitHub)_
* _press enter to create local clone of repo_
* _Exit out of terminal, and repository should be available on your desktop_ 

## Specs

* _Describe: Pizza()_

Test: "Should be able to create an object with up to 3 toppings"
Code: 
new Pizza(name, size, crust, sauce, topping1, topping2, topping3)
Expected Output:
example(jeff, Medium, deep-dish, marinara, pepperoni, olives, bacon)

Describe: Pizza.prototype.priceTotal

Test: "No toppings should be equal to $10"
Code:
pizzaEx(jeff, medium, deep-dish, marinara)
Expected Output: $10

Test: "One topping should be equal to $14"
Code:
pizzaEx(jeff, medium, deep-dish, marinara, pepperoni)
Expected Output: $14

Test: "Two toppings should be equal to $18"
Code:
pizzaEx(Jeff, medium, deep-dish, marinara, pepperoni, olives)
Expected Output: $18

Test: "Three toppings should be equal to $22"
Code:
pizzaEx(Jeff, medium, deep-dish, marinara, pepperoni, olives, bacon)
Expected Output: $22

Test: "Toppings should be interchangable between fields while still correctly reflecting price"
Code:
pizzaEx(jeff, medium, deep-dish, marinara,_____, olives, ______)
Expected Output: $14


## Known Bugs

* _none listed at this time_


## License

_Copyright 2021 Epicodus_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

## _Brandon Magofna_ 
503-269-2656  -  Magofna68@gmail.com