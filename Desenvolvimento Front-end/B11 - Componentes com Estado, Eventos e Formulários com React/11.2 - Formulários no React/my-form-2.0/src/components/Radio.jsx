import React from "react";

export default class Radio extends React.Component {
    render() {
        const {type,name,name2}= this.props
        return (
            <div>
                <input type={type} id={name} name={name} value={name}/>
                    <label for={name}>Casa</label>
                        <input type={type} id={name2} name={name2} value={name2}/>
                            <label for={name2}>Apartamento</label>
                        </div>
                        )
    }
}