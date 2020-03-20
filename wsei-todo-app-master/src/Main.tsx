import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';

import Welcome from './screens/Welcome';

interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (
        
            <Welcome myProps='Mój props'/>
       
    );
};




export default Main;