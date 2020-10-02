import BeautifulDom from "beautiful-dom";

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

export interface Metrics {
    viewport: boolean
    title: boolean
}
export class SeoAnalyzer {
    private buffer: string
    private _score: number
    private dom = new BeautifulDom('')
    private readonly metricsObj : Metrics

    constructor(src: string) {
        //init
        this.buffer = ''
        this._score = 0
        this.metricsObj = {
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
        this.buffer = src
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
            this.metricsObj.title = true
        } else {
            console.log('source code does not include title tag')
            this.metricsObj.title = false
        }
    }
    private computeScore(){
        const size = Object.keys(this.metricsObj).length;
        let sumOfScores = 0
        for (let metric in this.metricsObj){
            // @ts-ignore
            // TODO fix this part
            if (this.metricsObj[metric]){
                sumOfScores++
            }
        }
        this._score = Math.floor(sumOfScores / size * 100)
        console.log('analysis completed with a score of: %', this._score)
    }
    private finalize(){
        this.computeScore()
        this.exportJsonReport()
    }
    private exportJsonReport(){
        console.log('generating JSON repeort ...')
        let result = this._score
        let json = JSON.stringify(result)
        console.log('JSON report generated.')
    }
    get score(): number {
        return this._score;
    }
}