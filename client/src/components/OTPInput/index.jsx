import React, { useRef, useState, useEffect } from 'react';

const OTPInput = ({ length = 6, onChange }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputsRef = useRef([]);

    // Call parent onChange
    useEffect(() => {
        onChange(otp.join(''));
    }, [otp, onChange]);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, '');

        if (!value) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to next input
        if (index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            e.preventDefault();

            const newOtp = [...otp];
            if (otp[index]) {
                newOtp[index] = '';
                setOtp(newOtp);
            } else if (index > 0) {
                inputsRef.current[index - 1]?.focus();
                newOtp[index - 1] = '';
                setOtp(newOtp);
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('Text').slice(0, length).replace(/[^0-9]/g, '');
        const newOtp = [...otp];

        pasteData.split('').forEach((char, i) => {
            if (i < length) {
                newOtp[i] = char;
                inputsRef.current[i].value = char;
            }
        });

        setOtp(newOtp);

        const nextIndex = Math.min(pasteData.length, length - 1);
        inputsRef.current[nextIndex]?.focus();
    };

    return (
        <div className="flex justify-center gap-2 mt-3" onPaste={handlePaste}>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputsRef.current[index] = el)}
                    className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            ))}
        </div>
    );
};

export default OTPInput;
