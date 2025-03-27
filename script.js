//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
            const codeInputs = document.querySelectorAll('.code');
            const codeContainer = document.querySelector('.code-container');
            
            codeInputs[0].focus();
            
            codeContainer.addEventListener('input', (e) => {
                if (e.target.classList.contains('code')) {
                    const index = parseInt(e.target.getAttribute('data-index'));
                    
                    if (e.target.value.length === 1 && index < codeInputs.length - 1) {
                        codeInputs[index + 1].focus();
                    }
                }
            });
            
            codeContainer.addEventListener('keydown', (e) => {
                if (e.target.classList.contains('code') && e.key === 'Backspace') {
                    const index = parseInt(e.target.getAttribute('data-index'));
                    
                    if (e.target.value.length === 0 && index > 0) {
                        codeInputs[index - 1].focus();
                    }
                }
            });
            
            codeContainer.addEventListener('paste', (e) => {
                e.preventDefault();
                const pasteData = e.clipboardData.getData('text').trim();
                
                if (/^\d{6}$/.test(pasteData)) {
                    for (let i = 0; i < 6; i++) {
                        codeInputs[i].value = pasteData[i];
                    }
                    codeInputs[5].focus();
                }
            });
            
            document.querySelector('.verify-button').addEventListener('click', () => {
                let otp = '';
                codeInputs.forEach(input => {
                    otp += input.value;
                });
                
                if (otp.length === 6) {
                    alert(`Verifying OTP: ${otp}`);
                } else {
                    alert('Please enter the complete 6-digit code');
                }
            });
        });