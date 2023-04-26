import React from "react";

export default function About() {
    return (
        <>
            <div className="container my-5 ">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                About 
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>Myself Dhiraj,
                                    This is my First React website.
                                    This helps us in Text Utility...
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
