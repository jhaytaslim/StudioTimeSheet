import React from 'react';
import Validator from 'validator';
import {clear,startAgain,showState,addDetail,loading,nextState,clearDone} from '../actions/index'
import { connect } from 'react-redux';
import {Header,Submission,TimeSheet} from '../components'
import { Dimmer, Loader, Image, Segment,Grid } from 'semantic-ui-react'

const initialState={
    Email:'',
    Message:'',
    TimeSpent:'',
    TypeOfWork:'',
}
const workType=[
    'Time working on visual effects for movie',
    'Time spent reviewing the work of a junior artist',
]

class HomeContainer extends React.Component {
    displayName = HomeContainer.name
    constructor(props) {
      super(props);
      this.state = {
        Detail:{...initialState},
        IsLoading:false,
        errors:{},
      }
     
    }
  
   
  
    componentDidMount(){
      
      console.log("List Props  :",JSON.stringify(this.props));
    
      console.log("DidMount.state","===>"+JSON.stringify(this.state));
    }
  
    // validateControl=e=>{
    //     const errors={};
    //     if(e.target.name==='' && !Validator.isEmail(e.target.value)) errors.GoodEmail="Invalid email";
    //     return errors;
    // }

    OnChange=e=>{
         console.log([e.target.name],"===>"+e.target.value);
        const errors = this.validateControl(e);
        this.setState({ errors });
        console.log("errors :"+JSON.stringify(errors));
        this.setState({
            Detail:{...this.state.Detail,[e.target.name]:e.target.value}
        });
    }
    
    validateControl=e=>{
        const errors={};
        let TimeSpent=/\d+\shours\s\d+\smins/;
        switch (e.target.name) {
            case 'Email':
                !Validator.isEmail(e.target.value)? errors.GoodEmail="Invalid email" : errors.GoodEmail="Valid";
                return errors;
            case 'TimeSpent':
                // !Validator.matches(/\d+hours\d+mins/,e.target.value)? errors.GoodTime="Invalid"  :errors.GoodTime="Valid" ;
                !TimeSpent.test(e.target.value)? errors.GoodTime="Invalid"  :errors.GoodTime="Valid" ;
                //if(!Validator.isEmpty(e.target.value)) errors.GoodTime="Valid";
                return errors;
            case 'TypeOfWork':
                  //return {...state,Clear:false};
                  return errors;
            default:
              return errors;
          }
    }

    
    validatePage=data=>{
        const errors={};
        if(Validator.isEmpty(data.Email)) errors.Email="Email can't be blank";
        //if(Validator.isEmpty(data.Message)) errors.Message="Message can't be blank";
        if(Validator.isEmpty(data.TimeSpent)) errors.TimeSpent="Time Spent can't be blank";
        if(Validator.isEmpty(data.TypeOfWork)) errors.TypeOfWork="Type of Work must be selectd";
        return errors;
    }

    OnClear=e=>{
        this.setState({Detail:initialState})
        this.props.startAgain();
        
    }

    async OnNext(e) {
        const errors = this.validatePage(this.state.Detail);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            const { addDetail, loading, showState } = this.props;
            //await setTimeout(loading(), 5000);
            loading();
            addDetail(this.state.Detail);
            await setTimeout(() => { showState("Timesheet Submitted"); }, 1000)

        }

    }

    OnStartAgain=e=>{
        this.setState({Detail:initialState})
        this.props.startAgain();
    }
    
    setWorkType(text) {
      var cmt=this.state.Detail;
      cmt.TypeOfWork=text;
      this.setState({Detail:cmt});
      console.log("Detail :"+JSON.stringify(this.state));
    }
  
    
    render() {
      const { error, floading,fclear, title,details ,isHome} = this.props;

      return (
        <Grid className="center-content">
          <Grid.Row columns={16}>
              <Header Title={title}/>
              <br/><br/>
          </Grid.Row>
          {
              isHome
            ?
                <Grid.Row   columns={16}>
                    {
                        floading
                        ?
                        <Dimmer active>
                            <Loader />
                        </Dimmer>
                        :
                        ''
                    }
                    {/* <div className="center-content"> */}
                        <TimeSheet
                            {...this.state}
                            WorkType={workType}
                            SetWorkType={this.setWorkType.bind(this)}
                            OnClear={this.OnClear.bind(this)}
                            OnNext={this.OnNext.bind(this)}
                            OnChange={this.OnChange.bind(this)}
                        />
                    {/* </div> */}
                </Grid.Row  >
            :
                <div>
                    <Submission 
                        Email={details[details.length-1].Email}
                        Time={details[details.length-1].TimeSpent}
                        OnStartAgain={this.OnStartAgain.bind(this)}
                    />
                </div>
          
           }
          
        </Grid>
      );
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        addDetail: payload => {
            dispatch(addDetail(payload))
        },
        loading: () => {
            dispatch(loading())
        },
        startAgain: () => {
            dispatch(startAgain())
        },
        clear: () => {
            dispatch(clear())
        },
        showState: (text) => {
            dispatch(showState(text))
        },
        nextState: (text) => {
            dispatch(nextState(text))
        },
        clearDone: () => {
            dispatch(nextState())
        },

    }
}
  
const mapStateToProps = state => {
    return {
        //user: state.oidc.user,
        details: state.record.Detail.length > 0 ? state.record.Detail : [],
        floading: state.record.Loading,
        error: state.record.Error,
        fclear: state.record.Clear,
        isHome:state.record.IsHome,
        title:state.record.Title,

    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
  