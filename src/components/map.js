import React , {Component} from 'react';



class Map extends Component {
    state = {
        title: '',
        author: '',
        lists: [
            {id: 1, title: 'Novel Title 001', author: 'Wee'},
            {id: 2, title: 'Novel Title 002', author: 'Peng'}
        ]
    }

  

    handleContent(val){
        const filter = this.state.lists.filter( (item) => item.id === val)
        console.log('filter',filter[0].title)
        console.log(val)
        this.setState({
            title: filter[0].title

        })
    }
    render(){
       
        const {title, author, lists} = this.state;

        return (
            <div>
                <ol>
                {
                   
                    lists.map( (item, i) => 
                    
                        <li key={i} onClick={() =>this.handleContent(item.id)}>{item.title}</li>
                    )
                }
                </ol>
             {title}
            </div>
        )
    }
}

export default Map;