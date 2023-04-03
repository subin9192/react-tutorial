import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: '이름없음',
    };
    
    render() {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

// function Hello(props) {
//     function Hello({ color, name, isSpecial }) { // 비구조할당 혹은 구조분해.
//     // console.log(props);
//     return (
//         <div style={{
//         // color: props.color // red가 객체의 color값으로 들어감.
//         // color: color
//             color
//         // }}>안녕하세요 {props.name}</div>; // semicolon 생략가능.
//         }}>
//             { isSpecial && <b>*</b>} {/* 삼항연산자보다 앤드연산자를 넣는 것이 간편하다. */}
//             안녕하세요 {name}
//         </div>
//     ); 
// }

// Hello.defaultProps = { // 기본값 설정
//     name: '이름없음'
// };

export default Hello; // Hello라는 컴포넌트를 만들어서 내보내기.