import React from 'react';
import  './App.css';
import dog from './dog.jpg'


    class DogsPhoto extends React.Component {

        render = () => {
let classForHide = this.props.random_index === this.props.id ? 'show' :'photo';
let onClickHandler = this.props.random_index === this.props.id ? this.props.inc_count :()=>{};

            return (
                <div className='item' onClick={onClickHandler}>
                    <img src={dog} alt='logo react' className={classForHide}/>
                </div>
            )
        }
    }

export default DogsPhoto;

