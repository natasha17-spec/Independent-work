import React from 'react';
import './App.css';


    class Count extends React.Component{

        render = () => {

            return (
                <div>
                    <div>
                        {this.props.count}
                    </div>
                </div>
            );
        }}

export default Count;

