import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';

import Welcome from './screens/Welcome';

interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (
        <SafeAreaView>
            {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
            <Welcome myProps='Mój props'/>
        </SafeAreaView>
    );
};




export default Main;