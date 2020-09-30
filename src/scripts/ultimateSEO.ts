const fs = require('fs')
const BeautifulDom = require('beautiful-dom');

export class UltimateSEO {
    private buffer: string
    constructor(src: string) {
        // read from file
        this.readSourceFile(src)
        // analyze for best practices
        // export log and instructions
    }
    readSourceFile(src: string){
        this.buffer = fs.readFileSync( src ,'utf8')
        console.log('String read from input HTML file:\n',this.buffer)
    }
}