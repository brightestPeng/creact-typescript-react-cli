// button.jsx
import React from 'react';

const Button = (props) => {
    // size: 'small'| 'middle' | 'large'
    const { size } = props;

    return (
        <div className={`btn-${size}`}>
            Button
        </div>
    );
};

export default Button;

// app.jsx
import React from 'react';

const App = () => {
    return <Button size={1} />;
};

export default App;
