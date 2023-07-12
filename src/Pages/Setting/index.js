import { Tabs   } from 'antd';
import SettingAcount from '../../components/SettingAccount';
function Setting (){
    const items = [
        {
            key: 1,
            label: "Account",
            children: <SettingAcount/>
        },
        {
            key: 2,
            label: "Network",
            children: <SettingAcount/>
        },
        {
            key: 3,
            label: "Notification",
            children: <SettingAcount/>
        },
    ]
    
    return(
        <>
            <Tabs items={items}/>

        </>
    )
}
export default Setting;