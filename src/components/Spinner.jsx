import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ isLoading }) => {
	return (
		<div className="flex items-center justify-center min-h-screen ">
			<ClipLoader
				color="#1eb854"
				loading={isLoading}
				size={150}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Spinner;
