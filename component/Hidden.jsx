import {
    IconChevronDown,
    IconChevronUp,
    IconMailForward,
    IconMapPins,
  } from "@tabler/icons";
import { useState } from "react";

export default function Hidden(data){
    
    return(
        <div className="text-center">
          <p>
          <IconMailForward /> {data.email}
        </p>
        <p>
          <IconMapPins /> {data.locate.city + " " + data.locate.state + " " + data.locate.country + " " + data.locate.postcode}
        </p>
        </div>
    )

}