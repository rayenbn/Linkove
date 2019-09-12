import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    SafeAreaView
} from "react-native";
import {Container, Content } from 'native-base'
import Stories from '../components/Home/Stories'
import FeedCard2 from '../components/Home/FeedCard2'
import Separator from '../components/Separator'

class Home extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content >
                    <View style={{ height: 130, marginTop: 20 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Stories imageSource="1"
                                thumbSource="user1"
                                name="大王"
                            />
                            <Stories imageSource="2"
                                thumbSource="user2"
                                name="欧阳"
                            />
                            <Stories imageSource="3"
                                thumbSource="user3"
                                name="小包"
                            />
                        </ScrollView>
                    </View>
                    <Separator top={5} bottom={10}/>
                    <FeedCard2 imageSource="1" description="基地和非合肥芜湖覅和分化和符合符合嘿嘿分，额覅和发黑灰非合肥二hi返回" likes="101" comments='234' shares='65'/>
                    <FeedCard2 imageSource="2" description="" likes="101" comments='234' shares='65'/>
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