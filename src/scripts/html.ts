import * as fs from "fs";
const BeautifulDom = require('beautiful-dom');

export function hello(){
    return 'hello world'
}

export function readFile(){
    let buffer = fs.readFileSync('index.html','utf8')
    console.log(buffer)
    const dom = new BeautifulDom(buffer);
}

readFile()