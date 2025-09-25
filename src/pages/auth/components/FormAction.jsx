export default function FormAction({
    handleSubmit,
    type = "Button",
    action = "submit",
    text,
    isSubmitting,
}) {
    return (
        <button
            className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
            onSubmit={handleSubmit}
            type={action}
        >
            {isSubmitting ? (
                <div className="flex justify-center gap-4">
                    <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                    <span>Logging in...</span>
                </div>
            ) : (
                { text }
            )}
        </button>
    );
}
