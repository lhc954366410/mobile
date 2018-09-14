//仓库列表
import React from 'react'
import { NavBar,TabBar, Icon } from 'antd-mobile';
import classNames from 'classnames/bind'
import styles from './styles.less'
const cx = classNames.bind(styles)
class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
        }
      
    }
    //页面加载完成以后执行的函数
    componentDidMount() {

    }
    
    render() {  
        const {selected} = this.props
        return (
                <div className={cx("footer")}>
                
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    >
                    <TabBar.Item
                        title="首页"
                        key="index"
                        icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={selected=="1"?true:false}
                        onPress={()=>alert("跳转到首页")}

                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        title="分类"
                        key="category"
                        selected={selected=="2"?true:false}
                        onPress={()=>alert("跳转到分类")}
                        
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        title="新闻"
                        key="news"
                        selected={selected=="3"?true:false}
                        onPress={()=>alert("跳转到新闻")}
                        
                    >
                    </TabBar.Item>

                </TabBar>

                
                
                </div>


        )
    }
}

export default Footer