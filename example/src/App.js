import React, { Component } from 'react'

import ReactSearchBox from 'react-search-box'

export default class App extends Component {
  render () {
    const data = [{
      key: 'a',
      value: 'aa'
    }, {
      key: 'b',
      value: 'bb'
    }, {
      key: 'c',
      value: 'cc'
    }]
    return (
      <div>
        <ReactSearchBox data={data} placeholder={'placeholder'} value={'a'} />
      </div>
    )
  }
}


