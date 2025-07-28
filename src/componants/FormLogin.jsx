import { useState } from "react";

export default function FormLogin () {
    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    });
    let arr = [];
        let data = localStorage.getItem('loginInstagram');
        if(data != null){
            arr =JSON.parse(data)
        }else{
            arr =[];
        }
    const inputHandler = (event) => {
        setInputValue({ ...inputValue, [event.target.name]:event.target.value});
    };
    const submit = (event) => {
        event.preventDefault();
           let result = arr.filter((items,index)=>{
                return items.email === inputValue.email && items.password === inputValue.password ;
            });
            if(result.length > 0){
                alert('login succesfully');
            } else{
                alert('password is not match')
            }
        setInputValue({
            email: "",
            password: ""
        });
    };
    return (
        <div className="Dashboardlogin">
        <div className="login-container">
            <form className="login-form" onSubmit={submit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name='email'
                        value={inputValue.email}
                        onChange={inputHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name='password'
                        value={inputValue.password}
                        onChange={inputHandler}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
    )
}