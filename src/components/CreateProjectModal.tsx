import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    projectName: string;
    projectDirectory: string;
};

export const CreateProjectModal: React.FC<{ modalOpen: boolean; handleModelOpen: () => void }> = ({
    modalOpen,
    handleModelOpen,
}) => {
    const modalClass = modalOpen ? 'block' : 'hidden';

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // TODO Create project here
        console.log(data);
    };

    const validateDirectory = (value: string): any => {
        // TODO validate directory input
        return true;
    };

    // TODO Smooth display and hiding of modal

    return (
        <div className={modalClass}>
            <div className="fixed z-10 inset-0 overflow-y-auto justify-center items-center backdrop-filter backdrop-blur-sm">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="flex items-start justify-between p-5 border-b rounded-t">
                            <h3 className="text-xl lg:text-2xl font-semibold">Create Project</h3>
                        </div>

                        <form className="p-6 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="project-name" className="block mb-1 text-sm text-gray-600">
                                    Project Name
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-base border border-b-2 border-gray-400 focus:outline-none focus:border-green-400"
                                    placeholder="Project Name"
                                    {...register('projectName', { required: true, maxLength: 20 })}
                                />
                                {errors.projectName?.type === 'required' && (
                                    <span className="inline-flex text-sm text-red-700">Project name required</span>
                                )}
                                {errors.projectName?.type === 'maxLength' && (
                                    <span className="inline-flex text-sm text-red-700">
                                        Project name too long! Maximum Length is 20 characters
                                    </span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="project-directory" className="block mb-1 text-sm text-gray-600">
                                    Project Directory
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-base border border-b-2 border-gray-400 focus:outline-none focus:border-green-400"
                                    placeholder="Project Directory"
                                    {...register('projectDirectory', {
                                        required: true,
                                        validate: (value) => validateDirectory(value) || 'Invalid directory',
                                    })}
                                />
                                {errors.projectDirectory?.type === 'required' && (
                                    <span className="inline-flex text-sm text-red-700">
                                        Directory reference required
                                    </span>
                                )}
                                {errors.projectDirectory?.type === 'validate' && (
                                    <span className="inline-flex text-sm text-red-700">Invalid directory</span>
                                )}
                            </div>

                            <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b">
                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Create
                                </button>
                                <button
                                    type="button"
                                    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={handleModelOpen}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
