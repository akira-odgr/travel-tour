export const HeaderForm = ({ formData }) => {
    return (
        <>
            {formData.map((item) => {
                return (
                    <div key={item.title} className="input__group">
                        <label htmlFor={item.title}>{item.title}</label>
                        <input
                            type="text"
                            name={item.title}
                            id={item.title}
                            placeholder={item.placeholder}
                        />
                    </div>
                );
            })}
        </>
    );
};
