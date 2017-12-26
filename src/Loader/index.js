import React ,{PureComponent} from 'react';

export default OriginalComp => class Loader extends PureComponent {

    componentDidMount(){
        console.log('Mounting the original comp' );
    }

    render(){
        console.log('Rendering the original comp' );
        return (
            <div>
                <OriginalComp text='Hello World'/>
             </div>   
        );
    }


}