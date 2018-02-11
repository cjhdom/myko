import React, {Component} from 'react'
import KosiwonList from "./KosiwonList";

class NonmemberRecentContainer extends Component {
    render() {
        const storageList = localStorage.getItem('recentViewList')
        const recentViewList = storageList ? JSON.parse(storageList) : [1, 2, 6, 3, 4, 5,]
        return (
            recentViewList.map((view, i) => {
                return <KosiwonList key={i} kosiwon={view}/>
            })
        )
    }
}

export default NonmemberRecentContainer