import React, {Component} from 'react'
import './quiz.css';

class TravelSurvey extends Component {

    travellerNameSubmit(e){
        let name = this.refs.name.value;
        this.setState({travellerName : name}, function(){
            console.log(this.state)
        })
    }

    surveySubmit(e){

    }

    answerSelected(e){
        const answers = this.state.answers;

        if(e.target.name === 'ans1'){
            answers.ans1 = e.target.value;
        }
        else if(e.target.name === 'ans2'){
            answers.ans2 = e.target.value;
        }


        this.setState({answers:answers}, function(){
            console.log(this.state)
        })

    }

    constructor(props){
        super(props);

        this.state={
            travellerName:'',
            answers: {
                ans1:'',
                ans2:'',
                // ans3:'',
                // ans4:'',
                // ans5:''
            },
            isSubmitted:false
        }
        this.travellerNameSubmit = this.travellerNameSubmit.bind(this)
        this.surveySubmit = this.surveySubmit.bind(this)
        this.answerSelected = this.answerSelected.bind(this)
    }
    render(){
        let name = '';
        let questions = '';

        if(this.state.travellerName === '' && this.state.isSubmitted === false){
            name = <div>
                <h1>Please Enter Name!</h1>
                <form onSubmit={this.travellerNameSubmit}>
                    <input className="sName" type="text" placeholder="Please Enter Your Name" ref="name"/>
                </form>
            </div>
        }
        else if(this.state.travellerName !== '' && this.state.isSubmitted === false){
            name = <div>
                <h1>Welcome {this.state.travellerName} to our survey</h1>
            </div>
            questions = <div>
                <h2>Here are some Questions</h2>
                <form onSubmit={this.surveySubmit}>

                    <div className="card">
                        <label>What type of holiday are you looking for?</label><br/>
                        <input type="radio" name="ans1" value="City" onChange={this.answerSelected}/> City
                        <input type="radio" name="ans1" value="Beach" onChange={this.answerSelected}/> Beach
                    </div>

                    <div className="card">
                        <label>Which continent would you like to visit?</label><br/>
                        <input type="radio" name="ans2" value="Europe" onChange={this.answerSelected}/> Europe
                        <input type="radio" name="ans2" value="Asia" onChange={this.answerSelected}/> Asia
                        <input type="radio" name="ans2" value="Africa" onChange={this.answerSelected}/> Africa
                        <input type="radio" name="ans2" value="North America" onChange={this.answerSelected}/>North America
                        <input type="radio" name="ans2" value="South America" onChange={this.answerSelected}/>South America
                    </div>

                    {/* <div className="card">
                        <label>Question3?</label><br/>
                        <input type="radio" name="ans3" value="Option1" onChange={this.answerSelected}/> Option 1
                        <input type="radio" name="ans3" value="Option2" onChange={this.answerSelected}/> Option 2
                        <input type="radio" name="ans3" value="Option3" onChange={this.answerSelected}/> Option 3
                        <input type="radio" name="ans3" value="Option4" onChange={this.answerSelected}/> Option 4
                    </div> */}

                    {/* <div className="card">
                        <label>Question4</label><br/>
                        <input type="radio" name="ans4" value="Option1" onChange={this.answerSelected}/> Option 1
                        <input type="radio" name="ans4" value="Option2" onChange={this.answerSelected}/> Option 2
                        <input type="radio" name="ans4" value="Option3" onChange={this.answerSelected}/> Option 3
                        <input type="radio" name="ans4" value="Option4" onChange={this.answerSelected}/> Option 4
                    </div>

                    <div className="card">
                        <label>Question5</label><br/>
                        <input type="radio" name="ans5" value="Option1" onChange={this.answerSelected}/> Option 1
                        <input type="radio" name="ans5" value="Option2" onChange={this.answerSelected}/> Option 2
                        <input type="radio" name="ans5" value="Option3" onChange={this.answerSelected}/> Option 3
                        <input type="radio" name="ans5" value="Option4" onChange={this.answerSelected}/> Option 4
                    </div> */}
                    <input className="feedback-button" type="submit" value="submit"/>
                </form>
            </div>
        }
        return(
            <div>
                {name}

                ==========================================

                {questions}
            </div>
        )
    }
}

export default TravelSurvey
