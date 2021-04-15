import  React from 'react';
import MainPages from './pages/MainPages';

const App = () => {
	return (
		<div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 p-0">
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <MainPages />
                </div>
            </div>
        </div>
	);
};

export default App;
