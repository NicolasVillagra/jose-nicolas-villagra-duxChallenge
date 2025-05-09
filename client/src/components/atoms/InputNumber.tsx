
import React from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function InputNumberComponent(value:number) {



    return (
        <div className="card flex flex-wrap gap-3 p-fluid">

            <div className="flex-auto">
                <InputNumber inputId="withoutgrouping" value={value}/>
            </div>

        </div>
    )
}
        