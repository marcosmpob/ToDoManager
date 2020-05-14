import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { TaskListView } from '../components/Components';
import { readTasksFromFirebaseAsync } from '../services/FirebaseApi';

const imgPlus = require('../assets/plus.png');

export default class ToDoTasks extends Component {
    static navigationOptions = {
        tabBarLabel: 'To Do',
        tabBarIcon: ({ tintColor }) => (
            <Image source={imgCheckList}
                style={[styles.icon, { tintColor }]} />
        )
    }

    state = {
        tasks: []
    }

    render() {
        return (
            <View style={styles.container}>
                <TaskListView tasks={this.state.tasks}
                    navigation={this.props.navigation} />
                <TouchableOpacity
                    style={styles.floatButton}
                    onPress={() => this._goToTask()}>
                    <Image source={imgPlus} style={styles.img} />
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        readTasksFromFirebaseAsync(this._fetchTasks.bind(this));
    }
    _fetchTasks(tasks) {
        const tasksToDo = tasks.filter(t => !t.isDone);
        this.setState({ tasks: tasksToDo });
    }
    _goToTask() {
        this.props.navigation.navigate('Task');
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        width: 26,
        height: 26
    },
    img: {
        width: 50,
        height: 50
    }
});