import { Button , Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./Notify.css"
const items = [
  {
    key: 1,
    label: (
      <div className="notify__item">
        <div className="notify__icon">
        <BellOutlined />
        </div>
        <div className="notify__content">
          <div className="notify__message">
            Lorem is the text 1
          </div>
          <div className="notify__time">
            8h ago
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 2,
    label: (
      <div className="notify__item">
        <div className="notify__icon">
        <BellOutlined />
        </div>
        <div className="notify__content">
          <div className="notify__message">
            Lorem is the text 2
          </div>
          <div className="notify__time">
            8h ago
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 3,
    label: (
      <div className="notify__item">
        <div className="notify__icon">
        <BellOutlined />
        </div>
        <div className="notify__content">
          <div className="notify__message">
            Lorem is the text 3
          </div>
          <div className="notify__time">
            8h ago
          </div>
        </div>
      </div>
    ),
  }
]

function NotifyDropdown (){


    return(
        <>
            
                <Dropdown menu={{ items }} trigger={["click"]} 
                  dropdownRender={(menus)=>(
                      <div className="notify">
                          <div className="notify__head">
                            <div>
                              <Button icon = {<BellOutlined />}></Button>
                                Notification
                            </div>
                          
                            <div className="notify__title">
                              View All
                            </div>
                          </div>
                          <div className="notify__body">
                            {menus}
                          </div>
                      </div>
                )}  
                >
                <Button icon = {<BellOutlined />}></Button>
                </Dropdown>
           
        </>
    )
}
export default NotifyDropdown;