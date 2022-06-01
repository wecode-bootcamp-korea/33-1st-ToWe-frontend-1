import React, { useState } from 'react';
import './SignUp.scss';
import SignUpComponent from './component/SignUpComponent';

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
    pw1: '',
    pw2: '',
    address: '',
    phone: '',
  });

  const { email, name, pw1, pw2, address, phone } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // 이메일, 비밀번호, 비밀번호 확인,
  // const emailCheck = email => {
  //   if (email === '') {
  //     alert('이메일을 입력해주세요.');
  //   }
  // };

  // 여기는 백엔드 통신
  const GoSignUp = () => {
    fetch('http://10.58.5.168:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        name: name,
        password: pw1,
        address: address,
        phone_number: phone,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('이메일과 비밀번호를 다시 한번 확인해주세요!');
        }
      })
      .then(result => {
        navigator('/login');
        // localStorage.setItem('TOKEN', result.access_token);
      });
  };

  const alertName = () => {
    if (
      inputValue.name === '' ||
      inputValue.address === '' ||
      inputValue.phone === ''
    ) {
      alert('빈칸을 입력해주세요');
    }
  };

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,}$/;
  const passwordCondition = passwordRegex.test(inputValue.pw1) && pw1 === pw2;
  const emailCondition = email.includes('@') && email.includes('.');

  const isValid = passwordCondition && emailCondition;

  const INPUT = [
    {
      id: 0,
      title: 'EMAIL ADDRESS',
      type: 'text',
      name: 'email',
      value: email,
    },
    {
      id: 1,
      title: 'NAME',
      type: 'text',
      name: 'name',
      value: name,
    },
    {
      id: 2,
      title: 'PASSWORD',
      type: 'password',
      name: 'pw1',
      value: pw1,
    },
    {
      id: 3,
      title: 'PASSWORD CONFIRMATION',
      type: 'password',
      name: 'pw2',
      value: pw2,
    },
    {
      id: 4,
      title: 'PHONE',
      type: 'text',
      name: 'phone',
      value: phone,
    },
    {
      id: 5,
      title: 'ADDRESS',
      type: 'text',
      name: 'address',
      value: address,
    },
  ];

  return (
    <div className="SignUp">
      <div className="signUpWrapper">
        <div className="signUpField">
          <div className="signUpHeader">
            <span className="signUpTitle">Sign Up</span>
          </div>
          <div className="contentBox">
            {INPUT.map(input => (
              <SignUpComponent
                input={input}
                key={input.id}
                name={input.name}
                value={input.value}
                handleInput={handleInput}
              />
            ))}
          </div>
          <div className="checkboxWrapper">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="agreeBox">
              <span className="agreeText">모두 동의합니다.</span>
            </div>
          </div>
          <div className="checkboxWrapper">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="agreeBox">
              <span className="agreeText">
                (필수) 이용약관과 개인정보 수집 및 이용에 동의합니다.
              </span>
            </div>
          </div>
          <div className="checkboxWrapper">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="agreeBox">
              <label className="agreeText">
                (필수) 만 14세 이상입니다.
                <br />
                <span className="agreeSubText">
                  만 19세 미만의 미성년자가 결제 시 법정대리인이 거래를 취소할
                  수 있습니다.
                </span>
              </label>
            </div>
          </div>
          <div className="checkboxWrapper">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="agreeBox">
              <label className="agreeText">
                (선택) 이메일 및 SMS 마케팅 정보 수신에 동의합니다.
                <br />
                <span className="agreeSubText">
                  회원은 언제든지 회원 정보에서 수신 거부로 변경할 수 있습니다.
                </span>
              </label>
            </div>
          </div>
          <div className="btnWrapper">
            <button
              className="signUpBtn"
              type="button"
              onClick={() => {
                GoSignUp();
                alertName();
              }}
              disabled={!isValid}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
