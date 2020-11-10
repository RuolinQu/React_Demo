import React from 'react';

export default class FetchDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            img_array: []
        }
    }

    componentDidMount() {

        // fetch("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php").then(res => {
        //     return res.json()
        // }).then(data => {
        //     console.log(data);
        //     this.setState({
        //         img_array: data.chengpinDetails[0].img
        //     })
        //     console.log(this.state.img_array);
        // })
        fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json,text/plain,*/*'
            }),
            body: "user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
            // body: {
            //     user_id: "iwen@qq.com",
            //     password: "iwen123",
            //     verification_code: "crfvw"
            // }
        }).then(res => res.json())
            .then(data => { console.log(data); })


    }



    render() {
        const { imgs } = this.state.img_array
        return (
            <div>
                <ul>
                    {
                        this.state.img_array.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}