/**
 * Display Gift Variants.
 * 
 * @author <cabal@digerati.design>
 */
export const displayGiftVariants = () => {
    const gifts = document.querySelectorAll('[dd-gift="type"]');
    if (!gifts) {
        return;
    }
    /**
     * Disable Gift Variants.
     */
    const disableGiftVariants = () => {
        const allGiftVariants = document.querySelectorAll('[dd-gift="variants"]');
        allGiftVariants.forEach(variant => {
            variant.classList.add('hide');
            let variantRadioButtons = variant.querySelectorAll('input[type="radio"]');
            if (!variantRadioButtons) {
                return;
            }
            variantRadioButtons.forEach(variantRadioButton => {
                variantRadioButton.setAttribute('disabled', true);
            });
        });
    };
    disableGiftVariants();
    /**
     * Add Click Handler.
     */
    gifts.forEach(gift => {
        gift.addEventListener('click', (): void => {
            disableGiftVariants();
            let giftVariants = gift.querySelector('[dd-gift="variants"]');
            if (!giftVariants) {
                return;
            }
            giftVariants.classList.remove('hide');
            let giftVariantRadioButtons = giftVariants.querySelectorAll('input[type="radio"]');
            if (!giftVariantRadioButtons) {
                return;
            }
            giftVariantRadioButtons.forEach(giftVariantRadioButton => {
                giftVariantRadioButton.removeAttribute('disabled');
            });
        });
    });
};
/**
 * Clean Form POST Data.
 * 
 * @author <cabal@digerati.design>
 */
export const cleanFormPostData = () => {
    const submitButton = document.querySelector('input[type="submit"]');
    if (!submitButton) {
        return;
    }
    submitButton.addEventListener('click', () => {
        const giftForm = document.querySelector('form');
        if (!giftForm) {
            return;
        }
        let radioButtons = document.querySelectorAll('input[type="radio"]');
        if (!radioButtons) {
            return;
        }
        radioButtons.forEach(radioButton => {
            if (radioButton.disabled) {
                radioButton.remove();
            }
        });
        return true;
    });
};

