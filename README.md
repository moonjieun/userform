## ✨ 사용기술 및 라이브러리
<img src="https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react&logoColor=#343533"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
### 🤔왜 styled-component를?
 저는 이번 과제에서 `input`에 `errorMessage`가 있을 시 `props`나 조건문을 사용하여 동적인 스타일링을 위해 사용

## 📌문제
**문제 발생 :** 에러 핸들러 하나를 사용하니 닉네임이 다른 인풋필드와 중복이 되었을 때 중복되어 있는 인풋필드 외의 다른 필드까지 닉네임 중복 에러메세지가 나타남<br/>
**해결 :** 에러 핸들러를 배열로 만들어 각각의 index로 관리

<img width="80%" src="https://velog.velcdn.com/images/moonjieun/post/f6277d80-30f3-4a89-b1e6-be5c49f8c464/image.gif"/>

### ✅해결 

💬코드

```js
     const duplicateCheckName = () => {
    const newErrorLogs = [...duplicateError];
    const names = formFields.map((fields) => fields.name);

    const { duplicateNameIdxs, notDuplicateNameIdxs } = names.reduce(
      (res, name, idx) => {
        const newNames = [...names.slice(0, idx), ...names.slice(idx + 1)];

        if (name.length > 0 && newNames.includes(name)) {
          res.duplicateNameIdxs.push(idx);
        } else {
          res.notDuplicateNameIdxs.push(idx);
        }
        return res;
      },
      { duplicateNameIdxs: [], notDuplicateNameIdxs: [] }
    );

    duplicateNameIdxs.forEach((idx) => {
      newErrorLogs[idx] = {
        isError: true,
        message: `The name"${names[idx]}"is duplicated.`,
      };
    });
    notDuplicateNameIdxs.forEach((idx) => {
      newErrorLogs[idx] = { isError: false, message: "" };
    });

    setDuplicateError(newErrorLogs);
  };
```

- 🐞한번 중복검사에 걸려 `errorLogs`에 저장하면 입력받지 않은 폼에도 에러메세지가 모두 떠 있는 현상이였고
- 이를 에러메세지에도 `index`를 주어 중복검사에 걸린 이름 `index`와 에러메세지를 저장
- `duplicateCheckName` 함수는 중복된 이름이 있는 경우 해당 이름에 대한 에러 메시지를 설정 및 중복이 없는 경우에는 에러 메시지를 초기화
이를 구현하기 위해 인덱스를 활용하여 `newErrorLogs` 배열을 업데이트 

1. `duplicateNameIdxs` 배열에는 중복된 이름의 인덱스들을 저장
2. `notDuplicateNameIdxs` 배열에는 중복되지 않은 이름의 인덱스들을 저장 후 이 인덱스들을 활용하여 각각의 상황에 맞게 `newErrorLogs` 배열을 업데이트하고
- 중복된 이름이 있는 경우 `(duplicateNameIdxs):`
  해당 인덱스의 `newErrorLogs`를 업데이트하여 중복 에러 메시지를 설정
- 중복이 없는 경우 `(notDuplicateNameIdxs):`
  해당 인덱스의 `newErrorLogs`를 초기화하여 에러 메시지를 제거하는 방식으로 개선
  

### ❗제출 전 개선사항
✍ 문제를 확인해보니 포커스가 떠날 때 `input`밑에 에러가 뜨는것을 확인
- 수정전 `handleChange`로 `input`값이 변경될때 `setFormFields`를 해준뒤 `useEffect`의 의존성 배열안에 `formFields`를 넣어 값이 변경될 때 `duplicateCheckName()`함수를 실행시켜주는것으로 작성
- 변경후`handleBlur`를 이용하여 해당 `input`에 **focus가 떠났을 때** `duplicateCheckName()`함수 실행하는것으로 변경하여 마무리 하였습니다!  

### ✅완성된 실행결과
<img width="80%" src="https://velog.velcdn.com/images/moonjieun/post/b3aaa9ab-586b-4949-b19c-6a1962f52a47/image.gif"/>

### 🤔과제하며 고민했던 것
- **reduce와 forEach의 사용의 고민**
함수 내부에서 외부 상태를 변경하면서 사용될 경우, 이는 함수형 프로그래밍의 원칙과 어긋날 수 있고, forEach 를 사용한것이 코드가 훨씬 간결하고 직관적이지만 저는 기존 배열에 영향을 주지않고 불변성을 유지하기 위해 함수내에서 스프레드연산자를 사용하여 가져왔기 때문에 reduce를 선택하게 되었습니다.

- **splice와 slice의 고민**
이것 또한 splice는 배열의 원본을 수정, 특정 위치에서 요소를 추가하거나 제거할 수 있지만 slice는 배열의 일부분을 추출하여 새로운 배열을 반환하기 때문에 slice를 이용하여 새롭게 배열을 만들어 사용하게 되었습니다.

- **커스텀훅으로 컴포넌트에서 UI와 비즈니스 로직을 분리하는것!**
커스텀훅에는 다양한 이점이 있지만 그중 재사용성 때문에 고민이 있엇습니다.
과제에서는 재사용성으로 커스텀훅을 이용하기 보단 유지보수와 코드간결성, 컴포넌트와 비즈니스 로직을 분리하는것으로 사용하게 되었습니다.

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
