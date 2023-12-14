## ✨ 사용기술 및 라이브러리
<img src="https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react&logoColor=#343533"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
### 🤔왜 styled-component를?
 저는 이번 과제에서 `input`에 `errorMessage`가 있을 시 `props`나 조건문을 사용하여 동적인 스타일링을 위해 사용

## 📑문제 발생 및 해결
- **문제 발생 :** 에러 핸들러 하나를 사용하니 이름이 다른 인풋필드와 중복이 되었을 때 중복되어 있는 인풋필드 외의 다른 필드까지 이름 중복 에러메세지가 나타남<br/>
- **해결 :** 에러 핸들러를 배열로 만들어 `div`마다 개별 에러 핸들러를 만들어 해결

<img width="80%" src="https://velog.velcdn.com/images/moonjieun/post/f6277d80-30f3-4a89-b1e6-be5c49f8c464/image.gif"/>


### ❗제출 전 개선사항
✍ 문제를 확인해보니 포커스가 떠날 때 `input`밑에 에러가 뜨는것을 확인
- 수정전 `handleChange`로 `input`값이 변경될때 `setFormFields`를 해준뒤 `useEffect`의 의존성 배열안에 `formFields`를 넣어 값이 변경될 때 `duplicateCheckName()`함수를 실행시켜주는것으로 작성
- 변경후`handleBlur`를 이용하여 해당 `input`에 **focus가 떠났을 때** `duplicateCheckName()`함수 실행하는것으로 변경하여 마무리 하였습니다!  

### ✅완성된 실행결과
<img width="80%" src="https://velog.velcdn.com/images/moonjieun/post/b3aaa9ab-586b-4949-b19c-6a1962f52a47/image.gif"/>

### 🤔과제하며 고민했던 것
- **커스텀훅으로 컴포넌트에서 UI와 비즈니스 로직을 분리하는것!**
커스텀훅에는 다양한 이점이 있지만 그중 재사용성 때문에 고민이 있엇고
과제에서는 재사용성으로 커스텀훅을 이용하기 보단 유지보수와 코드간결성, 컴포넌트와 비즈니스 로직을 분리하는것으로 사용

- **reduce와 forEach의 사용의 고민**
함수 내부에서 외부 상태를 변경하면서 사용될 경우, 이는 함수형 프로그래밍의 원칙과 어긋날 수 있고, forEach 를 사용한것이 코드가 훨씬 간결하고 직관적이지만
기존 배열에 영향을 주지않고 불변성을 유지하기 위해 함수내에서 스프레드연산자를 사용하여 가져왔기 때문에 reduce를 선택

- **splice와 slice의 고민**
이것 또한 splice는 배열의 원본을 수정, 특정 위치에서 요소를 추가하거나 제거할 수 있지만 slice는 배열의 일부분을 추출하여 새로운 배열을 반환하기 때문에 slice를 이용하여 새롭게 배열을 만들어 사용

### 💻폴더 구조
```
form
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ components
│  │  └─ form // 폼 컴포넌트 폴더
│  │     ├─ Form.jsx // 폼 부모 컴포넌트
│  │     ├─ FormField.jsx // 라벨과 인풋으로 구성된 컴포넌트
│  │     ├─ FormSection.jsx // 폼 안 컨테이너를 구성하는 컴포넌트
│  │     └─ FormUserList.jsx // 폼이 제출되었을 때 보이는 카드형식 유저리스트 컴포넌트
│  ├─ hooks
│  │  └─ useFormEvent.jsx // 폼 부모 컴포넌트에서 비즈니스로직을 분리하기 위해 커스텀 훅 생성
│  ├─ index.css
│  ├─ index.js
│  ├─ logo.svg
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  └─ styles
│     ├─ formStyles // 폼 스타일을 정의하는 폴더
│     │  ├─ Form.styles.jsx
│     │  ├─ FormField.styles.jsx
│     │  ├─ FormSection.styles.jsx
│     │  └─ FormUserList.styles.jsx
│     └─ GlobalStyles.js // 글로벌 스타일
└─ yarn.lock

```
