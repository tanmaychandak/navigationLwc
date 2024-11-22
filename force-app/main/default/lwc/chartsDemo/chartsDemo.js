import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities'

export default class ChartsDemo extends LightningElement {
    pieChartLabels=[]
    pieChartData=[]


    @wire(getOpportunities)
    opportunityHandler({data, error}){
        if(data){
            console.log(data)
            const result = data.reduce((json, val)=>({...json, [val.StageName]:(json[val.StageName]|0)+1}), {})
            // console.log("Results logsss:"+result+"result logs")
            // console.log("Results logsss:"+Object.keys(result).length+"result logs")
            // console.log("Results logsss:"+Object.keys(result)+"result logs")
            // console.log("Results logsss:"+Object.values(result)+"result logs")
            // console.log("Results logsss:"+Object.values(result).length+"result logs")
            if(Object.keys(result).length){
                this.pieChartLabels = Object.keys(result)
                this.pieChartData = Object.values(result)
            }


        }
        if(error){
            console.error(error)
        }
    }
}