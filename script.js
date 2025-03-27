//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
            const codeInputs = document.querySelectorAll('.code');
            
            // Focus the first input on page load
            document.getElementById('code-1').focus();
            
            // Handle input events
            codeInputs.forEach((input, index) => {
                input.addEventListener('input', (e) => {
                    // If input has value, move to next field
                    if (e.target.value.length === 1 && index < codeInputs.length - 1) {
                        codeInputs[index + 1].focus();
                    }
                });
                
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace') {
                        // If current field is empty and not the first one, move to previous field
                        if (e.target.value.length === 0 && index > 0) {
                            codeInputs[index - 1].focus();
                        }
                    }
                });
            });
        });