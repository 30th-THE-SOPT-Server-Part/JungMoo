interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti?: string[];
}

const serverPart: ServerPart = {
    name: '박정무',
    age: 15,
    group: 'YB',
    // mbti: ['mbti']
}

console.log(serverPart);
