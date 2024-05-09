#! /usr/bin/env node

import inquirer from "inquirer"

let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "please enter your sentence"
})

let word_count = user_ans.words.trim().split(" ")

console.log(word_count);

console.log(`your sentence word count is ${word_count.length}`);



