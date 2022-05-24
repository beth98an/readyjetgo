import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import './quiz.css';


function TravelSurvey() {
    const dispatch =  useDispatch()
    let name = useSelector(state => state.username);
    const answers= {
        ans1:'',
        ans2:'',
        // ans3:'',
        // ans4:'',
        // ans5:''
        }

    const surveySubmit = (e) =>{
        dispatch({
            type: "ADD_ANSWERS",
            value: answers
        })
        console.log('Submitted')
    }

    const answerSelected = (e) => {
        
        if(e.target.name === 'ans1'){
            answers.ans1 = e.target.value;
        }
        else if(e.target.name === 'ans2'){
            answers.ans2 = e.target.value;
        }
        console.log(answers)
    }

    return(
            <div>
                <h1>Welcome {name} to our survey</h1>
            
                <h2>Here are some Questions</h2>
                <form onSubmit={(e)=>surveySubmit(e)}>

                    <div className="card">
                        <label>What type of holiday are you looking for?</label><br/>
                        <input type="radio" name="ans1" value="City" onChange={(e)=>answerSelected(e)}/> City
                        <input type="radio" name="ans1" value="Beach" onChange={(e)=>answerSelected(e)}/> Beach
                    </div>

                    <div className="card">
                        <label>Which continent would you like to visit?</label><br/>
                        <input type="radio" name="ans2" value="Europe" onChange={(e)=>answerSelected(e)}/> Europe
                        <input type="radio" name="ans2" value="Asia" onChange={(e)=>answerSelected(e)}/> Asia
                        <input type="radio" name="ans2" value="Africa" onChange={(e)=>answerSelected(e)}/> Africa
                        <input type="radio" name="ans2" value="North America" onChange={(e)=>answerSelected(e)}/>North America
                        <input type="radio" name="ans2" value="South America" onChange={(e)=>answerSelected(e)}/>South America
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
        )
}

export default TravelSurvey
