/*
 * @Author: Y
 * @Date: 2022-03-18 09:26:33
 * @LastEditTime: 2022-03-21 14:49:43
 * @LastEditors: Y
 * @Description:
 */
import cainiao from '@/assets/demoIcon/cainiao.svg';
import elm from '@/assets/demoIcon/changyonglogo40.svg';
import hesuan from '@/assets/demoIcon/hesuan.png';
import huabeibei from '@/assets/demoIcon/huabeibei.svg';
import jizhangben from '@/assets/demoIcon/jizhangben.svg';
import koubei from '@/assets/demoIcon/koubei.svg';
import ky from '@/assets/demoIcon/ky.svg';
import mayisenlinlogo from '@/assets/demoIcon/mayisenlinlogo.svg';
import pay from '@/assets/demoIcon/pay.svg';
import sgaodedache from '@/assets/demoIcon/sgaodedache.svg';
import shenghuojiaofei from '@/assets/demoIcon/shenghuojiaofei.svg';
import shiminzhongxin from '@/assets/demoIcon/shiminzhongxin.svg';
import wangshangyinhang from '@/assets/demoIcon/wangshangyinhang.svg';
import xiaofeiquan from '@/assets/demoIcon/xiaofeiquan.svg';
import yuebao from '@/assets/demoIcon/yuebao.svg';
import zhuanzhang from '@/assets/demoIcon/zhuanzhang-.svg';
import { Badge, Card, Grid, SearchBar } from 'antd-mobile';
import {
  AddCircleOutline,
  BankcardOutline,
  DownOutline,
  ReceivePaymentOutline,
  RightOutline,
  ScanningOutline,
  TravelOutline,
} from 'antd-mobile-icons';
import React, { FC } from 'react';
import styles from './index.less';
// interface LifePageProps {}

