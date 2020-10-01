const fs = require('fs')
const BeautifulDom = require('beautiful-dom');
const s = `<h1 class="google"></h1>`;

export function getAttribute(str: string, attr: string){
    let initialIndex = str.lastIndexOf(attr) + attr.length + 2
    let finalIndex
    for (let i = initialIndex; i<str.length; i++){
        if (str[i]==='"'){
            finalIndex = i
            break
        }
    }
    return str.slice(initialIndex, finalIndex)
}

export class SeoAnalyzer {
    private buffer: string
    private score: number
    private dom
    private readonly Metric: {
        viewport: boolean 
        title: boolean
    }
    constructor(src: string) {
        //init
        this.Metric = {
            viewport: false,
            title: false
        }
        // read from file
        this.readSourceFile(src)
        // analyze for best practices
        this.analyze()
        // export log and instructions
        this.finalize()
    }
    private readSourceFile(src: string){
        this.buffer = fs.readFileSync( src ,'utf8')
        console.log('String read from input HTML file:\n',this.buffer)
        // loads the file onto the beautiful-dom object
        this.dom = new BeautifulDom(this.buffer)
    }
    private analyze() {
        this.checkMetaTags()
        this.hasTitle()
    }
    private checkMetaTags(){
        for (let i of this.dom.getElementsByTagName('meta')){

        }
    }
    private hasTitle(){
        if (this.dom.getElementsByTagName('title').length > 0){
            console.log("source code includes title tag")
            this.Metric.title = true
        } else {
            console.log('source code does not include title tag')
            this.Metric.title = false
        }
    }
    private computeScore(){
        const size = Object.keys(this.Metric).length;
        let sumOfScores = 0
        for (let metric in this.Metric){
            if (this.Metric[metric]){
                sumOfScores++
            }
        }
        this.score = Math.floor(sumOfScores / size * 100)
        console.log('analysis completed with a score of: %', this.score)
    }
    private finalize(){
        this.computeScore()
        this.exportJsonReport()
    }
    private exportJsonReport(){
        console.log('generating JSON repeort ...')
        let result = {

        }
        let json = JSON.stringify(result)
        fs.writeFileSync('result.json',json)
        console.log('JSON report generated.')
    }
}

new SeoAnalyzer('index.html')