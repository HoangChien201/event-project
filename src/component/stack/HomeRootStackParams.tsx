import EventBottomTab from "../bottom-stack/EventBottomTab"
import EventDetail from "../events/Quyetcomponent/EventDetail";
import CommentScreen from "../events/screens/CommentScreen";
import NotificationScreen from "../events/screens/NotificationScreen"
import UserStack from "./UserStack";



enum HomeRootStackEnum {
    EventBottomTab = 'EventBottomTab',
    UserStack = 'UserStack',
    NotificationScreen = 'NotificationScreen',
    EventDetailScreen = 'EventDetailScreen',
    CommentScreen = 'CommentScreen'



}

export type HomeRootStackParams = {
    EventBottomTab: undefined;
    UserStack:undefined;
    NotificationScreen: undefined;
    EventDetailScreen: undefined;
    CommentScreen: undefined

}

export const HomeRootStackScreens = [
    {
        id: Math.random() + "" + Date,
        name: HomeRootStackEnum.EventBottomTab,
        component: EventBottomTab,
        options: {
            headerShown: false
        }
    },
    {
        id: Math.random() + "" + Date,
        name: HomeRootStackEnum.NotificationScreen,
        component: NotificationScreen,
        options: {
            title: 'Notification'
        }
    },
    {
        id: Math.random() + "" + Date,
        name: HomeRootStackEnum.EventDetailScreen,
        component: EventDetail,
        options: {
            headerShown: false
        }
    },
    {
        id: Math.random() + "" + Date,
        name: HomeRootStackEnum.CommentScreen,
        component: CommentScreen,
        options: {
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: '600',
                color: '#000'
            },
            title:'Comments'
        }
    },
    {
        id: Math.random() + "" + Date,
        name: HomeRootStackEnum.UserStack,
        component: UserStack,
        options: {
            headerShown:false
        }
    },


]