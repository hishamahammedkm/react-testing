import React,{Component} from "react";

const HOC =  OrComponent =>{
    class NewComponet extends Component{
        render(){
            return(
                <OrComponent data='red' />
            )
        }

    }
    return NewComponet
}
export default HOC