import { Collapse } from 'antd';
function CollapseMenu (){
    const items = [
        {
            key: 1,
            label: "Logo 1",
            children: <div>
                <p>Lorem is the test 1</p>
            </div>
        },
        {
            key: 2,
            label: "Logo 2",
            children: <div>
                <p>Lorem is the test 2</p>
            </div>
        },
        {
            key: 3,
            label: "Logo 3",
            children: <div>
                <p>Lorem is the test 3</p>
            </div>
        }
    ]

    return(
        <>
            <Collapse items={items}  defaultActiveKey = {[1]} expandIconPosition = "end" accordion ="true"/>
        </>
    )
}
export default CollapseMenu;