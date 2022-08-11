import {
    IconChevronDown,
    IconChevronUp,
    IconMailForward,
    IconMapPins,
  } from "@tabler/icons";
import { useState } from "react";
import Hidden from "./Hidden";

export default function Card(data) {
    const [view , setView] = useState(false)
    const onClickHandler = () => {
        if(view === true){
            setView(false)
        }else{
            setView(true)
        }
    }
    
    return(
        <div className="border-bottom">
        {/* main section */}
        <div className="d-flex align-items-center p-3" onClick={() => onClickHandler()}>
          <img
            src={data.pic}
            width="90px"
            class="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">{data.name}</span>
          <span >
                { view?<IconChevronUp />:<IconChevronDown />}
          </span>
        </div>

        {/* UserCardDetail is hidden */}
        {view?<Hidden email = {data.email} locate = {data.locate}/>:false}
      </div>
    )
}