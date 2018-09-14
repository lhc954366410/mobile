//仓库列表
import React from 'react'
import { connect } from 'react-redux'
import { NavBar,TabBar, Icon,Toast,Carousel, WingBlank, Card, WhiteSpace } from 'antd-mobile';
import Footer from '../components/footer'
import Search from '../components/search'

import classNames from 'classnames/bind'
import styles from './styles.less'
import Services from '../services'
const cx = classNames.bind(styles)
class Index extends React.Component {
    constructor() {
        super()
        this.PICapi = "http://nn.xw-scm.com:96/"
        this.state = {
            data: ['banner1', 'banner2', 'banner3'],
            imgHeight: "",
            Brands:[],
        }
    }
    //页面加载完成以后执行的函数
    componentDidMount() {
        this.getData()
    }

    getData=()=>{
        var dataInfo1 = Services.MDM000206()
        var dataInfo = Services.MALL000107()
        var dataInfo2 = Services.MALL000302()
        var Brands = Services.MDM000405()
          
        dataInfo.then(function(r){

        })    
        dataInfo1.then(function(r){
            
        })    
        dataInfo2.then(function(r){
            
        })    
        Brands.then((r)=>{
            r.Content.Items.length=9
            this.setState({
                Brands:r.Content.Items,
            })
        })    
     }



    render() {   
        console.log("--------------------------")
        console.log(this.state.Brands)
        return (
            <div id="Box">
                <Search defaultValue=""/>
                <Footer selected="1"/>
                <div id="myMain">
                    <WingBlank>
                        <Carousel
                        autoplay={false}
                        infinite
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={`/static/${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                    <Card full>
                        <Card.Header
                            title="精选品牌"
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        />
                        <Card.Body>
                            <div className="brands">
                                {
                                    this.state.Brands.map(val => (
                                        <img key={val.Code} src={this.PICapi + val.pic}/>
                                    ))


                                
                                }



                            </div>
                            
                            
                            
                        </Card.Body>
                    </Card>





                </div>


            </div>
        )
    }
}

export default connect()(Index)