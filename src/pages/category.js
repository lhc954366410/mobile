//仓库列表
import React from 'react'
import { connect } from 'react-redux'
import { NavBar,TabBar, Icon,Toast } from 'antd-mobile';
import Footer from '../components/footer'
import Search from '../components/search'

import classNames from 'classnames/bind'
import styles from './styles.less'
import Services from '../services'
const cx = classNames.bind(styles)
class Category extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    //页面加载完成以后执行的函数
    componentDidMount() {
        this.getData()
    }

    getData(){
        var dataInfo1 = Services.MDM000206()
        var dataInfo = Services.MALL000107()
        var dataInfo2 = Services.MALL000302()
        var dataInfo3 = Services.MDM000405()
          
        dataInfo.then(function(r){

        })    
        dataInfo1.then(function(r){
            
        })    
        dataInfo2.then(function(r){
            
        })    
        dataInfo3.then(function(r){
        })    
     }



    render() {   
        return (
            <div id="Box">
            这是分类页面
            </div>
        )
    }
}

export default connect()(Category)