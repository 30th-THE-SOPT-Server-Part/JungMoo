yarn add express
yarn add -D @types/node @types/express // -D 옵션은 devDependencies에 추가.
yarn add -D nodemon

tsc --init // typescript 컴파일러 옵션을 관리하는 파일
tsconifg.json 파일을 수정. 

index.ts 생성

nodemon 설정
src/ 와 같은 위치에 nodemon.json 파일 생성. 
nodemon.json 파일은 nodemon에 대한 설정 관리. 

package.json에 scripts 속성 추가. 
```
"scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist"
}
```
yarn run build로 서버 실행.