const HomePage: FC = () => {
  return (
    <>
      <div className={styles.head}>
        <Grid columns={24}>
          <Grid.Item span={4}>
            <div className={styles.area}>
              <div>
                <span>福州</span>
                <DownOutline color="#eef9ff" />
              </div>
              <span className={styles.whether}>多云 26℃</span>
            </div>
          </Grid.Item>
          <Grid.Item span={17} className={styles.search}>
            <SearchBar placeholder="借呗" style={{ '--background': '#ffffff' }} />
            <div className={styles.line}></div>
            <span className={styles.title}>搜索</span>
          </Grid.Item>
          <Grid.Item span={3}>
            <AddCircleOutline
              color="#eef9ff"
              fontSize={20}
              className={styles.plus}
            ></AddCircleOutline>
          </Grid.Item>
        </Grid>
        <Grid columns={24} className={styles.menu}>
          <Grid.Item span={6}>
            <ScanningOutline color="#eef9ff" fontSize={40} />
            <span style={{ display: 'block', color: '#eef9ff' }}>扫一扫</span>
          </Grid.Item>
          <Grid.Item span={6}>
            <ReceivePaymentOutline color="#eef9ff" fontSize={40}></ReceivePaymentOutline>
            <span style={{ display: 'block', color: '#eef9ff' }}>收付款</span>
          </Grid.Item>
          <Grid.Item span={6}>
            <TravelOutline color="#eef9ff" fontSize={40}></TravelOutline>
            <span style={{ display: 'block', color: '#eef9ff' }}>出行</span>
          </Grid.Item>
          <Grid.Item span={6}>
            <BankcardOutline color="#eef9ff" fontSize={40}></BankcardOutline>
            <span style={{ display: 'block', color: '#eef9ff' }}>卡包</span>
          </Grid.Item>
        </Grid>
      </div>
      <div className={styles.content}>
        <Grid columns={5} className={styles.menu}>
          <Grid.Item>
            <Badge color="red" content="晚餐" style={{ '--right': '0%', '--top': '10%' }}>
              <img src={elm} alt="" />
            </Badge>
            <span style={{ display: 'block', color: '#696969' }}>饿了么</span>
          </Grid.Item>
          <Grid.Item>
            <img src={koubei} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>口碑</span>
          </Grid.Item>
          <Grid.Item>
            <img src={shiminzhongxin} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>市民中心</span>
          </Grid.Item>
          <Grid.Item>
            <img src={xiaofeiquan} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>消费券</span>
          </Grid.Item>
          <Grid.Item>
            <img src={cainiao} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>菜鸟</span>
          </Grid.Item>
          <Grid.Item>
            <img src={shenghuojiaofei} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>生活缴费</span>
          </Grid.Item>
          <Grid.Item>
            <img src={yuebao} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>余额宝</span>
          </Grid.Item>
          <Grid.Item>
            <img src={zhuanzhang} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>转账</span>
          </Grid.Item>
          <Grid.Item>
            <img src={mayisenlinlogo} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>蚂蚁森林</span>
          </Grid.Item>
          <Grid.Item>
            <img src={jizhangben} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>记账本</span>
          </Grid.Item>

          <Grid.Item>
            <img src={sgaodedache} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>高德打车</span>
          </Grid.Item>
          <Grid.Item>
            <img src={huabeibei} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>花呗</span>
          </Grid.Item>
          <Grid.Item>
            <img src={wangshangyinhang} alt="" />
            <span style={{ display: 'block', color: '#696969' }}>网商银行</span>
          </Grid.Item>
          <Grid.Item className={styles.card}>
            <Card className={styles.content}>
              <img src={jizhangben} alt="" />
              <img src={shenghuojiaofei} alt="" />
              <img src={mayisenlinlogo} alt="" />
              <img src={wangshangyinhang} alt="" />
            </Card>
            <span style={{ display: 'block', color: '#696969' }}>我的小程序</span>
          </Grid.Item>
          <Grid.Item className={styles.card}>
            <div className={styles.content} style={{ background: 0 }}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
            <span style={{ display: 'block', color: '#696969' }}>更多</span>
          </Grid.Item>
        </Grid>
        <Card className={styles.cardContent}>
          <ul>
            <li style={{ fontSize: 14 }}>
              支付助手: 付款成功 ￥50.00
              <span style={{ color: '#696969', marginLeft: '8px', fontSize: 13 }}>29分钟前</span>
            </li>
            <li style={{ fontSize: 14 }}>
              支付宝会员: 你有70积分即将消失
              <span style={{ color: '#696969', marginLeft: '8px', fontSize: 13 }}>3小时前</span>
            </li>
          </ul>
          <div className={styles.btn}>
            <span
              style={{
                height: '10px',
                width: '10px',
                background: 'red',
                borderRadius: '50%  ',
                verticalAlign: 'middle',
                display: 'inline-block',
              }}
            ></span>
            <RightOutline style={{ verticalAlign: 'middle', marginLeft: 5 }}></RightOutline>
          </div>
        </Card>
        <Card style={{ marginTop: '10px' }} className={styles.lunbo}>
          <span className={styles.shengqian}>省钱卡</span>
          <span className={styles.ditie}>
            <span style={{ color: '#e15924' }}>1元</span>地铁公交券来啦
          </span>
          <span className={styles.shengqianka}>用省钱卡 领4张出行卷</span>
          <span className={styles.lingqu}>
            去领取
            <RightOutline style={{ verticalAlign: 'middle' }}></RightOutline>
          </span>
          <span className={styles.down}>
            <DownOutline />
          </span>
          <span className={styles.hongbao}>
            <img src={pay} alt="" />
          </span>
          <span className={styles.point}></span>
          <span className={styles.point2}></span>
          <span className={styles.point2} style={{ left: '55%' }}></span>
          <span className={styles.point2} style={{ left: '57%' }}></span>
        </Card>
        <div className={styles.yiqing}>
          <img src={ky} alt="" style={{ height: '16px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '15px' }}>抗击疫情</span>
          <div className={styles.line}></div>
          <span style={{ color: '#dadada', marginLeft: '20px' }}>截至: 2022.3.17 17:07</span>
          <span
            style={{
              float: 'right',
              color: '#696969',
              background: '#f7f7f8',
              display: 'inline-block',
            }}
          >
            <DownOutline />
          </span>
        </div>
        <div style={{ height: 220 }}>
          <Card style={{ float: 'right', width: '180px', marginTop: '10px', height: 110 }}>
            <div className={styles.desc}>
              <span>福建新增</span>
              <span style={{ float: 'right' }}>
                <span style={{ color: 'green', fontSize: 16 }}>101</span>
                <RightOutline fontSize={12} />
              </span>
            </div>
            <div className={styles.desc}>
              <span>国内新增</span>
              <span style={{ float: 'right' }}>
                <span style={{ color: '#e3b155', fontSize: 16 }}>4653</span>
                <RightOutline fontSize={12} />
              </span>
            </div>
            <div className={styles.desc}>
              <span>现有确诊</span>
              <span style={{ float: 'right' }}>
                <span style={{ color: '#d27d89', fontSize: 16 }}>257106</span>

                <RightOutline fontSize={12} />
              </span>
            </div>
          </Card>
          <div
            className={styles.yiqingcard}
            style={{
              float: 'left',
              width: '180px',
              marginTop: '10px',
              height: 220,
              background: '#468df9',
              marginLeft: '5px',
              borderRadius: 10,
            }}
          >
            <span
              style={{
                fontSize: 14,
                marginTop: 10,
              }}
            >
              疫情服务助手
            </span>
            <span
              style={{
                color: '#add3fa',
                marginTop: 2,
              }}
            >
              当前城市
              <span
                style={{
                  display: 'inline-block',
                  background: '#ff8f20',
                  width: '70px',
                  height: '20px',
                  textAlign: 'center',
                  borderRadius: 4,
                }}
              >
                低风险地区
              </span>
            </span>
            <Card
              className={styles.inCard}
              style={{
                height: 160,
                width: '95%',
                margin: '0 auto',
                marginTop: '5px',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
              }}
            >
              <div>
                <img src={hesuan} alt="" style={{ verticalAlign: 'middle' }} />
                <span style={{ verticalAlign: 'middle' }}>核酸证明</span>
                <RightOutline
                  style={{
                    verticalAlign: 'middle',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
              </div>
              <div>
                <img src={hesuan} alt="" style={{ verticalAlign: 'middle' }} />
                <span style={{ verticalAlign: 'middle' }}>核酸检查预约</span>
                <RightOutline
                  style={{
                    verticalAlign: 'middle',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
              </div>
              <div>
                <img src={hesuan} alt="" style={{ verticalAlign: 'middle' }} />
                <span style={{ verticalAlign: 'middle' }}>同行查询</span>
                <RightOutline
                  style={{
                    verticalAlign: 'middle',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
              </div>
            </Card>
          </div>
          <Card
            style={{ float: 'right', width: 180, height: 100, marginTop: 10 }}
            className={styles.card3}
          >
            <span style={{ color: '#e66636', fontSize: 16, fontWeight: 'bold' }}>实时咨询</span>
            <section style={{ marginTop: 10 }}>福建新增本土确诊154</section>
            <section style={{ marginTop: 4, marginBottom: 2 }}>例，其中泉州新增本土...</section>
            <section style={{ color: '#0b0b0b47', fontSize: 13 }}>人们日报 2小时前</section>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HomePage;
