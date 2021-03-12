// import React from 'react';

// interface ButtonProps {
//     size: 'small' | 'middle' | 'large';
// }

// const Button: React.FC<ButtonProps> = (
//     props: ButtonProps,
// ) => {
//     const { size } = props;

//     return <div className={`btn-${size}`}>Button</div>;
// };

import React from 'react';

const App: React.FC = () => {
    // 不能将类型“number”分配给类型“"small" | "middle" | "large"”
    return <Button size={1} />;
};

export default App;
