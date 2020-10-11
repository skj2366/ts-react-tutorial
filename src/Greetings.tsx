import React from 'react';

type GreetingsProps = {
    name: string;
    mark?: string;
};

// const Greetings: React.FC<GreetingsProps> = ({name, mark = '@'}) => {
//     return <div>Hello, {name} {mark}</div>;
// };

function Greetings({name,mark}:GreetingsProps) {
    return (
        <div>
            Hola, {name} {mark}
        </div>
    )
}

Greetings.defaultProps = {
    mark :'!'
}

export default Greetings;