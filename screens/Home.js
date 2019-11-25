import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import {Container, Content } from 'native-base'
import Stories from '../components/Home/Stories'
import FeedCard2 from '../components/Home/FeedCard2'
import Separator from '../components/Separator'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            NewsData: []
        }
    }
    componentDidMount() {

        this.setState({
            NewsData : [
                {
                    id: 1,
                    user: {
                      name: 'Lelia Chavez',
                      avatar: 'user1',
                    },
                    date: 'Jan 15, 2018',
                    description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
                    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                    images: [
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                        ],
                    likes: '101',
                    comment: '265',
                    shares: '56'
                },
                {
                    id: 2,
                    user: {
                      name: 'Lelia Chavez',
                      avatar: 'user2',
                    },
                    date: 'Jan 15, 2018',
                    description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
                    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                    images: [
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                        ],
                    likes: '101',
                    comment: '265',
                    shares: '56'
                },
                {
                    id: 3,
                    user: {
                      name: 'Lelia Chavez',
                      avatar: 'user3',
                    },
                    date: 'Jan 15, 2018',
                    description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
                    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                    images: [
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                        ],
                    likes: '101',
                    comment: '265',
                    shares: '56'
                },
            ]
        })

    }
    render() {
        const { navigation } = this.props;
        return (
            <Container style={styles.container}>
                <Content >
                    <View style={{ height: 130, marginTop: 20 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {this.state.NewsData.map((data, i)=> {
                                return (
                                <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => navigation.navigate('NewsDetails', { NewsDetail: data })}>
                                    <Stories imageSource={data.id}
                                            thumbSource={data.user.avatar}
                                            name={data.user.name}
                                    />
                                </TouchableOpacity>
                                )}
                            )}
                            {/* <Stories imageSource="1"
                                thumbSource="user1"
                                name="大王"
                            /> */}
                        </ScrollView>
                    </View>
                    <Separator top={5} bottom={10}/>
                    {this.state.NewsData.map((data, i)=> {
                        return (
                        <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => navigation.navigate('NewsDetails', { NewsDetail: data })}>
                            <FeedCard2 imageSource={data.id}
                                       description={data.description.split('').slice(0, 30)} 
                                        likes={data.likes}
                                        comments={data.comment}
                                        shares={data.shares}
                                        navigation={navigation}
                            />
                        </TouchableOpacity>
                        )}
                    )}
                    <FeedCard2 imageSource="1" description="基地和非合肥芜湖覅和分化和符合符合嘿嘿分，额覅和发黑灰非合肥二hi返回" likes="101" comments='234' shares='65'/>
                    <FeedCard2 imageSource="2"  likes="101" comments='234' shares='65'/>
                    <FeedCard2 imageSource="3" description="基地和非合肥芜湖覅和分化和符合符合嘿嘿分." likes="101" comments='234' shares='65'/>
                </Content>
            </Container>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});