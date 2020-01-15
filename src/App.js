import React from 'react';
import './App.css';
import DogsPhoto from "./DogsFhoto";
import Count from "./Count";
import audio from './dog.mp3'


    class App extends React.Component{
            componentDidMount() {
            this.setTime()
        }

        constructor() {
            super();
            this.audioRef = React.createRef()
            }


        state={
            count: 0,
            dog_id: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            random_index: 2
     };

        inc_count = () => {
            this.audioRef.current.currentTime=0;
            this.audioRef.current.play();
            this.setState({
                    count: this.state.count + 1,
                }
            )
        };
        get_random_index = () => {
            this.setState({
                    random_index: Math.floor(Math.random() * 9)
                }, ()=>this.setTime()
            )
        };


        setTime = ()=> {
            setTimeout(this.get_random_index, 1000)
        };

        render = () => {
            let dogs = this.state.dog_id.map(el=><DogsPhoto
                id={el}
                random_index={this.state.random_index}
                inc_count = {this.inc_count}

            />);

            return (
                <div className='wrapper'>
                    <audio src={audio} ref={this.audioRef}/>
                    <div className='counter'>
                        {dogs}
                    </div>
                    <div className='counter'>
                        <Count count = {this.state.count}/>
                    </div>
                </div>
            );
        }}

export default App;

