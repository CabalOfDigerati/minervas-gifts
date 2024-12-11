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
    gifts.forEach(gift => {
        gift.addEventListener('click', function () {
            const allGiftVariants = document.querySelectorAll('[dd-gift="variants"]');
            allGiftVariants.forEach(variant => {
                variant.classList.add('hide');
                let variantRadioButtons = variant.querySelectorAll('input[type="radio"]');
                console.log(variantRadioButtons);
                if (!variantRadioButtons) {
                    return;
                }
                variantRadioButtons.forEach(variantRadioButton => {
                    variantRadioButton.setAttribute('disabled', 'disabled');
                });
            });
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

