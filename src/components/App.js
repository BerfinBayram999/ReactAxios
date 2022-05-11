import React  from 'react'
import SearchInput from './SearchInput' 
import axios from 'axios';
import ImageList from './ImageList'




class App extends React.Component{


  state={
      images:[]
  }
    onSearchSubmit= async (entry) =>{   
     const response=  await axios.get(`https://pixabay.com/api/?key=27332277-600a71e28eb59e2682e9c0c4d&q=${entry}&image_type=photo`)
     console.log(response.data.hits)
     this.setState({images: response.data.hits})
  }

  //template literals

  render(){
      return(
          <div className='ui container' style={{marginTop:'30px'}}>
          <SearchInput onSearchSubmit={this.onSearchSubmit}/>     
          <ImageList images={this.state.images} />
          </div>
      )
  }
}

export default App;