const fs = require('fs')
const BeautifulDom = require('beautiful-dom');

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
        this.hasViewportMeta()
        this.hasTitle()
    }
    hasViewportMeta(){
        for (let i of this.dom.getElementsByTagName('meta')){
            console.log(i.outerHTML)
        }
    }
    hasTitle(){
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
    }
    private finalize(){
        console.log('analysis completed with a score of: %', this.score)
    }

}

new SeoAnalyzer('index.html')
