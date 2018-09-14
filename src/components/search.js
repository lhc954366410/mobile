//仓库列表
import React from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank, Modal,Flex,Icon} from 'antd-mobile';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './styles.less'
const cx = classNames.bind(styles)
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal:false,
            value:this.props.defaultValue,
            historySearch:JSON.parse(localStorage.getItem("historySearch")) ||[],
        }
      
    }
    //页面加载完成以后执行的函数
    componentDidMount() {

    }
    //外城输入框点击的时候，呼出popup
    searchClick = ()=>{
        this.setState({
            modal:true
        })
        setTimeout(() => {
            this.manualFocusInst.focus();
            
        }, 0);
    }
    //点击搜索的时候
    searchBtn=()=>{
        if(localStorage.getItem("historySearch")){
            const historySearch = JSON.parse(localStorage.getItem("historySearch"));
            historySearch.push(this.state.value)
            localStorage.setItem("historySearch",JSON.stringify(historySearch))
            

        }else{
            const historySearch = [this.state.value];           
            localStorage.setItem("historySearch",JSON.stringify(historySearch))
        }


        console.log(JSON.parse(localStorage.getItem("historySearch")))
    }
    //输入框值改变，
    onChange=(value)=>{
        this.setState({
            value:value
        })
    }
    removeHistory =()=>{
        localStorage.removeItem("historySearch")
        this.setState({
            historySearch:[]
        })
    }

    render() {  

        const {selected} = this.props
        console.log(this.state.historySearch)
        var historySearch = this.state.historySearch.map((obj,i)=>{
            var data = {Code:3,searchText:obj,Brand:"新界"};
            var path = {
              pathname:'/goodslist',
              query:data,
            }
            return(
                <span className={cx("placeholder inline")} key={i}>
                    <Link to={path} >{obj}</Link>
                
                </span>
            )
        })

        return (
            <div className={cx("searchBar")} >
                <div onClick={this.searchClick}>
                    <SearchBar placeholder="产品查询" maxLength={8} disabled={true} value={this.state.value} cancelText="搜索"/>
                </div>
                <Modal
                    popup
                    className={cx("searchPopup")}
                    visible={this.state.modal}
                    animationType="slide-up"
                    >
                    <div className={cx("searchBar bg")} >
                        <Flex>
                            <Flex.Item className={cx("w35")}  onClick={()=> this.setState({modal:false})}>
                                <Icon type="left" size="lg"/>
                            </Flex.Item>
                            <Flex.Item className={cx("mgl0")}>
                                <SearchBar 
                                    placeholder="产品查询" 
                                    ref={ref => this.manualFocusInst = ref}
                                    cancelText="搜索"
                                    showCancelButton={true}
                                    onCancel={this.searchBtn}
                                    value={this.state.value}
                                    onChange={this.onChange}
                                    
                                />
                            </Flex.Item>
                        </Flex>                        
                    </div>

                    <Flex>
                        <Flex.Item className="pal9 mgt10">
                            搜索历史
                        </Flex.Item>
                    </Flex>
                    <p className="flex-container">
                        { historySearch}
                    </p>
                                        
                    <Flex>
                        <Flex.Item className="pal9 mgt10">
                            热门推荐：
                        </Flex.Item>
                    </Flex>
                    <Flex className="flex-container">
                        <Flex.Item className={cx("placeholder")}>
                            新界
                        </Flex.Item>
                        <Flex.Item className={cx("placeholder")}>
                            大元
                        </Flex.Item>
                        <Flex.Item className={cx("placeholder")}>
                            水骆驼
                        </Flex.Item>
                    </Flex>
                    <Button className={cx("c_history")} onClick={this.removeHistory}>清空历史记录</Button>


                </Modal>



            </div>


        )
    }
}

export default Search